<template>
    <div class="card bg-dark text-white popular-tour">
        <a :href="tour.link">
            <img :src="tour.img" class="card-img-top" :alt="tour.tourTitle">
            <div class="card-img-overlay" v-for="i in 10" @mouseover="showByIndex = i" @mouseout="showByIndex = null" v-bind:key="i">
                <div v-show="showByIndex === null" class="price-tag text-center"><p class="pt-1">{{ tour.fromPrice }}</p></div>
                <div v-show="showByIndex === null" class="commission-tag text-center pl-1 pr-1" v-if="agent===true"><p class="pt-1">Earn {{ tour.agentCommission }}</p></div>
                <div v-show="showByIndex === null" class="tour-title"><p>{{ tour.tourTitle }}</p></div>
                <transition name="image-popover">
                    <div class="hover" v-show="showByIndex === i">
                        <p class="tour-code">Tour code: {{ tour.tourCode }}</p>
                        <h3>{{ tour.tourTitle }}</h3>
                        <p class="tour-type">{{ tour.type }}</p>
                        <p class="from-price">From {{ tour.fromPrice }}</p>
                        <p class="agent-commission" v-if="agent===true">Agent commission {{ tour.agentCommission }}</p>
                    </div>
                </transition>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "SpecialDeal",
    data() {
        return {
            showByIndex: null
        }
    },
    props: {
        tour: Object,
        agent: Boolean
    },
    methods: {
        showInfo: function(){
            this.hover = true;
        },
        hideInfo: function(){
            this.hover = false;
        }
    }
}
</script>

<style scoped>
.popular-tour {
    border: 1px solid #FFF;
    margin-bottom: 25px;
}

.popular-tour img {
    height: 144px;
}

.popular-tour .hover {
    background: rgba(16, 58, 91, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #FFF;
    padding: 7%;
    pointer-events: none;
}

.hover .tour-code, .hover .tour-type {
    font-size: 12px;
    line-height: 3px;
    margin-bottom: 5%;
}

.hover h3 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 3px;
    height: 45%;
}

.hover .tour-type {
    font-size: 12px;
    line-height: 1em;
}

.hover .from-price {
    font-size: 14px;
    color: #9CC0DE;
    line-height: .7em;
    margin-bottom: 6px;
}

.image-popover-enter, .image-popover-leave-to {
  transform: translateY(140px);
  opacity: 0;
  overflow: hidden;
}

.image-popover-enter-to, .image-popover-leave {
  opacity: 1;
}

.image-popover-enter-active, .image-popover-leave-active {
  transition: all .4s cubic-bezier(0.5, 1.0, 1.0, 0.8);
  overflow: hidden;
}

.price-tag {
    font-size: 14px;
    color: #1B75BB;
    background-color: rgba(255, 255, 255, 0.2);
    opacity: 0.6;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    margin-top: -7px;
    width: 61px;
    height: 26px;
}

.commission-tag {
    background: rgba(16, 58, 91, 0.2);
    border-radius: 26px 0px 0px 26px;
    color: #FFF;
    font-size: 14px;
    width: 110px;
    height: 26px;
}

.tour-title {
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(1,1,1,0.15));
    width: 100%;
    height: 50%;
}

.tour-title p {
    margin-bottom: 3px;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: 3px;
    padding-right: 3px;
}

.agent-commission {
    font-size: 14px;
    color: #FFF;
    line-height: .9em;
}

.card-img-overlay {
    overflow: hidden;
}

</style>