<template>
    <div id="product-details-itinerary" class="container-fluid" @mouseenter="markButtonActive('product-details-itinerary')">
        <div class="row">
            <div class="col-12 col-lg-8 border-bottom">
                <div class="d-flex justify-content-between">
                    <h2 class="font-weight-bold">ITINERARY</h2>
                    <button v-if="!showCollapseAll" type="button" role="button" aria-labelledby="see itinerary details of all days" class="btn btn-link expand-all" @click="handleExpandAll">Expand all</button>
                    <button v-if="showCollapseAll" type="button" role="button" aria-labelledby="don't show any itinerary details" class="btn btn-link expand-all" @click="handleCollapseAll">Collapse all</button>
                </div>
                <div class="mb-4" v-for="(itinerary, index) in destination.itinerary" :key="index">
                    <div class="top d-flex justify-content-between mb-3">
                    <h3 class="font-weight-bold">{{ itinerary.title }}</h3>
                    <button class="btn btn-link expand" role="button" type="button" @click="handleExpand(index)"><i class="fas fa-angle-down"></i></button>
                    </div>
                    <div v-if="selectedDays.includes(index)">
                        <p class="mb-4">{{ itinerary.description }}</p>
                        <div class="images d-flex justify-content-between mb-4" v-if="itinerary.images.length>0">
                            <img v-for="(image, index) in itinerary.images" :key="index" :src="image" :alt="itinerary.title">
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
    name: "ProductDetailsItinerary",
    data() {
        return {
            showItinerary: false,
            selectedDays: [0, 1],
            showCollapseAll: false
        }
    },
    props: {
        destination: {}
    },
    methods: {
        handleExpand: function(index) {
            if (this.selectedDays.includes(index)){
                let number = this.selectedDays.indexOf(index);
                    if (number > -1) {
                    this.selectedDays.splice(number, 1);
                    }   
            } else {
                this.selectedDays.push(index)
            } 
        },
        handleExpandAll: function() {
            this.selectedDays = []
            for (let i = 0; i < this.destination.itinerary.length; i++) {
                this.selectedDays.push(i)
            }
            this.showCollapseAll = true
        },
        handleCollapseAll: function() {
            this.selectedDays = []
            this.showCollapseAll = false
        },
        markButtonActive: function(content) {
            EventBus.$emit('markButtonActive', content)
        }
    }
}
</script>

<style scoped>
#product-details-itinerary {
    color: #3C3C3C;
    font-size: 14px;
    line-height: 2em;
}

h2, h3, .expand {
    color: #103A5B;
}

.expand-all {
    color: #3173A7;
    font-size: 14px;
}

.expand-all:hover {
    text-decoration: none;
}

.images img {
    width: 47%;
}
</style>