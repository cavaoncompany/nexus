<template>
    <div id="productDetails">
        <Header class="header-lg" />
        <HeaderMobile class="header-sm" :windowWidth="windowWidth" :isMobile="isMobile" />
        <div id="product-details-top-banner" class="mt-4">
          <img src="~/assets/images/product-details-top-banner.png" alt="Top banner city view" class="header-lg w-100">
          <div id="product-details-top-banner-staticImage" class="header-sm"></div>
        </div>
        <div class="top-banner-navigation border-bottom sticky-top">
            <div class="container-fluid d-flex pl-sm-1 pr-sm-1 pl-md-3">
                <button id="tour-description-button" class="btn btn-link description border-right pr-4" type="button" aria-label="seeTourDescription" role="link">
                    <a href="#product-details-description" v-bind:class="{'activeContent':activeContent===0}">Description</a> 
                </button>
                <button class="btn btn-link itinerary border-right pl-4 pr-md-4" type="button" aria-label="see tour itenerary" role="link">
                    <a href="#product-details-itinerary" v-bind:class="{'activeContent':activeContent===1}">Itinerary</a>
                </button>
                <button class="btn btn-link hotel border-right pl-4 pr-4" type="button" aria-label="see tour hotel" role="link">
                    <a href="#product-details-hotels" v-bind:class="{'activeContent':activeContent===2}">Hotels</a>
                </button>
                <button class="btn btn-link optional-tour border-right pl-4 pr-4" type="button" aria-label="see optional tours" role="link">
                    <a href="#product-details-optional-tours" v-bind:class="{'activeContent':activeContent===3}">Optional Tours</a>
                </button>
                <button class="btn btn-link extension border-right pl-4 pr-4" type="button" aria-label="see tour extension" role="link">
                    <a href="#product-details-extensions" v-bind:class="{'activeContent':activeContent===4}">Extensions</a>
                </button>
            </div>
        </div>
        <ProductDetailsSummary :destinations="destinations" :agent="agent" />
        <OurOffer />
        <Footer />
    </div>
</template>
    
<script>
import Header from '~/components/Shared/Header'
import HeaderMobile from '~/components/Shared/HeaderMobile'
import ProductDetailsSummary from '~/components/ProductDetails/ProductDetailsSummary'
import OurOffer from '~/components/Shared/OurOffer'
import Footer from '~/components/Shared/Footer'
import countryData from '~/countries.json'
import destinations from '~/destinations.json'
import EventBus from '~/event-bus.js'

export default {
    name: 'ProductDetails',
    data() {
    return {
      agent: true,
      windowWidth: 0,
      isMobile: false,
      countryData: countryData,
      destinations: destinations,
      activeContent: 0
    }
  },
  components: {
    Header,
    HeaderMobile,
    ProductDetailsSummary,
    OurOffer,
    Footer
  },
  created() {
    if (process.client) {
      this.windowWidth = window.innerWidth || document.documentElement.clientWidth
      if (this.windowWidth < 576) { this.isMobile = true }
      window.scrollTo(0,0)
    }
    EventBus.$on('markButtonActive', (content) => {
      this.markButtonActive(content)
    })
  },
  methods: {
    markButtonActive: function(content) {
      if(content === 'product-details-description'){
        this.activeContent = 0
      }
      else if (content === 'product-details-itinerary') {
        this.activeContent = 1
      }
      else if (content === 'product-details-hotels') {
        this.activeContent = 2
      }
      else if (content === 'product-details-optional-tours') {
        this.activeContent = 3
      }
      else if (content === 'product-details-extensions') {
        this.activeContent = 4
      }
    }
  },
  head () {   
    return {
      title: `Nexus - ${this.$route.params.title}`,
      meta: [
        {
        hid: `description`,
        name: 'description',
        content: `Could ${this.$route.params.title} be your next tour?`
      }
      ]
    }
  }
}
</script>

<style>
#product-details-top-banner-staticImage {
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    background-image: url('~assets/images/product-details-top-banner-mobile.png');
    background-size: cover;
    height: 220px;
}
.top-banner-navigation {
  background: #FFF;
}
.top-banner-navigation button a {
    font-size: 14px;
    color: #7F7F7F;
}
.top-banner-navigation button:hover, 
.top-banner-navigation button a:hover, 
.top-banner-navigation button a:active, 
.top-banner-navigation button a:focus,
.activeContent {
    text-decoration: none;
    color: #1B75BB !important;
}
.top-banner-navigation .container-fluid {
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  height: 50px;
  max-width: 1200px;
}
::-webkit-scrollbar { 
    display: none; 
}
</style>

