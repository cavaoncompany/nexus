<template>
    <div id="product-details-description" class="container-fluid" @mouseenter="markButtonActive('product-details-description')">
        <div class="row">
            <div class="col-12 col-md-8 border-bottom mb-4">
                <p class="tour-code mb-3">Tour code: {{ destination.tourCode }}</p>
                <h1 class="font-weight-bold">{{ destination.tourTitle }}</h1>
                <p class="tour-type mt-3">{{ destination.type }}</p>
                <p class="mt-3">
                    <span v-for="(city, index) in destination.cities" :key="index">{{ city }}<span v-if="index<(destination.cities.length-1)"> - </span></span>
                </p>
                <h2 class="font-weight-bold mt-5">DESCRIPTION</h2>
                <p class="mt-4">{{ destination.description }}</p>
                <h3 class="font-weight-bold mt-5">Inclusions</h3>
                <ul class="bullet-list mt-4">
                    <li v-for="(inclusion, index) in destination.inclusions" :key="index">{{ inclusion }}</li>
                </ul>
                <h3 class="font-weight-bold mt-4">Exclusions</h3>
                <ul class="bullet-list mt-4">
                    <li v-for="(exclusion, index) in destination.exclusions" :key="index">{{ exclusion }}</li>
                </ul>
                <h3 class="font-weight-bold mt-5">Optional Tours</h3>
                <ul class="mt-4 mb-4">
                    <li v-for="(tour, index) in destination.optionalTours" :key="index">{{ tour.title }} £{{ tour.fromPrice }}</li>
                </ul>
            </div>
            <div class="col-12 col-md-4 mb-5">
                <div class="prices d-flex mb-5">
                    <p class="from-price font-weight-bold mr-4"><span>From</span> <br/>£{{destination.fromPrice}}</p>
                    <p class="mt-auto original-price">{{ destination.originalPrice }}</p>
                    <p class="agent-commission ml-5 font-weight-bold" v-if="agent"><span>Commission</span><br/>{{ destination.agentCommission }}</p>
                </div>
                <button type="button" role="button" class="btn btn-primary w-100 mb-4">Check Availability</button>
                <button type="button" role="button" class="btn btn-link w-100 mb-4" @click="downloadItinerary()">Download Itinerary</button>
                <div class="download-menu w-100" v-if="downloadMenuOpen">
                    <button type="button" role="button" class="btn-secondary w-100 mb-4">Download PDF</button>
                    <button type="button" role="button" class="btn-secondary w-100 mb-4">Send Email</button>
                    <button type="button" role="button" class="btn-secondary w-100 mb-4">Copy HTML Link</button>
                </div>
                <button type="button" role="button" class="btn btn-link w-100" @click="showSocialMediaIcons()">Share this tour <i class="fas fa-share-square"></i></button>
                <div class="product-detail-social-media-icons fa-3x w-100 p-4 d-flex justify-content-around" v-if="socialMediaIconsVisible">
                    <a href=""><img src="~/assets/images/facebookround.png" alt="link to facebook"></a>
                    <a href=""><img src="~/assets/images/google+.png" alt="link to google plus"></a>
                    <a href=""><img src="~/assets/images/linkedin.png" alt="link to linkedin"></a>
                    <a href=""><img src="~/assets/images/pinterest.png" alt="link to pinterest"></a>
                    <a href=""><img src="~/assets/images/twitter.png" alt="link to twitter"></a>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import EventBus from '../../event-bus.js'

export default {
    name: "ProductDetailsDescription",
    data() {
        return {
            downloadMenuOpen: false,
            socialMediaIconsVisible: false
        }
    },
    props: {
        destination: Object,
        agent: Boolean
    },
    methods: {
        markButtonActive: function(content) {
            EventBus.$emit('markButtonActive', content)
        },
        downloadItinerary: function() {
            this.downloadMenuOpen = !this.downloadMenuOpen
        },
        showSocialMediaIcons: function () {
            this.socialMediaIconsVisible = !this.socialMediaIconsVisible
        }
    }
}
</script>

<style scoped>
#product-details-description {
    color: #3C3C3C;
    font-size: 14px;
    line-height: 2em;
    max-width: 1200px;
}

.tour-code {
    font-size: 12px;
}

h1, h2, h3, .tour-type {
    color: #103A5B;
}

h1 {
    font-size: 32px;
    line-height: 1.3em;
}

.bullet-list li::before {
    content: "●";
    color: #1B75BB;
    padding-right: 15px;
}

.prices .btn {
    border-radius: 50px;
}

.btn-primary {
    background: #1B75BB;
    border-radius: 59px;
    height: 40px;
    font-size: 14px;
}

.btn-secondary {
    background: #F4F8FB;
    border-radius: 59px;
    height: 40px;
    font-size: 14px;
    border: none;
    color: #3173A7;
}

.btn-link {
    color: #1B75BB;
    border-radius: 59px;
    border: 1px solid #E0E0E0;
    height: 40px;
    font-size: 14px;
}

.btn-link:hover {
    text-decoration: none;
}

.btn-link:active, .btn-link:focus {
    text-decoration: none;
    color: #3173A7;
}

.prices .from-price {
    font-size: 24px;
    color: #103A5B;
}

.agent-commission {
    color: #1B75BB;
    font-size: 24px;
}

.prices .from-price span, .agent-commission span {
    font-size: 12px;
}

.original-price {
    color: #A6A6A6;
    font-size: 20px;
    text-decoration-line: line-through;
}
.product-detail-social-media-icons i {
    border-radius: 50px;
}
</style>

