<template>
    <b-dropdown class="btn-group dropright header-mobile-menu" no-caret @click="openMobileMenu">
        <template slot="button-content"><i class="fas fa-bars"></i></template>
            <ul class="mb-5">
                <li class="pl-3 pt-2"><h2 class="text-left">CURRENCY</h2></li>
                <li class="pl-3">EUR</li>
                <li class="pl-3">USD</li>
            </ul>
            <ul>
                <li class="pl-3"><h2 class="text-left">DESTINATION</h2></li>
                <li class="pl-3" v-for="destination in countries" :key="destination.id">
                    <a :href="$router.resolve({name:'destination', params:{destination:destination.destination}}).href">
                        {{ destination.destination }}
                    </a>
                </li>
            </ul>
    </b-dropdown>
</template>

<script>
import EventBus from '../../event-bus.js'
import countries from '../../countries.json'

export default {
    name: 'HeaderMobileMenu',
    data() {
        return {
            view: 0,
            username: '',
            password: '',
            name: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            bookingId: '',
            lastname: '',
            departureDate: '',
            mobileMenuOpen: false,
            countries: countries
        }
    },
    props: {
        isMobile: Boolean,
        windowWidth: Number
    },
    methods: {
        openMobileMenu: function() {
            this.mobileMenuOpen = !this.mobileMenuOpen
            EventBus.$emit('openMobileMenu', this.mobileMenuOpen)
        }
    }
}
</script>

<style>
.header-mobile-menu .dropdown-menu {
    background: #103A5B;
    color: #FFF;
    height: 100vh;
    width: 100vw;
    z-index: 1200;
}

.header-mobile-menu .dropdown-menu a {
    color: #FFF;
    text-decoration: none;
}

.header-mobile-menu .btn-secondary {
    background-color: #FFF;
    border: none;
    color: #7F7F7F;
}

.header-mobile-menu h2 {
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
}

.header-mobile-menu ul li {
    border: 1px solid rgba(255, 255, 255, 0.1);
    line-height: 2.5em;
}

.header-mobile-menu ul li:first-child {
    border-top: none;
}

.header-mobile-menu i:active, .header-mobile-menu:focus, .header-mobile-menu i:active, .header-mobile-menu:focus {
    color: #1B75BB;
}

.header-mobile-menu .dropdown-toggle::after,
.dropright .dropdown-toggle::after {
    display:none !important;
}

.hide {
    display: none;
}

</style>