<template>
    <header class="container-fluid">
        <nav class="navbar navbar-expand-lg pt-0">
            <router-link to="/" v-show="mobileMenuOpen===false" class="pt-3"><img src="~/assets/images/logo1.png" alt="Nexus logo" id="mobileOffsetX"/></router-link>
            <b-row class="row pt-0">
                <HeaderSearch :windowWidth="windowWidth" :isMobile="isMobile" v-if="mobileMenuOpen===false" class="pt-3" />
                <HeaderAgentMobile :windowWidth="windowWidth" :isMobile="isMobile" v-show="mobileMenuOpen===false" class="pt-3" />
                <no-ssr>
                    <HeaderMobileMenu :windowWidth="windowWidth" :isMobile="isMobile" class="pt-3" />
                </no-ssr>
                
            </b-row>
        </nav>
    </header>
</template>

<script>
import HeaderSearch from './HeaderSearch'
import HeaderAgentMobile from './HeaderAgentMobile'
import HeaderMobileMenu from './HeaderMobileMenu'
import EventBus from '../../event-bus.js'

export default {
    name: 'HeaderMobile',
    data() {
        return {
            mobileMenuOpen: false
        }
    },
    components: {
        HeaderSearch,
        HeaderAgentMobile,
        HeaderMobileMenu
    },
    props: {
        windowWidth: Number,
        isMobile: Boolean
    },
    created() {
        EventBus.$on('openMobileMenu', (mobileMenuOpen) => {
            this.mobileMenuOpen = mobileMenuOpen
        })
    }
}
</script>

<style scoped>
.row {
    padding-top: 5px;
    padding-right: 10px;
}

.navbar img {
    height: 30px;
}

header {
    margin-top: 0;
    padding-left: 0;
    padding-right: 0;
    margin-bottom: -8px;
}

</style>