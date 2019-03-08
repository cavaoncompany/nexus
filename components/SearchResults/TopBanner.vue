<template>
    <div id="top-banner" :key="$route.params.destination" class="mt-4">
        <img src="~/assets/images/shutterstock_211440232-l.png" alt="Top banner city view" class="header-lg w-100">
        <div id="top-banner-staticImage" class="header-sm"></div>
        <div class="filter-info" id="filter">
            <b-container fluid class="container-fluid d-flex justify-content-between">
                <div class="info-left d-flex">
                    <h2>{{destinations[0].destination}}</h2>
                    <div class="numberResults">{{currentTrips}} / {{totalTrips}} Trips</div>
                </div>
                <div class="filters d-flex">
                    <b-dropdown class="sort-dropdown pr-lg-5 pr-md-3" text="Sort">
                        <a href="#filter" class="dropdown-item mt-3 mb-3" v-on:click="handleSort(true, 'fromPrice')"><i class="fas fa-arrow-up"></i> Price ascending</a>
                        <a href="#filter" class="dropdown-item mt-3 mb-3" v-on:click="handleSort(false, 'fromPrice')"><i class="fas fa-arrow-down"></i> Price descending</a>
                        <a href="#filter" class="dropdown-item mt-3 mb-3" v-on:click="handleSort(true, 'days')"><i class="fas fa-arrow-up"></i> Days ascending</a>
                        <a href="#filter" class="dropdown-item mt-3 mb-3" v-on:click="handleSort(false, 'days')"><i class="fas fa-arrow-down"></i> Days descending</a>
                    </b-dropdown>
                    <button type="button" role="button" aria-label="open filter panel" class="btn btn-link filter-link open-filters" v-on:click="toggle('filter')" v-bind:class="{'setColour': openFilters}">Filters <i class="fas" v-bind:class="{'fa-times': openFilters, 'setColour': openFilters, 'fa-sliders-h': !openFilters}"></i></button>
                </div>
            </b-container>
        </div>
        <b-container fluid class="filter-dropdown container-fluid" v-if="openFilters">
            <h3>Destinations</h3>
            <b-row class="row btn-group d-flex" data-toggle="buttons">
                <b-col cols="6" md="4" lg="2" class="mb-3" v-for="(destination, index) in destinations[0].countries" :key="index">
                    <label for="" class="btn btn-primary pt-2 pb-2 border-0 text-truncate destination-radio" v-bind:class="{'active': selectedDestination === index}" @click="handleSelected('destination-radio', $event, index)">
                        <input type="radio">{{ destination }}
                    </label>
                </b-col>
            </b-row>
            <h3>Travel Styles</h3>
            <b-row class="row btn-group d-flex" data-toggle="buttons">
                <b-col cols="6" md="4" lg="2" class="mb-3" v-for="(style, index) in travelStyles" :key="index">
                    <label for="" class="btn btn-primary travel-style-radio pt-2 pb-2 border-0" v-bind:class="{'active': selectedStyle === index}" @click="handleSelected('travel-style-radio', $event, index)">
                        <input type="radio">{{ style }}
                    </label>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import EventBus from '../../event-bus.js'
export default {
    name: 'TopBanner',
    data() {
        return {
            destinations: [],
            openFilters: false,
            travelStyles: ['Show All','City Break', 'Classic Tour', 'Multi-Country Tour', 'Cruise Collection', 'Private Group Tour'],
            destination: 'Show All',
            tourType: 'Show All',
            totalTrips: 0,
            currentTrips: 0,
            selectedDestination: 0,
            selectedStyle: 0
        }
    },
    props: {
        countryData: Array
    },
    methods: {
        toggle: function(element) {
            if (element === "filter") {
                this.openFilters = !this.openFilters
            }
        },
        filter: function(value, type) {           
            if (type === "destination-radio") {
                this.destination = value    
                if (value !== 'ShowAll'){
                    this.showAllDestinations = false
                }
            }
            else if (type === "travel-style-radio") {
                this.tourType = value
                if (value !== 'Show All') {
                    this.showAllTourTypes = false
                }
            }
            let filters = {
                destination: this.destination,
                tourType: this.tourType
            }
            EventBus.$emit('filter', filters)
        },
        handleSort: function(sortOrder, item) {
            let toBeSorted = {
                sortAscending: sortOrder,
                item: item
            }
            EventBus.$emit('sort', toBeSorted)
        },
        getCountries: function(destination) {
            if (destination === 'Australia') {
                destination = "Australia & South Pacific"
            }
            this.destinations = this.countryData.filter(dest => dest.destination.toLowerCase().indexOf(destination.toLowerCase()) > -1)
            
        },
        handleSelected: function(list, event, index) {
            this.filter(event.target.innerText, list)
            if (list === 'travel-style-radio'){
                this.selectedStyle = index
            }
            else if (list === 'destination-radio') {
                this.selectedDestination = index
            }
        }
    },
    created() {
        this.getCountries(this.$route.params.destination.replace(/-/g, ' '))
        let test = this.getCountries(this.$route.params.destination.replace(/-/g, ' '))
        EventBus.$on('getTours', (tours) => {
            this.totalTrips = tours.total
            this.currentTrips = tours.current
        })
    },
    beforeMount() {
        if(this.destinations[0] !== 'Show All') {
            this.destinations[0].countries.unshift('Show All')
        }
    }
}
</script>

<style>
#top-banner .filter-info {
    background-color: #103A5B;
    color: #FFF;
    height: 60px;
}

.container-fluid {
    height: 100%;
    max-width: 1200px;
}

#top-banner-staticImage {
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    background-image: url('~assets/images/shutterstock_211440232.png');
    background-size: cover;
    height: 220px;
}

.info-left h2 {
    color: #FFF;
    margin-top: auto;
    margin-bottom: auto;
    font-size: 18px;
    font-weight: 700;
    margin-right: 20px;
}

.info-left .numberResults {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 14px;
}

.sort-dropdown .dropdown-menu {
    margin-top: 0;
}

.sort-dropdown .dropdown-menu a {
    font-size: 14px;
    color: #575757;
}

.sort-dropdown .dropdown-menu a:hover {
    background-color: #EBF3F8;
    border-radius: 50px;
    color: #1B75BB;
    text-decoration: none;
}

#top-banner .dropdown-toggle::after {
    font-family: FontAwesome;
    content: "\f107";
    border: none;
    position: absolute;
    font-size: 15px;
}

.filters {
    margin-top: auto;
    margin-bottom: auto;
}

.filters .btn-link, .filters .btn-secondary {
    color: #FFF;
    font-size: 14px;
    height: 60px;
}

.filters .btn-link:hover, 
.filters .btn-link:active, 
.filters .btn-link:focus {
    text-decoration: none;
}

.filters .btn-secondary:hover,
.filters .btn-secondary:active,
.filters .btn-secondary:focus,
.filters .btn-secondary.dropdown-toggle:active,
.filters .btn-secondary.dropdown-toggle:active:focus {
    text-decoration: none;
    background: transparent;
    box-shadow: none;
    border: none;
}

.filter-dropdown .btn:active, 
.btn-primary:not(:disabled):not(.disabled).active, 
.btn-primary:not(:disabled):not(.disabled):active, 
.show>.btn-primary.dropdown-toggle {
    background-color: #103A5B;
    color: #FFF;
}

.filter-dropdown h3 {
    margin-top: 25px;
    margin-bottom: 20px;
    font-size: 14px;
}

.filter-dropdown .btn {
    width: 160px;
    border-radius: 10px;
    background-color: #F4F8FB;
    font-size: 14px;
    color: #103A5B;
}

.filter-dropdown .btn:active, 
.btn-primary:not(:disabled):not(.disabled).active, 
.btn-primary:not(:disabled):not(.disabled):active, 
.show>.btn-primary.dropdown-toggle {
    background-color: #103A5B;
    color: #FFF;
}

.selected-option {
    background-color: #103A5B !important;
    color: #FFF !important;
}

.btn-primary:not(:disabled):not(.disabled).active:focus, 
.btn-primary:not(:disabled):not(.disabled):active:focus, 
.show>.btn-primary.dropdown-toggle:focus, 
.btn-primary.focus, .btn-primary:focus {
    box-shadow: none;
}

.open-filters {
    width: 106px;
}

.setColour {
    background: rgba(27, 117, 187, 0.3);
}

input[type=radio] {
    visibility: hidden;
    width: 1px;
}

</style>
