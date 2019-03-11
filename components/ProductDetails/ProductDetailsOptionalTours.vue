<template>
    <b-container fluid id="optional-tours" class="container-fluid">
        <b-row class="row" @mouseenter="markButtonActive('optional-tours')">
            <b-col cols="6" lg="8" class="border-bottom">
                <h2 class="font-weight-bold mt-5 mb-5">OPTIONAL TOURS</h2>
                <div class="optional-tour row mb-5" v-for="(tour, index) in destination.optionalTours" :key="index">
                    <b-col cols="12" md="3">
                        <img :src="tour.image" :alt="tour.title" class="w-100">
                    </b-col>
                    <b-col cols="12" md="9">
                        <div class="tour-description-container d-flex flex-column justify-content-between">
                            <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                            <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                            <p class="tour-description">{{ tour.description.substring(0, 320) }}
                                <span v-if="optionalTourHasModal.includes(index)" v-b-modal="'optional-tour-modal'+index">... Read more</span>
                            </p>
                        </div>
                    </b-col>
                    <b-modal centered scrollable size="lg" :id="'optional-tour-modal'+index">
                        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-body d-flex p-4 row">
                                    <b-col cols="12" md="3">
                                        <img :src="tour.image" :alt="tour.title" class="w-100">
                                    </b-col>
                                    <b-col cols="12" md="9">
                                        <div class="tour-description d-flex flex-column justify-content-between">
                                            <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                            <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                            <p>{{ tour.description }}</p>
                                        </div>
                                    </b-col>
                                </div>
                            </div>
                        </div>
                    </b-modal>
                </div>
            </b-col>
        </b-row>
        <b-row class="row" @mouseenter="markButtonActive('extensions')">
            <div id="extensions" class="mb-5">
                <b-col cols="12" lg="8">
                    <h2 class="font-weight-bold mt-5 mb-5">EXTENSIONS</h2>
                    <div class="extensions d-flex mb-5 row" v-for="(tour, index) in destination.extensions" :key="index">
                        <b-col cols="12" md="3">
                            <img :src="tour.image" :alt="tour.title" class="w-100">
                        </b-col>
                        <b-col cols="12" md="9">
                            <div class="tour-description-container d-flex flex-column justify-content-between">
                                <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                <p class="tour-description">{{ tour.description.substring(0, 320) }}
                                    <span v-if="optionalTourHasModal.includes(index)" v-b-modal="'extensions-modal'+index" data-toggle="modal" :data-target="'#extensions-modal'+index">... Read more</span>
                                </p>
                            </div>
                        </b-col>
                        <b-modal centered scrollable size="lg" :id="'extensions-modal'+index">
                            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-body d-flex p-4 row">
                                        <b-col cols="12" md="3">
                                            <img :src="tour.image" :alt="tour.title" class="w-100">
                                        </b-col>
                                        <b-col cols="12" md="9">
                                            <div class="tour-description d-flex flex-column justify-content-between">
                                                <h3 class="font-weight-bold mb-2">{{ tour.title }}</h3>
                                                <p class="price mb-4">From £{{ tour.fromPrice }}</p>
                                                <p>{{ tour.description }}</p>
                                            </div>
                                        </b-col>
                                    </div>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </b-col>
            </div>  
        </b-row>
    </b-container>
</template>

<script>
import EventBus from '../../event-bus.js'

export default {
    name: "ProductDetailsOptionalTours",
    data() {
        return {
            optionalTourHasModal: [],
            extensionsHasModal: [],
            show: false
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
        },
        closeModal: function(event) {
            console.log(event.target.parent)
        }
    }
}
</script>

<style>
#optional-tours {
    color: #3C3C3C;
    font-size: 14px;
    line-height: 1.8em;
    max-width: 1200px;
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

.optional-tour .modal-header,
.optional-tour .modal-footer .btn-secondary,
.extensions .modal-header,
.extensions .modal-footer .btn-secondary {
    display: none !important;
}

.extensions .modal-footer,
.optional-tour .modal-footer {
    border: none;
    justify-content: center;
}

.optional-tour .modal-content,
.optional-tour .modal-dialog,
.extensions .modal-content,
.extensions .modal-dialog {
    border: none;
    margin-top: 0;
    margin-bottom: 0;
}

.optional-tour .modal-body,
.extensions .modal-body {
    padding-top: 10px !important;
    padding-bottom: 30px !important;
}

.optional-tour .modal-body img,
.extensions .modal-body img {
    height: 220px;
}

.optional-tour .modal-dialog-centered.modal-content,
.extensions .modal-dialog-centered .modal-content {
    max-height: 530px;
}

.optional-tour .modal-footer .btn-primary,
.extensions .modal-footer .btn-primary {
    background: #1B75BB;
    border-radius: 59px;
    font-size: 14px;
    height: 40px;
    width: 40%;
}
</style>