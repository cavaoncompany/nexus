<template>
    <a :href="place.link" class="card place-to-go border-0">
        <div>
            <img :src="place.img" class="card-img-top" :alt="place.title">
            <div class="card-body pt-2 pl-0">
                <div class="title mb-2">{{place.title}}</div>
                <div class="description">{{place.description}}</div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: 'PlaceToGo',
    props: {
        place: Object
    }
}
</script>

<style scoped>
.place-to-go {
    max-width: 1200px;
}

.place-to-go .title {
    color: #103A5B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
}

.place-to-go .description {
    font-size: 13px;
    color: #7F7F7F;
    line-height: 1.3rem;
}

.place-to-go:hover, .place-to-go:active, .place-to-go:focus {
    text-decoration: none;
}
</style>
