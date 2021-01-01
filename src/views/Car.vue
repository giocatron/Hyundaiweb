<template>
    <div class="car">
        <div class="cover">
            <img :src="`../static/img/section_transport/cars/${$route.params.car}/cover.jpg`" alt="Portada Hyundai Accent" class="img-fluid w-100">
        </div>
        <div class="nav-car d-flex">
            <ul class="navbar-nav d-flex flex-row mx-auto ">
                <li class="nav-item active ">
                    <div v-on:click="features = true" to="/caracteristicas" class="nav-link pointer">Características</div>
                </li>
                <li class="divider-vertical"></li>
                <li class="nav-item active">
                    <div v-on:click="features = false" to="/motorizacion" class="nav-link pointer">Motorización</div>
                </li>
                <li class="divider-vertical"></li>
                <li class="nav-item active">
                    <router-link tag="a" class="nav-link" to="/cotizacion pointer">Cotización</router-link >
                </li>
            </ul>
        </div>
         <transition name="slide-fade" mode="out-in">
               <feature :item="$route.params.car" v-if="features"></feature>
               <motorization></motorization>
          </transition>
    </div>
</template>

<script>
import Feature from '@/components/car/Feature.vue'
import Motorization from '@/components/car/Motorization.vue'
export default {
    data(){
        return{
            features:true
        }
    },
    components:{
        Feature,
        Motorization
    }
}
</script>

<style>
    /* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
