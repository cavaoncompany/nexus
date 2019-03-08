<template>
    <b-dropdown class="dropdown search-dropdown">
        <template slot="button-content"><i class="fas fa-search"></i></template>
            <div class="input-group">
                <input type="text" placeholder="Enter product name or tour code" aria-label="Search product name or tour code" v-model="searchTerm" @keyup="findResults($event)"/>
                <div class="input-group-append">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div class="search-results">
                <ul>
                    <li v-for="result in results" v-bind:key="result.title">
                        <a :href="$router.resolve({name:'dest-title', params:{dest:result.region, title:result.tourTitle.replace(/\s+/g, '-')}}).href">{{ result.tourTitle }}</a>
                    </li>
                </ul>
            </div>
            <p class="pt-3 pb-3"><a href=''>See all search results <i class="fas fa-arrow-right"></i></a></p>
    </b-dropdown>
</template>

<script>
import destinations from '../../destinations.json'

export default {
    name: 'HeaderSearch',
    data() {
        return {
            data: destinations,
            searchTerm: '',
            results: []
        }
    },
    methods: {
        findResults: function(){
            this.results = this.data.filter(result => result.tourTitle.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1 || 
                result.tourCode.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1)
        }
    },
    props: {
        isMobile: Boolean,
        windowWidth: Number
    }
}
</script>

<style>
header {
    font-size: 0.932em;
    color: #6B797C;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.7);
}

.search-dropdown .dropdown-menu {
    border: 1px solid #EFEFEF;
    border-top: 3px solid #1B75BB;
    margin-top: 0;
    border-radius: 0;
    z-index: 1200;
}

.search-dropdown .dropdown-menu {
    font-size: 14px;
    color: #1B75BB;
    z-index: 1200;
}

.search-dropdown .dropdown-menu .input-group {
    width: 100%;
    border-bottom: 1px solid #E0E0E0;
    height: 60px;
}

.search-dropdown .dropdown-menu .input-group-append i {
    margin-top: auto;
    margin-bottom: auto;
    font-size: 20px;
}

.search-dropdown .dropdown-menu input {
    width: 90%;
    border: none;
    padding-left: 10px;
    outline: none;
    border: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
}

.search-dropdown .dropdown-menu input::placeholder {
    color: #CBCBCB;
    font-size: 14px;
}

.search-dropdown .dropdown-menu p a {
    color: #1B75BB;
}

.search-dropdown .dropdown-menu p a:hover {
    text-decoration: none;
}

.search-results li a {
    font-size: 14px;
    color: #666666;
}

.search-results li {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 20px;
    margin-top: 15px;
}

.search-results li:hover, .search-results li a:hover {
    background-color: #EBF3F8;
    border-radius: 50px;
    color: #1B75BB;
    text-decoration: none;
}

.dropdown-item {
    font-size: 14px;
    line-height: 41px;
}

.dropdown-item:hover {
    color: #1B75BB;
    background-color: #FFF;
}

button, .btn {
    height: 100%;
    font-size: 13px;
    border: none;
    border-radius: 0;
}

#search-button {
    padding-top: 0;
    font-size: 20px;
    padding-bottom: 0;
}

</style>