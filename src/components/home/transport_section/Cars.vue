<template>
    <div class="container">
        <div class="row mt-3 justify-content-center mb-3">
           <!-- <div class="col-md-3 col-6">
                <router-link :to="{ name: 'new_accent'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/new_accent/thumbnail.png" alt="Hyundai Accent" class="img-fluid">
                    </div>
                    <div class="car-title">
                        New Accent
                    </div>
                </router-link>
            </div>-->
            <!--<div class="col-md-3 col-6">
                <router-link to="/accent">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/accent/thumbnail.png" alt="Hyundai Accent" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Accent
                    </div>
                </router-link>
            </div>-->
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'ioniq'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/ioniq/thumbnail.png" alt="Hyundai Accent" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Ioniq
                    </div>
                </router-link>
            </div>
            <!--<div class="col-md-3 col-6">
                <router-link to="/grand_i10">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/grand_i10/thumbnail.png" alt="Hyundai Accent" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Grand I10
                    </div>
                </router-link>
            </div>-->
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'hb20s'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/hb20s/thumbnail.png" alt="Hyundai HB20s" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Hb20s
                    </div>
                </router-link>
            </div>
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'hb20'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/cars/hb20/thumbnail.png" alt="Hyundai HB20" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Hb20
                    </div>
                </router-link>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.car-title {
    text-align: center;
}
</style>
