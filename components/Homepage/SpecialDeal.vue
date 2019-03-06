<template>
    <router-link :to="{name:'dest-title', params:{destination: deal.region, title:deal.tourTitle.replace(/\s+/g, '-')}}" class="card special-deal">
        <div>
            <img :src="deal.img" class="card-img-top" :alt="deal.tourTitle">
            <div class="offer-end card-img-overlay">
                <p>OFFER END - {{deal.endDate}}</p>
            </div>
            <div class="card-body d-flex flex-column justify-content-between pl-2 pr-2 mb-3">
                <div class="top">
                    <p class="card-text tour-code mb-1">Tour code: {{deal.tourCode}}</p>
                    <p class="deal-title mb-2">{{deal.tourTitle}}</p>
                    <p class="deal-type">{{ deal.type }}</p>
                </div>
                <div class="bottom">
                    <p class="deal-price">
                        <span class="from-price">From £{{deal.fromPrice}}</span>
                        <span class="original-price">{{deal.originalPrice}}</span>
                    </p>
                    <p class="for-agents" v-if="agent===true">Agent commission {{ deal.agentCommission }}</p>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "SpecialDeal",
    props: {
        deal: Object,
        agent: Boolean
    }
}
</script>

<style scoped>
.special-deal {
    border: 1px solid #FFF;
}

.special-deal:hover {
    text-decoration: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.offer-end {
    font-size: 12px;
    color: #1B75BB;
    text-align: center;
    background-color: white;
    z-index: 10;
    border-radius: 15px;
    height: 32px;
    display: inline-block;
    margin-top: 52%;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
}

.offer-end p {
    margin-top: 8px;
    margin-bottom: 0;
}

.card-body {
    height: 160px;
}

.tour-code {
    font-size: 12px;
    color: #7F7F7F;
}

.deal-title {
    font-size: 16px;
    font-weight: 600;
    color: #103A5B;
    line-height: 1.2em;
}

.deal-type {
    color: #103A5B;
    font-size: 12px;
}

.from-price {
    font-size: 15px;
    color: #FF5E19;
    margin-right: 4%;
}

.original-price {
    font-size: 15px;
    color: #7F7F7F;
    text-decoration: line-through;
}

.deal-price {
    margin-bottom: 0;
}

.for-agents {
    color: #3173A7;
    font-size: 15px;
    font-weight: 600;
}
</style>