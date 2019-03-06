<template>
    <div id="reviews"  class="container-fluid mt-5 mb-5">
        <h2 class="text-center font-weight-bold">REVIEWS & VIDEOS</h2>
        <div class="review-container row mt-5">
            <div class="col-12 col-md-4" v-for="review in reviews" :key="review.id">
                <Review :review="review"/>
            </div>
        </div>
    </div>
</template>

<script>
import Review from './Review.vue'

export default {
  name: 'Reviews',
  data() {
      return {
          reviews: [{
              id: 0,
              video: 'https://www.youtube.com/embed/FrZOQJblFkU',
              img: 'Screen Shot 2019-01-30 at 5.23.png',
              tourTitle: 'China Discovery 9 Days'
          },
          {
              id: 1,
              video: 'https://www.youtube.com/embed/Ia1jIvflYoA',
              img: 'Screen Shot 2019-01-30 at 5.24.png',
              tourTitle: 'Nexus Holidays India Tour'
          },
          {
              id: 2,
              video: 'https://www.youtube.com/embed/x4HrwBX5yMo',
              img: 'Screen Shot 2019-01-30 at 5.24 (1).png',
              tourTitle: 'Nexus Holidays Beijing Tour'
          }
          ]
      }
  }, 
  components: {
      Review
  }
}
</script>

<style>
#reviews {
    max-width: 1200px;
}

.review-container {
    margin: 0 auto;
    margin-top: 40px;
}
</style>