<template>
    <div class="car">
        <div class="bg-white pb-5">
            <div class="cover">
                <img :src="`..//static/img/home/slide/hb20hatch.png`" alt="Portada Hyundai hb20" class="img-fluid w-100">
            </div>
            <div class="nav-car d-flex">
                <ul class="navbar-nav d-flex flex-row mx-auto ">
                    <li class="nav-item active ">
                        <div v-on:click="activeComponenent('features')" class="nav-link pointer">Características</div>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item active">
                        <div v-on:click="activeComponenent('price')" class="nav-link pointer">Cotización</div>
                    </li>
                </ul>
            </div>
        
        </div>
        <transition name="slide-fade" mode="out-in">
            <feature v-if="features"></feature>
            <motorization v-else-if="motor"></motorization>
            <price v-else-if="price"></price>
        </transition>
        
    </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    offset: 0,
    force: true,
    cancelable: true,
    onStart: function(element) {
        // scrolling started
    },
    onDone: function(element) {
        // scrolling is done
    },
    onCancel: function() {
        // scrolling has been interrupted
    },
    x: false,
    y: true
}

import Feature from '@/views/sections/cars/hb20/components/Feature.vue'
import Motorization from '@/views/sections/cars/hb20/components/Motorization.vue'
import Price from '@/views/sections/cars/hb20/components/Price.vue'
export default {
    data() {
        return {
            features: true,
            motor: false,
            price: false
        }
    },
    components: {
        Feature,
        Motorization,
        Price
    },
    methods: {
        activeComponenent(value) {
            switch (value) {
                case "features":
                    this.features = true;
                    this.motor = this.price = false;
                    break;

                case "motor":
                    this.motor = true;
                    this.features = this.price = false;
                    break;

                 case "price":
                    VueScrollTo.scrollTo('#price_section', 500, options);
                    break;

                default:
                    //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
                    break;

            }
        }
    }
}
</script>

<style>
/* Enter and leave animations can use different */

/* durations and timing functions.              */
.bg-white{
    background-color: white;
    
}
.slide-fade-enter-active {
    transition: all .8s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */

    {
    transform: translateX(10px);
    opacity: 0;
}
</style>
