<template>
    <footer class="container-fluid mt-5" id="footer">
        <div class="row footer-top ml-auto mr-auto pt-3 mt-5">
            <div class="col-lg-3 logo text-md-center text-lg-left">
                <img src="~/assets/images/logo1.png" alt="Nexus logo">
            </div>
            <div class="col-lg-2 social text-md-center text-lg-left">
                <a href="#"><img src="~/assets/images/Instagram Icon.png" alt="Instagram icon"></a>
                <a href="#"><img src="~/assets/images/Facebook Icon.png" alt="Facebook icon"></a>
            </div>
            <div class="col-12 col-lg-7 newsletter-container">
                <div class="row">
                    <div class="col-md-5 col-lg-4 newsletter mt-1">
                        <p class="join mb-1">Join our community</p>
                        <p class="subscribe mb-2">Subscribe to our newsletter</p>
                    </div>
                    <div class="col-md-7 col-lg-8">
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
                    </div>
                </div>
            </div>
        </div>
        <div class="row footer-bottom mt-5 ml-auto mr-auto w-100">
            <div class="col-6 col-md-3 col-sm-3">
                <h3>SITE</h3>
                <ul>
                    <li v-for="item in site" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </div>
            <div class="col-6 col-md-3 col-sm-3">
                <h3>RESOURCES</h3>
                <ul>
                    <li v-for="item in resources" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </div>
            <div class="col-6 col-md-3 col-sm-3">
                <h3>ABOUT US</h3>
                <ul>
                    <li v-for="item in about" :key="item.name"><a :href="item.url">{{ item.name }}</a></li>
                </ul>
            </div>
            <img class="cardsMobile mobile-footer" src="~/assets/images/payment-types.png" alt="Visa and MasterCard accepted">
            <div class="col-md-3 col-sm-3 text-md-right">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="footer-currency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ selectedCurrency }}</a>
                    <div class="dropdown-menu" aria-labelledby="currency">
                        <a v-for="currency in currencies" :key="currency.id" class="dropdown-item" href="#footer" @click="showSelected('currency', currency.currency)">{{ currency.currency }}</a>
                    </div>
                </div>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="language" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ selectedLanguage }}</a>
                    <div class="dropdown-menu" aria-labelledby="language">
                        <a v-for="language in languages" :key="language.id" class="dropdown-item" href="#footer" @click="showSelected('language', language.language)">{{ language.language }}</a>
                    </div>
                </div>
                <img class="desktop-footer" src="~/assets/images/payment-types.png" alt="Visa and MasterCard accepted">
            </div>
        </div>
    </footer>
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
        },

    }
}
</script>

<style scoped>
footer {
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
}

.footer-bottom .dropdown a, .footer-bottom .dropdown a:active, .show>.btn-secondary.dropdown-toggle, .dropdown-toggle, #footer-currency {
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

.dropdown-toggle::after {
    font-family: FontAwesome;
    content: "\f107";
    border: none;
    position: absolute;
    right: 20px;
    font-size: 20px;
    margin-top: -5px;
}

.dropdown-menu {
    min-width: 100%;
    border: none;
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