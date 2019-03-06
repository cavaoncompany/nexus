<template>
    <div class="hire-driver card text-white text-center">
        <img class="card-img w-100 header-lg" src="~/assets/images/Screen Shot 2019-02-01 at 2.03.png" alt="city view driver advert">
        <div id="advertStaticImage" class="header-sm card-img"></div>
        <div class="card-img-overlay d-md-flex justify-content-between pb-lg-4 pt-lg-5 pl-lg-5 pr-lg-5 pt-sm-3 pl-sm-4 pr-sm-5">
            <h2 class="text-left">Multiple languages<br>
            Free route<br>
            Your own driver</h2>
            <button class="mt-5 mt-md-auto mt-lg-auto btn btn-primary border-0 pt-2 pb-2">Hire now</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Advert'
}
</script>

<style scoped>
.hire-driver {
    max-width: 1200;
}

.card-img-overlay {
    background: rgba(0, 0, 0, 0.2);
}

.hire-driver h2 {
    color: #FFF;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.6px;
}

.hire-driver button {
    background-color: #1B75BB;
    font-size: 14px;
    font-weight: 100;
    border-radius: 50px;
    padding-left: 30px;
    padding-right: 30px;
    width: 125px;
}

#advertStaticImage {
    margin: 0 auto;
    position: relative;
    background-image: url('~assets/images/Screen Shot 2019-02-01 at 2.6.png');
    background-position-x: center;
    background-size: cover;
    height: 238px;
}

</style>
