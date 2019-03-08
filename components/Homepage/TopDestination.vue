<template>
    <a @mouseover="hover"  @mouseout="doHover = false">
        <div class="card top-destination">
            <img :src="destination.img" class="card-img-top" :alt="destination.city">
            <div class="card-body pl-2 pr-2">
                <p class="card-text destination-country mb-1"  v-bind:style="[doHover ? {color:'#1B75BB', textDecoration:'none' }:{color:'#103A5B'}]">{{destination.country}}</p>
                <p class="destination-city">{{destination.city}}</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: "TopDestination",
    data() {
        return {
            doHover: false
        }
    },
    props: {
        destination: Object
    },
    methods: {
        hover: function() {
            this.doHover = !this.doHover
        }
    }
}
</script>

<style scoped>
.top-destination {
    border: 1px solid #FFF;
}

.destination-country {
    font-size: 14px;
    font-weight: 600;
    color: #103A5B;
}

a:hover, .card-body .destination-country:hover, .card-body p:hover, a p:hover {
    text-decoration: none;
}

.destination-city {
    font-size: 14px;
    color: #7F7F7F;
}
</style>