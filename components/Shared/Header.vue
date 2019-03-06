<template>
    <header class="container-fluid" id="header">
        <div class="row header-top">
            <div class="col-12 col-md-4 left-column" id="offsetX">
                <p class="header-content header-left">Call 020 7637 7760</p>
                <button type="button" class="btn btn-link header-left">中文</button>
                <div class="dropdown header-left">
                    <button class="btn btn-link dropdown-toggle" type="button" id="currency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ selectedCurrency }}</button>
                    <div class="dropdown-menu currency-dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" v-for="currency in currencies" v-bind:key="currency.code" href="#" @click="showSelected(currency.code)">{{ currency.code }} {{currency.description}}</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 text-center">
                <router-link to="/"><img src="~/assets/images/logo1.png" alt="Nexus logo"></router-link>
            </div>
            <div class="col-12 col-md-4 align-right">
                <div class="row justify-content-end">
                    <HeaderSearch class="col-md-cust" />
                    <HeaderAgent class="col-md-cust" />
                    <span>|</span>
                    <HeaderTraveller class="col-md-cust" /> 
                </div>
            </div>
        </div> 
        <div class="row header-bottom justify-content-md-center">
            <div class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Asia'}}).href"><button type="button" class="btn btn-link header-link">ASIA</button></a>
            </div>
            <div class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Americas'}}).href"><button type="button" class="btn btn-link header-link">AMERICAS</button></a>
            </div>
            <div class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Africa'}}).href"><button type="button" class="btn btn-link header-link">AFRICA</button></a>
            </div>
            <div class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Australia'}}).href"><button type="button" class="btn btn-link header-link">AUSTRALIA</button></a>
            </div>
            <div class="col-sm text-center">
                <a :href="$router.resolve({name:'destination', params:{destination:'Europe'}}).href"><button type="button" class="btn btn-link header-link">EUROPE</button></a>
            </div>
        </div>
    </header>
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

<style scoped>
header {
    max-width: 1200px;
    font-size: 0.932em;
    color: #6B797C;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.7);
}

.dropdown-menu {
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
}

.dropdown-toggle::after {
    font-family: FontAwesome;
    content: "\f107";
    border: none;
    position: absolute;
    font-size: 15px;
    top: 0;
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
}

button, .btn {
    height: 100%;
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

.header-top button {
    width: 80px;
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
