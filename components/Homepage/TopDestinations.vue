<template>
    <div id="top-destinations"  class="container-fluid mt-5">
        <h2 class="text-center font-weight-bold">TOP DESTINATIONS</h2>
        <div class="row destination-container ml-auto mr-auto mt-5">
            <div class="col-6 col-md-4 col-lg-2" v-for="destination in topDestinations" :key="destination.id">
                <TopDestination :destination="destination"/>
            </div>
        </div>
    </div>
</template>

<script>
import TopDestination from './TopDestination.vue'

export default {
  name: 'TopDestinations',
  data() {
      return {
          topDestinations: [{
              id: 0,
              img: 'images/Screen Shot 2019-01-30 at 4.19.png',
              country: 'Australia',
              city: 'Sydney'
          },
          {
              id: 1,
              img: 'images/Screen Shot 2019-01-30 at 4.19 (1).png',
              country: 'Italy',
              city: 'Rome'
          },
          {
              id: 2,
              img: 'images/Screen Shot 2019-01-30 at 4.19 (2).png',
              country: 'Taiwan',
              city: 'Taipei'
          },
          {
              id: 3,
              img: 'images/Screen Shot 2019-01-30 at 4.20.png',
              country: 'Thailand',
              city: 'Bangkok'
          },
          {
              id: 4,
              img: 'images/Screen Shot 2019-01-30 at 4.20 (1).png',
              country: 'China',
              city: 'Shezchen'
          },
          {
              id: 5,
              img: 'images/Screen Shot 2019-01-30 at 4.20 (2).png',
              country: 'Cambodia',
              city: 'Phnom Penh'
          }
          ]
      }
  }, 
  components: {
      TopDestination
  }
}
</script>

<style scoped>
#top-destinations {
    max-width: 1200px;
}

a {
    text-decoration: none;
}

</style>