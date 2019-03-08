<template>
    <b-container fluid id="header">
        <b-row class="row header-top">
            <b-col cols="12" md="4" class="left-column" id="offsetX">
                <a href="tel:+44-2076377760" class="header-content header-left">Call 020 7637 7760</a>
                <button type="button" class="btn btn-link header-left">中文</button>
                <b-dropdown class="dropdown header-left" :text="selectedCurrency">
                    <b-dropdown-item class="dropdown-item" v-for="currency in currencies" v-bind:key="currency.code" href="#" @click="showSelected(currency.code)">{{ currency.code }} {{currency.description}}</b-dropdown-item>
                </b-dropdown>
            </b-col>
            <b-col cols="12" md="4" class="text-center">
                <router-link to="/"><img src="~/assets/images/logo1.png" alt="Nexus logo"></router-link>
            </b-col>
            <b-col cols="12" md="4" class="align-right">
                <b-row class="row justify-content-end">
                    <HeaderSearch class="col-md-cust" />
                    <HeaderAgent class="col-md-cust" />
                    <span>|</span>
                    <HeaderTraveller class="col-md-cust" /> 
                </b-row>
            </b-col>
        </b-row> 
        <b-row class="row header-bottom justify-content-md-center">
            <b-col class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Asia'}}).href"><button type="button" class="btn btn-link header-link">ASIA</button></a>
            </b-col>
            <b-col class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Americas'}}).href"><button type="button" class="btn btn-link header-link">AMERICAS</button></a>
            </b-col>
            <b-col class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Africa'}}).href"><button type="button" class="btn btn-link header-link">AFRICA</button></a>
            </b-col>
            <b-col class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Australia'}}).href"><button type="button" class="btn btn-link header-link">AUSTRALIA</button></a>
            </b-col>
            <b-col class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Europe'}}).href"><button type="button" class="btn btn-link header-link">EUROPE</button></a>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import HeaderSearch from './HeaderSearch.vue'
import HeaderAgent from './HeaderAgent.vue'
import HeaderTraveller from './HeaderTraveller.vue'

export default {
    name: 'Header',
    data() {
        return {
            currencies: [{
                code: 'USD',
                description: 'United States Dollar'
             },
             {
                 code: 'EUR',
                 description: 'Euro'
             },
             {
                 code: 'EGP',
                 description: 'Egyptian Dollar'
             }
        ],
            selectedCurrency: 'USD',
            offset: 0
        }
    },
    methods: {
        showSelected: function(currency) {
            this.selectedCurrency = currency
        }
    },
    components: {
        HeaderSearch,
        HeaderAgent,
        HeaderTraveller
    }
}
</script>

<style>
#header {
    max-width: 1200px;
    font-size: 0.932em;
    color: #6B797C;
    margin: 0 auto;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.7);
}

#header .dropdown-menu {
    border: 1px solid #EFEFEF;
    border-top: 3px solid #1B75BB;
    margin-top: 0;
    border-radius: 0;
    z-index: 1200;
}

.currency-dropdown-menu {
    width: 228px;
}

.dropdown-item {
    font-size: 14px;
    line-height: 41px;
}

.dropdown-item:hover {
    color: #1B75BB;
    background-color: #FFF;
    box-shadow: none;
}

.btn-secondary:hover {
    background: transparent;
    text-decoration: none;
    box-shadow: none;
    color: #7F7F7F;
}

#header .dropdown-toggle:active, 
#header .btn-secondary:active, 
#header .btn-secondary.dropdown-toggle:active,
#header .btn-secondary:not(:disabled):not(.disabled).active, 
#header .btn-secondary:not(:disabled):not(.disabled).focus,
#header .btn-secondary:not(:disabled):not(.disabled):active,
#header .btn-secondary:not(:disabled):not(.disabled):focus, 
#header .show>.btn-secondary.dropdown-toggle {
    box-shadow: none;
    color: #FFF;
    background: #1B75BB;
}

#header .dropdown-toggle::after {
    font-family: FontAwesome;
    content: "\f107";
    border: none;
    position: absolute;
    font-size: 15px;
    top: 30px;
    margin-top: -1px;
}

.header-top {
    margin: 0 auto;
    height: 79px;
    border-bottom: 1px solid #EFEFEF;
}

.left-column {
    padding: 0;
}

.header-left {
    display: inline;
}

.header-content { 
    margin-top: 8px;
    margin-bottom: 0;
    color: #7F7F7F;
    text-decoration: none;
}

.header-content:hover {
    text-decoration: none;
    cursor: pointer;
    color: #7F7F7F;
}

#header button, #header .btn {
    height: 100%;
    background: transparent;
    font-size: 13px;
    color: #7F7F7F;
    border: none;
    border-radius: 0;
}

#currency:active, #currency:focus {
    background-color: #1B75BB;
    color: #FFF;
}

#currency {
    padding-left: 2px;
}

.header-top button:hover {
    text-decoration: none;
}

.text-center img {
    margin-top: 15px;
}

.text-right {
    display: flex;
    justify-content: space-between;
}

.header-bottom {
    margin: 0 auto;
    padding-top: 18px;
}

.header-link {
    color: #103A5B;
    font-weight: 600;
    font-size: 1.08em;
    letter-spacing: 2px;
    line-height: 2px;
}

.header-link:hover, .header-link:active {
    color: #1B75BB;
    text-decoration: none;
}

.justify-content-end {
    margin: 0;
    width: 100%;
}


</style>
