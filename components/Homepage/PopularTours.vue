<template>
    <div id="popular-tours"  class="container-fluid mt-5">
        <h2 class="text-center font-weight-bold">POPULAR TOURS</h2>
        <div class="row tour-container  mt-5 mr-auto ml-auto">
            <div class="col-12 col-sm-6 col-lg-3" v-for="tour in popularTours" :key="tour.id">
            <PopularTour :tour="tour" :agent="agent"/>
            </div>
        </div>
    </div>
</template>

<script>
import PopularTour from './PopularTour.vue'

export default {
  name: 'PopularTours',
  data() {
      return {
          popularTours: [{
              id: 0,
              img: 'images/shutterstock_726803782.png',
              tourTitle: 'China Discovery 9 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£80'
          },
          {
              id: 1,
              img: 'images/shutterstock_222501100.png',
              tourTitle: 'Amazing Thailand 13 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£200'
          },
          {
              id: 2,
              img: 'images/shutterstock_245773267.png',
              tourTitle: 'Thailand Allure 11 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£1,099'
          },
          {
              id: 3,
              img: 'images/shutterstock_628814105.png',
              tourTitle: 'Thailand Splendors 9 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£200'
          },
          {
              id: 4,
              img: 'images/shutterstock_517865302.png',
              tourTitle: 'China Discovery 9 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£80'
          },
          {
              id: 5,
              img: 'images/shutterstock_726803782.png',
              tourTitle: 'China Epic & Yangtze River 14 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£200'
          },
          {
              id: 6,
              img: 'images/shutterstock_667936441.png',
              tourTitle: 'China Discovery 9 Days',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£80'
          },
          {
              id: 7,
              img: 'images/shutterstock_222501100.png',
              tourTitle: 'Indochina Discovery',
              fromPrice: '£899',
              link: '#',
              type: 'Classic Tour',
              tourCode: 'NHFTA10',
              agentCommission: '£80'
          }
          ]
      }
  }, 
  props: {
      agent: Boolean
  },
  components: {
      PopularTour
  }
}
</script>

<style scoped>
#popular-tours {
    margin-top: 10px;
    max-width: 1200px;
}
    
.tour-container {
    margin: 0 auto;
    margin-top: 35px;
}
</style>