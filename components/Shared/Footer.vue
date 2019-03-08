<template>
    <b-container fluid class="mt-5" id="footer">
        <b-row class="row footer-top ml-auto mr-auto pt-3 mt-5">
            <b-col lg="3" class="logo text-md-center text-lg-left">
                <img src="~/assets/images/logo1.png" alt="Nexus logo">
            </b-col>
            <b-col lg="2" class="social text-md-center text-lg-left">
                <a href="#"><img src="~/assets/images/Instagram Icon.png" alt="Instagram icon"></a>
                <a href="#"><img src="~/assets/images/Facebook Icon.png" alt="Facebook icon"></a>
            </b-col>
            <b-col cols="12" lg="7" class="newsletter-container">
                <b-row class="row">
                    <b-col md="5" lg="4" class="newsletter mt-1">
                        <p class="join mb-1">Join our community</p>
                        <p class="subscribe mb-2">Subscribe to our newsletter</p>
                    </b-col>
                    <b-col md="7" lg="8">
                        <div class="input-group flex-nowrap desktop-footer" >
                            <input type="email" class="form-control" v-model="email" placeholder="Email address" aria-label="email" aria-describedby="addon-wrapping">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="addon-wrapping">Subscribe</button>
                            </div>
                        </div>
                        <div class="input-area mobile-footer" >
                            <form>
                                <input type="email" class="form-control" v-model="email" placeholder="Email address" aria-label="email"/>
                                <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                            </form>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row class="row footer-bottom mt-5 ml-auto mr-auto w-100">
            <b-col cols="6" sm="3" md="3">
                <h3>SITE</h3>
                <ul>
                    <li v-for="item in site" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </b-col>
            <b-col cols="6" sm="3" md="3">
                <h3>RESOURCES</h3>
                <ul>
                    <li v-for="item in resources" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </b-col>
            <b-col cols="6" sm="3" md="3">
                <h3>ABOUT US</h3>
                <ul>
                    <li v-for="item in about" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </b-col>
            <img class="cardsMobile mobile-footer" src="~/assets/images/payment-types.png" alt="Visa and MasterCard accepted">
            <b-col sm="3" md="3" class="text-md-right">
                <b-dropdown class="dropdown-menu-currency" :text="selectedCurrency">
                    <a v-for="currency in currencies" :key="currency.id" class="dropdown-item" @click="showSelected('currency', currency.currency)">{{ currency.currency }}</a>
                </b-dropdown>
                <b-dropdown class="dropdown-menu-language" :text="selectedLanguage">
                    <a v-for="language in languages" :key="language.id" class="dropdown-item" @click="showSelected('language', language.language)">{{ language.language }}</a>
                </b-dropdown>
                <img class="desktop-footer" src="~/assets/images/payment-types.png" alt="Visa and MasterCard accepted">
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {
            site: [{
                    name: 'Travel Package',
                    url: 'Travel Package'
                },
                {
                    name: 'Deals',
                    url: 'Deals'
                },
                {
                    name: 'Travel Resources',
                    url: 'url'
                },
                {
                    name: 'Online Payment',
                    url: 'url'
                }
            ],
            resources: [{
                    name: 'FAQ',
                    url: 'url'
                },
                {
                    name: 'Terms & Conditions',
                    url: 'url'
                },
                {
                    name: 'Testimonials',
                    url: 'url'
                },
                {
                    name: 'Order Brochure',
                    url: 'url'
                }
            ],
            about: [{
                    name: 'Why Nexus',
                    url: 'url'
                },
                {
                    name: 'Career',
                    url: 'url'
                },
                {
                    name: 'Contact Us',
                    url: 'url'
                }
            ],
            currencies: [{
                    id: 0,
                    currency: 'USD'
                },
                {
                    id1: 1,
                    currency: 'GBP'
                }
            ],
            languages: [{
                    id: 0,
                    language: 'English',
                },
                {
                    id: 1,
                    language: '中文'
                }
            ],
            selectedCurrency: 'USD',
            selectedLanguage: 'English',
            email: ''
        }
    },
    methods: {
        showSelected: function(type, selected) {
            if (type === 'currency') {
                this.selectedCurrency = selected
            } else if (type === 'language') {
                this.selectedLanguage = selected
            }
        }
    }
}
</script>

<style>
#footer {
    max-width: 1200px;
}

.footer-top input-group {
    height: 50px;
}

.footer-top input {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    height: 50px;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    border: 1px solid #ced4da;
}

.footer-top input::placeholder {
    font-size: 14px;
    color: lightgray;
}

.footer-top #addon-wrapping {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    border: 1px solid #1B75BB;
    background-color: #1B75BB;
    padding-left: 8px;
    color: #FFF;
    font-size: 14px;
    width: 131px;
}

.join {
    font-size: 14px;
    color: #103A5B;
}

.subscribe {
    font-size: 12px;
    color: #666666;
}

.footer-bottom h3 {
    font-size: 14px;
    font-weight: 600;
    color: #1B75BB;
}

.footer-bottom li a {
    font-size: 14px;
    line-height: 40px;
    color: #666666;
}

.footer-bottom li a:hover {
    text-decoration: none;
}

.footer-bottom .dropdown {
    font-size: 14px;
    border-radius: 50px;
    border: 1px solid #ced4da;
    height: 50px;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;
}

.footer-bottom .dropdown a, 
.footer-bottom .dropdown a:active, 
#footer .btn-secondary,
#footer.show>.btn-secondary.dropdown-toggle, 
#footer-currency {
    background-color: transparent;
    border: none;
    padding-top: 12px;
    font-size: 14px;
    color: #666666;
    height: 100%;
    text-align: left;
    padding-left: 25px;
    box-shadow: none;
}

#footer .dropdown-toggle::after {
    font-family: FontAwesome;
    content: "\f107";
    border: none;
    position: absolute;
    right: 20px;
    font-size: 20px;
    margin-top: -5px;
}

.dropdown-menu-currency .dropdown-menu,
.dropdown-menu-language .dropdown-menu {
    min-width: 100%;
    border: none;
}

#footer .dropdown-toggle:active, 
#footer .btn-secondary:active, 
#footer .btn-secondary.dropdown-toggle:active,
#footer .btn-secondary:not(:disabled):not(.disabled).active, 
#footer .btn-secondary:not(:disabled):not(.disabled).focus,
#footer .btn-secondary:not(:disabled):not(.disabled):active,
#footer .btn-secondary:not(:disabled):not(.disabled):focus, 
#footer .show>.btn-secondary.dropdown-toggle {
    box-shadow: none;
    color: #666666;
    background: transparent;
}

.cardsMobile {
    height: 31px;
    margin-top: auto;
    margin-bottom: auto;
}

.input-area input {
    width: 100%;
    border-radius: 50px;
    height: 44px;
}

.input-area button {
    width: 100%;
    border-radius: 50px;
    background-color: #1B75BB;
    color: #FFF;
    height: 40px;
    margin-top: 20px;
}

</style>