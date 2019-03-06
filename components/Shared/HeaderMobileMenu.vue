<template>
    <div class="btn-group dropright">
        <button type="button" class="btn btn-link pr-4 pl-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" @click="openMobileMenu">
            <i class="fas fa-bars"></i>
        </button>
        <div class="dropdown-menu text-left">
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
        </div>
    </div>
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

<style scoped>
.dropright .dropdown-menu {
    background: #103A5B;
    color: #FFF;
    height: 100vh;
    z-index: 1200;
}

.dropright .dropdown-menu a {
    color: #FFF;
    text-decoration: none;
}

.dropright h2 {
    color: #FFF;
    font-size: 16px;
    font-weight: 600;
}

.dropright i {
    color: #7F7F7F;
    border: none;
}

.dropright ul li {
    border: 1px solid rgba(255, 255, 255, 0.1);
    line-height: 2.5em;
}

.dropright ul li:first-child {
    border-top: none;
}

.dropright i:active, .dropright:focus, .dropright i[data-v-34876a38]:active, .dropright[data-v-34876a38]:focus {
    color: #1B75BB;
}

.hide {
    display: none;
}

</style>