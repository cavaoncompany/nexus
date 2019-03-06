<template>
    <div class="card review">
        <iframe :src="review.video" rel="preload" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen :title="review.tourTitle"></iframe>
        <div class="card-body">
            <p class="review-title">{{review.tourTitle}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Review",
    props: {
        review: Object
    }
}
</script>

<style scoped>
.review {
    border: 1px solid #FFF;
}

.review .card-body {
    padding-left: 7px;
}

.review-title {
    font-size: 14px;
    font-weight: 600;
    color: #103A5B;
}
</style>