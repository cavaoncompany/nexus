<template>
    <div class="product-details-summary container-fluid">
        <Breadcrumb :destination="destination" />
        <ProductDetailsDescription :destination="destination" :agent="agent" />
        <ProductDetailsItinerary :destination="destination" />
        <ProductDetailsHotels :destination="destination" />
        <ProductDetailsOptionalTours :destination="destination" />
    </div>
</template>

<script>
import Breadcrumb from '../Shared/Breadcrumb'
import ProductDetailsDescription from './ProductDetailsDescription'
import ProductDetailsItinerary from './ProductDetailsItinerary'
import ProductDetailsHotels from './ProductDetailsHotels'
import ProductDetailsOptionalTours from './ProductDetailsOptionalTours'

export default {
    name: 'ProductDetailsSummary',
    data() {
        return {
            destination: {}
        }
    },
    props: {
        destinations: Array,
        agent: Boolean
    },
    components: {
        Breadcrumb,
        ProductDetailsDescription,
        ProductDetailsItinerary,
        ProductDetailsHotels,
        ProductDetailsOptionalTours
    },
    created() {
        let tour = this.$route.params.title.replace(/-/g, ' ')
        this.destination = (this.destinations.filter(result => result.tourTitle.toLowerCase().indexOf(tour.toLowerCase()) > -1))[0]
        console.log(this.destination)
    }
}
</script>
