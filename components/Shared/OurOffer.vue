<template>
    <div id="our-offer" class="w-100">
        <b-row class="row justify-content-center container-fluid ml-auto mr-auto pl-4 pr-2">
            <b-col md="4" v-for="offer in ourOffer" :key="offer.id">
                <b-row class="row offer-row">
                    <img src="~/assets/images/tick.png" class="mb-2 mt-2 mr-3" alt="Tick to show our offers">
                    <p class="mb-auto mt-auto"><span class="offer">{{ offer.offer }}</span> - {{ offer.description }}</p>
                </b-row>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "OurOffer",
    data() {
        return {
            ourOffer: [{
                id: 0,
                offer: "SERVICE",
                description: "Pay and go. 100% Guarantee."
            },
            {
                id: 1,
                offer: "QUALITY",
                description: "High Standard Service."
            },
            {
                id: 2,
                offer: "VALUE",
                description: "Incredible Value with Top Quality."
            }
            ]
        }
    }
}
</script>

<style scoped>
#our-offer {
    background-color: #F4F9FD;
}

#our-offer .container-fluid {
    max-width: 1200px;
}

.offer-row {
    flex-wrap: nowrap;
    padding-left: 15px;
}

#our-offer p {
    font-size: 12px;
    color: #103A5B;
}

#our-offer img {
    height: 20px;
}

.offer {
    font-weight: 600;
}
</style>