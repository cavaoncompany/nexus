<template>
    <div class="breadcrumb container-fluid mt-3 mt-lg-4">
        <ul class="d-flex">
            <li class="mr-2"><router-link :to="{name: 'index'}">Home</router-link></li>
            <li class="mr-2">></li>
            <li class="mr-2"><router-link :to="{name: 'destination', params:{destination: destination.region}}">{{ destination.region }}</router-link></li>
            <li class="mr-2">></li>
            <li class="lighter">{{ destination.tourTitle }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',
    data() {
        return {
            breadcrumbList: []
        }
    },
    props: {
        destination: {}
    },
    mounted() {
        this.updateList()
    },
    watch: {
        '$route'() {
            this.updateList()
        }
    },
    methods: {
        routeTo: function(pRouteTo) {
            if (this.breadcrumbList[pRouteTo].link) {
                this.$router.push(this.breadcrumbList[pRouteTo].link)
            }
        },
        updateList() {
            this.breadcrumbList = this.$route.meta.breadcrumb
        }
    }
}
</script>

<style scoped>
    .breadcrumb ul li {
        color: #7F7F7F;
        font-size: 14px;
    }

    .breadcrumb ul li a {
        color: #7F7F7F;
    }

    .lighter {
        opacity: 0.5;
    }

    
    .breadcrumb {
        background: #FFF;
        max-width: 1200px;
    }
</style>
