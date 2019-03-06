<template>
    <div class="places-to-go container-fluid">
        <div class="row places-to-go-container">
            <div class="col-12 col-md-6" v-for="place in places" :key="place.id">
                <PlaceToGo :place="place" />
            </div>
        </div>
    </div>
</template>

<script>
import PlaceToGo from './PlaceToGo'

export default {
    name: 'PlacesToGo',
    data() {
        return {
            places: [
                {
                    id: 0,
                    img: 'images/Screen Shot 2019-02-01 at 2.4.jpg',
                    title: 'Places to go on a long weekend',
                    description: 'Places to go on a long weekend Places to go on a long weekend',
                    link: ''
                },
                {
                    id: 1,
                    img: 'images/Screen Shot 2019-02-01 at 2.5.jpg',
                    title: 'Places to go on a long weekend',
                    description: 'Places to go on a long weekend Places to go on a long weekend',
                    link: ''
                }
            ]
        }
    },
    components: {
        PlaceToGo
    }
}
</script>

<style scoped>
.places-to-go {
    max-width: 1200px;
    margin-top: 60px;
    margin-bottom: 60px;
}

</style>
