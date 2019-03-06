<template>
    <div class="search-results container-fluid mt-5">
        <div class="row result-container" v-for="i in 9" :key="i">
            <div class="col-12 col-sm-6 col-lg-3" v-for="result in paginatedData.slice((i-1)*8, i*8)" :key="result.id">
            <Result :result="result" :agent="agent"/>
            </div>
            <Advert v-if="i === 1" class="w-100 mt-4 mb-5 ml-3 mr-3" />
        </div>
        <nav aria-label="Page navigation" v-if="hasMoreThanOnePage">
            <ul class="pagination justify-content-center">
                <li class="page-item border-0">
                    <a class="page-link border-0 text-center" aria-label="Previous"  @click="previousPage">
                        <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                <li class="page-item border-0" v-for="page in pageCount" v-bind:key="page">
                    <a class="page-link border-0 text-center" @click="setPage(page)">{{page}}</a>
                </li>
                <li class="page-item border-0">
                    <a class="page-link border-0 text-center" aria-label="Next" @click="nextPage">
                        <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Result from './Result'
import Advert from '../Shared/Advert'
import EventBus from '../../event-bus.js'

export default {
    name: 'SearchResults',
    data() {
        return {
            searchResults: [],
            filteredSearchResults: Array,
            pageNumber: 0,
            size: 12,
            toursOnPage: 0,
            hasMoreThanOnePage: false
        }
    },
    props: {
        agent: Boolean,
        destinations: Array
    },
    components: {
        Result,
        Advert
    },
    created() {
        this.getTours(this.$route.params.destination.replace(/-/g, ' '))
        this.reset()
        let vm = this
        vm.sort('fromPrice', 1)
        EventBus.$on('filter', (filters) => {
            vm.filter(filters)
        })
        EventBus.$on('sort', (sortOrder) => {
            if (sortOrder.sortAscending === true) {
                vm.sort(sortOrder.item, 1)
            } 
            else if (sortOrder.sortAscending === false) {
                vm.sort(sortOrder.item, 2)
            }
        })
    },
    methods: {
        nextPage() {
            if (this.pageNumber < this.pageCount-1){
                this.pageNumber++                      
            this.scrollToTop(document.getElementsByClassName('filter-info')[0])
            EventBus.$emit('getTours', this.getToursOnPage(this.filteredSearchResults))
            }
        },
        previousPage() {
            if(this.pageNumber > 0) {
                this.pageNumber--
            this.scrollToTop(document.getElementsByClassName('filter-info')[0])
            EventBus.$emit('getTours', this.getToursOnPage(this.filteredSearchResults))
            }
        },
        setPage(number) {
            this.pageNumber = number-1
            this.scrollToTop(document.getElementsByClassName('filter-info')[0])
            EventBus.$emit('getTours', this.getToursOnPage(this.filteredSearchResults))
        },
        scrollToTop: function(el) {
            let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
            let coordinates = { top: rect.top + scrollTop, left: rect.left + scrollLeft }
            window.scrollTo(0, coordinates.top)
        },
        getTours: function(region) {
            if (region === 'Australia'){
                region = 'Australia & South Pacific'
            }
            this.searchResults = this.destinations.filter(result => result.region.toLowerCase().indexOf(region.toLowerCase()) > -1)
            EventBus.$emit('getTours', this.getToursOnPage(this.searchResults))
            this.enablePagination(this.searchResults)
        },
        getToursOnPage: function(results) {
            let pagecount = Math.ceil(results.length / this.size)
            if(this.pageNumber+1 < pagecount){
                this.toursOnPage = this.size
            } else {
                if (pagecount === 0) {
                    pagecount = 1
                }
                this.toursOnPage = (results.length - (this.size * (pagecount-1)))
            }
            let pages = {
                total: results.length,
                current: this.toursOnPage
            }
            return pages
        },
        filterByDestination: function(destination) {
            if (destination !== 'Show All') {
                this.filteredSearchResults = this.filteredSearchResults.filter(result => {
                    result.countries = result.countries.filter(country => country.toLowerCase() === destination.toLowerCase())
                    return result.countries.length > 0
                })
            }
        },
        filterByTourType: function(type) {
            if (type !== 'Show All') {
                this.filteredSearchResults = this.filteredSearchResults.filter(result => result.type.toLowerCase().indexOf(type.toLowerCase()) > -1)
            }
        },
        filter: function(filters) {
            this.reset()
            this.filterByDestination(filters.destination)
            this.filterByTourType(filters.tourType)
            this.setPage(1)
            this.enablePagination(this.filteredSearchResults)
            EventBus.$emit('getTours', this.getToursOnPage(this.filteredSearchResults))
        },
        reset: function() {
            this.filteredSearchResults = JSON.parse(JSON.stringify(this.searchResults))
            this.enablePagination(this.filteredSearchResults)
        },
        sort: function(criteria, order) {
            this.filteredSearchResults.sort(function(a, b) {
                let keyA = Number(a[criteria])
                let keyB = Number(b[criteria])
                if (order === 1) {
                    return (keyA < keyB) ? -1 : (keyA > keyB) ? 1 : 0
                }
                else if (order === 2) {
                    return (keyA > keyB) ? -1 : (keyA < keyB) ? 1 : 0
                }
            })
        },
        enablePagination: function(results) {     
            if (results.length > this.size) {
                this.hasMoreThanOnePage = true
            } else { this.hasMoreThanOnePage = false }
        }
    },
    computed: {
        pageCount() {
            let l = this.filteredSearchResults.length
            let s = this.size
            return Math.ceil(l/s)
        },
        paginatedData() {
            const start = this.pageNumber * this.size
            const end = start + this.size
            return this.filteredSearchResults.slice(start, end)
        }

    }
}
</script>

<style>
.search-results {
    max-width: 1200px;
}

.page-link, 
.page-item:last-child .page-link,
.page-item:first-child .page-link {
    color: #666666;
    font-size: 14px;
    border-radius: 18px;
    width: 33px;
}

.pagination li:active, .pagination li .page-link:active, .pagination li:focus, .pagination li .page-link:focus, .pagination li .page-link:hover {
    background-color: #103A5B;
    color: #FFF;
    border-radius: 18px;
    width: 33px;
}

.selected {
    background-color: #103A5B;
    color: #FFF;
    border-radius: 18px;
    width: 33px;
}

</style>
