<template>
    <b-container id="special-deals"  class="container-fluid mt-5">
        <h2 class="text-center font-weight-bold">SPECIAL DEALS</h2>
        <b-row class="row deal-container mt-5 mr-auto ml-auto">
            <b-col cols="12" sm="6" lg="4" v-for="deal in specialDeals" :key="deal.id">
                <SpecialDeal  :deal="deal" :agent="agent"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import SpecialDeal from './SpecialDeal.vue'
// import destinations from '../../destinations.json'

export default {
    name: 'SpecialDeals',
    data() {
        return {
            numberOfColumns: 3,
            specialDeals: []
        }
    },
    props: {
        agent: Boolean,
        destinations: Array
    },
    components: {
        SpecialDeal
    },
    created() {
        this.specialDeals = JSON.parse(JSON.stringify(this.destinations)).splice(0,6)
    }
}
</script>

<style scoped>
#special-deals {
    max-width: 1200px;
}

</style>