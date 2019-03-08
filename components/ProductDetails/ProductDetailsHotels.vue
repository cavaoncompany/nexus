<template>
    <b-container fluid id="hotels" class="container-fluid"  @mouseenter="markButtonActive('hotels')">
        <b-row class="row">
            <b-col cols="12" lg="8" class="border-bottom">
                <h2 class="font-weight-bold mt-4 mb-5">HOTELS</h2>
                <b-row class="row">
                    <b-col cols="12" md="6" v-for="(hotel, index) in destination.hotels" :key="index">
                        <div class="card mb-4 border-0">
                            <div class="card-img-top">
                                <img v-for="(image, index) in hotel.images" :key="index" :src="image" :alt="hotel.name" class="card-img-top w-50">
                            </div>
                            <div class="card-body pl-0">
                                <p class="city">{{ hotel.city }}</p>
                                <h3 class="font-weight-bold mb-3">{{ hotel.name }}</h3>
                                <p class="mb-2">{{ hotel.address }}</p>
                                <p>{{ hotel.telephone }}</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import EventBus from '../../event-bus.js'

export default {
    name: "ProductDetailsHotels",
    props: {
        destination: {}
    },
    methods: {
        markButtonActive: function(content) {
            EventBus.$emit('markButtonActive', content)
        }
    }
}
</script>

<style scoped>
#hotels {
    color: #3C3C3C;
    font-size: 14px;
    line-height: 1.4em;
    max-width: 1200px;
}

h2, h3 {
    color: #103A5B;
}

.card-img-top img {
    height: 155px;
}

.city {
    font-size: 12px;
}
</style>