<template>
    <div>
        <div class="service-bg-image d-flex align-items-center" style="height: 130px" v-bind:style="{ 'background-image': 'url(../static/img/service/service.jpg)' }">
            <div class="container">
                <div class="title-white" style="color: #ffffff;font-size: 40px;font-family: 'hyundai_sans_head_krmedium', sans-serif;">
                    Autos
                </div>
            </div>
        </div>
        <!--<img src="static/img/promotions/hyundai-promo-2020.png" alt="Promociones" class="img-fluid" style="width: 100%;">-->
        <toplist></toplist>
        <div class="mt-5">
            <cars></cars>
        </div>
    </div>
    
</template>
<script>
import Cars from '@/components/home/transport_section/Cars.vue'
import Toplist from '@/components/home/Toplist_car.vue'
export default {
    components:{
        Cars,
        Toplist
    }
}
</script>
<style>
    .car-title {
        text-align: center;
    }
</style>


