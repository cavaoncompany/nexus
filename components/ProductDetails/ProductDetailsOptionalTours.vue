<template>
    <div id="product-details-optional-tours" class="container-fluid">
        <div class="row" @mouseenter="markButtonActive('product-details-optional-tours')">
            <div class="col-12 col-lg-8 border-bottom">
                <h2 class="font-weight-bold mt-5 mb-5">OPTIONAL TOURS</h2>
                <div class="optional-tour row mb-5" v-for="(tour, index) in destination.optionalTours" :key="index">
                    <div class="col-12 col-md-3">
                        <img :src="tour.image" :alt="tour.title" class="w-100">
                    </div>
                    <div class="col-12 col-md-9">
                        <div class="tour-description-container d-flex flex-column justify-content-between">
                            <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                            <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                            <p class="tour-description">{{ tour.description.substring(0, 320) }}
                                <span v-if="optionalTourHasModal.includes(index)" data-toggle="modal" :data-target="'#optional-tour-modal'+index">... Read more</span>
                            </p>
                        </div>
                    </div>
                    <div class="modal fade" :id="'optional-tour-modal'+index" tabindex="-1" role="dialog" aria-labelledby="optionalTourDescription" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body d-flex p-4 row">
                                    <div class="col-12 col-md-3">
                                        <img :src="tour.image" :alt="tour.title" class="w-100">
                                    </div>
                                    <div class="col-12 col-md-9">
                                        <div class="tour-description-container d-flex flex-column justify-content-between">
                                            <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                            <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                            <p>{{ tour.description }}</p>
                                            <button type="button" class="btn btn-primary w-50 mt-5" data-dismiss="modal">OK</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" @mouseenter="markButtonActive('product-details-extensions')">
            <div id="product-details-extensions" class="mb-5">
                <div class="col-12 col-lg-8">
                    <h2 class="font-weight-bold mt-5 mb-5">EXTENSIONS</h2>
                    <div class="extensions d-flex mb-5 row" v-for="(tour, index) in destination.extensions" :key="index">
                        <div class="col-12 col-md-3">
                            <img :src="tour.image" :alt="tour.title" class="w-100">
                        </div>
                        <div class="col-12 col-md-9">
                            <div class="tour-description-container d-flex flex-column justify-content-between">
                                <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                <p class="tour-description">{{ tour.description.substring(0, 320) }}
                                    <span v-if="optionalTourHasModal.includes(index)" data-toggle="modal" :data-target="'#extensions-modal'+index">... Read more</span>
                                </p>
                            </div>
                        </div>
                        <div class="modal fade" :id="'extensions-modal'+index" tabindex="-1" role="dialog" aria-labelledby="extensionsDescription" aria-hidden="true">
                            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body d-flex p-4 row">
                                        <div class="col-12 col-md-3">
                                            <img :src="tour.image" :alt="tour.title" class="w-100">
                                        </div>
                                        <div class="col-12 col-md-9">
                                            <div class="tour-description d-flex flex-column justify-content-between">
                                                <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                                <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                                <p>{{ tour.description }}</p>
                                                <button type="button" class="btn btn-primary w-50 mt-5" data-dismiss="modal">OK</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
import EventBus from '../../event-bus.js'

export default {
    name: "ProductDetailsOptionalTours",
    data() {
        return {
            optionalTourHasModal: [],
            extensionsHasModal: []
        }
    },
    props: {
        destination: {}
    },
    created() {
        this.createModal()
    },
    methods: {
        createModal: function() {
            for (let i = 0; i < this.destination.optionalTours.length; i++) {
                if (this.destination.optionalTours[i].description.length > 320) {
                this.optionalTourHasModal.push(i)
                }
            }
            for (let i = 0; i < this.destination.extensions.length; i++) {
                if (this.destination.extensions[i].description.length > 320) {
                this.extensionsHasModal.push(i)
                }
            }
        },
        markButtonActive: function(content) {
            EventBus.$emit('markButtonActive', content)
        }
    }
}
</script>

<style scoped>
#product-details-optional-tours {
    color: #3C3C3C;
    font-size: 14px;
    line-height: 1.8em;
}

h2, h3 {
    color: #103A5B;
}

h3 {
    font-size: 16px;
}

.price {
    color: #FF5E19;
}

.tour-description span {
    color: #1B75BB;
}

.tour-description span:hover {
    cursor: pointer;
}

.modal-body img {
    height: 220px;
}

.btn-primary {
    background: #1B75BB;
    border-radius: 59px;
    font-size: 14px;
    height: 40px;
}
</style>