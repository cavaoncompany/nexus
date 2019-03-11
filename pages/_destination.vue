<template>
    <div id="searchResults">
        <Header class="header-lg" />
        <HeaderMobile class="header-sm" :windowWidth="windowWidth" :isMobile="isMobile" />
        <TopBanner :countryData="countryData" />
        <Results :agent="agent" :destinations="destinations" />
        <PlacesToGo />
        <OurOffer />
        <Footer />
    </div>
</template>
    
<script>
import Header from '~/components/Shared/Header'
import HeaderMobile from '~/components/Shared/HeaderMobile'
import TopBanner from '~/components/SearchResults/TopBanner'
import Results from '~/components/SearchResults/SearchResultsResults'
import PlacesToGo from '~/components/SearchResults/SearchResultsPlacesToGo'
import OurOffer from '~/components/Shared/OurOffer'
import Footer from '~/components/Shared/Footer'
import countryData from '~/countries.json'
import destinations from '~/destinations.json'

export default {
    name: 'SearchResults',
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
    TopBanner,
    Results,
    PlacesToGo,
    OurOffer,
    Footer
  },
  created() {   
    if (process.client) {
      this.windowWidth = window.innerWidth || document.documentElement.clientWidth
      if (this.windowWidth < 576) { this.isMobile = true }
    }
  },
  head () {   
    return {
      title: `Nexus - ${this.$route.params.destination}`,
      meta: [
        {
        hid: `description`,
        name: 'description',
        content: `Find your perfect tour to ${this.$route.params.destination}`
      }
      ]
    }
  }
}
</script>