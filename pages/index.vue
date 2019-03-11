<template>
  <section id="home">
    <Header class="header-lg" />
    <HeaderMobile class="header-sm" :windowWidth="windowWidth" :isMobile="isMobile" />
    <Carousel />
    <SpecialDeals :agent="agent" :destinations="destinations" />
    <PopularTours :agent="agent" />
    <TopDestinations />
    <Reviews />
    <OurOffer />
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Shared/Header.vue'
import HeaderMobile from '~/components/Shared/HeaderMobile.vue'
import Carousel from '~/components/Homepage/Carousel.vue'
import SpecialDeals from '~/components/Homepage/SpecialDeals.vue'
import PopularTours from '~/components/Homepage/PopularTours.vue'
import TopDestinations from '~/components/Homepage/TopDestinations.vue'
import Reviews from '~/components/Homepage/Reviews.vue'
import OurOffer from '~/components/Shared/OurOffer.vue'
import Footer from '~/components/Shared/Footer.vue'
import countryData from '~/countries.json'
import destinations from '~/destinations.json'

export default {
  name: 'Homepage',
  transition: 'fade',
  data() {
    return {
      agent: true,
      windowWidth: 0,
      isMobile: false,
      countryData: countryData,
      destinations: destinations
    }
  },
  components: {
    Header,
    HeaderMobile,
    Carousel,
    SpecialDeals,
    PopularTours,
    TopDestinations,
    Reviews,
    OurOffer,
    Footer
  },
  created() {
    if (process.client) {
      this.windowWidth = window.innerWidth || document.documentElement.clientWidth
      if (this.windowWidth < 576) { this.isMobile = true }
    }
  }
}
</script>

<style>

</style>
