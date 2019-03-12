<template>
    <div id="carousel" class="p-0">
        <b-carousel id="top-carousel" class="carousel header-lg" data-ride="carousel"
        indicators
        :interval="4000"
        v-model="slide"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
            <!-- <ol class="carousel-indicators mb-3">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
                <li data-target="#carousel" data-slide-to="3"></li>
            </ol> -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 img-fluid" src="~/assets/images/shutterstock_376673089.jpg" alt="Beautiful city view">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="~/assets/images/shutterstock_376673089.jpg" alt="Beautiful city view">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="~/assets/images/shutterstock_376673089.jpg" alt="Beautiful city view">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="~/assets/images/shutterstock_376673089.jpg" alt="Beautiful city view">
                </div>
            </div>
        </b-carousel>
        <div id="staticImage" class="header-sm"></div>
            <div class="carousel-overlay d-flex flex-column justify-content-between pr-3">
                <div class="banner">
                    <h3 class="font-weight-bold">SPECIAL<br>OFFER</h3>
                    <p class="mt-2 font-weight-bold">LAND ONLY</p>
                </div>
                <div class="special-offer mb-5">
                    <p class="duration">{{ specialOffer.duration }}</p>
                    <h2 class="font-weight-bold">{{ specialOffer.title }}</h2>
                    <div class="d-flex flex-row price">
                        <div class="price-left pt-0 pb-0 pl-0 mt-3 pr-3"><span class="price-colour">From</span><br>{{ specialOffer.fromPrice }}</div>
                        <div class="p-3 price-right pt-0 pb-0"><span class="price-colour">Was</span><br>{{ specialOffer.originalPrice }}</div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Carousel',
  data() {
      return {
        specialOffer: {
            duration: '12 Day',
            title: 'Charming Vietnam, Cambodia and...',
            fromPrice: '£1,899',
            originalPrice: '£1,999' 
        },
        height: 0,
        slide: 0,
        sliding: null
      }
  },
  methods: {
      onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
      }
  }
}
</script>

<style scoped>
#carousel {
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
}

#staticImage {
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    background-image: url('~assets/images/shutterstock_376673089.jpg');
    background-position-x: center;
    height: 380px;
}

.carousel-indicators li {
    border-radius: 10px;
    height: 7px;
    max-width: 7px;
    border: 1px solid #FFF;
    background-color: transparent;
}

.carousel-indicators .active {
    background-color: #FFF;
    max-width: 7px;
    height: 7px;
}

.banner {
    background-image: url('~assets/images/banner.png');
}

#carousel .banner h3 {
    font-size: 11px;
    display: inline-block;
    color: #FFF;
    border-bottom: 1px solid #FFF;
}

.banner p {
    font-size: 9px;
}

.special-offer .duration {
    font-weight: 700;
    margin-bottom: 1%;
}

.special-offer h2 {
    color: #FFF;
    text-align: left;
}

.special-offer .price {
    font-weight: 600;
    line-height: 1.2em;
}

.special-offer .price-colour {
    color: #7EB6E2;
}

.price-left, .price-right {
    letter-spacing: 1px;
}

.price-left {
    border-right: 1px solid #FFF;
}
</style>
