<template>
    <a :href="$router.resolve({name:'dest-title', params:{dest: result.region.replace(/\s+/g, '-'), title:result.tourTitle.replace(/\s+/g, '-')}}).href" class="card result mb-2 mt-2">
        <div>
            <img :src="result.img" class="card-img-top" :alt="result.tourTitle">
            <div class="card-body d-flex flex-column justify-content-between pl-2 pr-2 mb-3">
                <div class="top">
                    <p class="card-text tour-code">Tour code: {{result.tourCode}}</p>
                    <p class="result-title">{{ result.tourTitle }}</p>
                    <p class="result-type">{{ result.type }}</p>
                </div>
                <div class="bottom">
                    <p class="result-price">
                        <span class="from-price">From £{{ result.fromPrice }}</span>
                    </p>
                    <p class="for-agents" v-if="agent===true">Agent commission {{ result.agentCommission }}</p>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: "SpecialDeal",
    props: {
        result: Object,
        agent: Boolean
    }
}
</script>

<style scoped>
.result {
    border: 1px solid #FFF;
}

.result:hover {
    text-decoration: none;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

.card-body {
    height: 160px;
}

.tour-code {
    font-size: 12px;
    color: #7F7F7F;
    margin-bottom: 0;
}

.result-title {
    font-size: 16px;
    font-weight: 600;
    color: #103A5B;
    margin-bottom: 0;
    line-height: 1.5rem;
    height: 3em;
    overflow: hidden;
}

.result-type {
    color: #103A5B;
    font-size: 12px;
}

.from-price {
    font-size: 15px;
    color: #FF5E19;
    margin-right: 4%;
}

.result-price {
    margin-bottom: 0;
}

.for-agents {
    color: #3173A7;
    font-size: 15px;
    font-weight: 600;
}

.result  .card-img-top {
    height: 150px;
}
</style>