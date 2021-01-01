<template>
    <div class="container">
        <div class="row mt-3 justify-content-center">
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'h1'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/comercial/h1/thumbnail.png" alt="H1" class="img-fluid">
                    </div>
                    <div class="car-title">
                        H1
                    </div>
                </router-link>
            </div>
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'h_100'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/comercial/h_100/thumbnail.png" alt="H-100" class="img-fluid">
                    </div>
                    <div class="car-title">
                        H-100
                    </div>
                </router-link>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="css">

</style>
