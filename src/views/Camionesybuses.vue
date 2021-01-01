<template>
    <div class="pb-5">
        <!-- cars -->
        <div class="home-cars">
            <div class=" d-flex justify-content-center">
                <!-- title -->
                <ul class="nav mt-4">
                    <li class="nav-item">
                        <div class="pointer  nav-link" v-on:click="activeMenuItem('trucks')">CAMIONES</div>
                    </li>
                    <li class="nav-item">
                        <div class="pointer  nav-link" v-on:click="activeMenuItem('buses')">BUSES</div>
                    </li>
                </ul>
                <!-- Carousel -->
            </div>
        </div>
        <div id="showroom">
            <transition name="slide-fade" mode="out-in" class="slide-test">
                <buses class="mt-5" v-if="$store.state.buses"></buses>
                <trucks class="mt-5" v-else-if="$store.state.trucks"></trucks>
            </transition>
        </div>
     
    </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    offset: -199,
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
import Slide from '@/components/home/Slide.vue'

import Suv from '@/components/home/transport_section/Suv.vue'
import Comercial from '@/components/home/transport_section/Comercial.vue'
import Buses from '@/components/home/transport_section/Buses.vue'
import Trucks from '@/components/home/transport_section/Trucks.vue'
import BottomCarousel from '@/components/home/Bottom_carousel.vue'
export default {
    name: "camionesybuses",
    mounted() {
          if (this.$router.currentRoute.path == '/camionesybuses') {
                console.log("hace esto")
              this.$store.state.trucks = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.comercial = this.$store.state.buses = false
          
            }
        // console.log(this.$router.currentRoute['hash'])
        if (this.$router.currentRoute['hash']) { VueScrollTo.scrollTo(this.$router.currentRoute['hash'], 500, options); }
    },
    components: {
        Suv,
        Comercial,
        Buses,
        Trucks,
        BottomCarousel
    },
    data() {
        return {

        }
    },
    methods: {
        activeMenuItem(value) {
            switch (value) {
                case "cars":
                    this.$store.state.cars = true
                    this.$store.state.suv = this.$store.state.comercial = this.$store.state.buses = this.$store.state.trucks = false
                    break;

                case "suv":
                    this.$store.state.suv = true
                    this.$store.state.cars = this.$store.state.comercial = this.$store.state.buses = this.$store.state.trucks = false
                    break;
                case "comercial":
                    this.$store.state.comercial = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.buses = this.$store.state.trucks = false
                    break;
                case "buses":
                    this.$store.state.buses = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.comercial = this.$store.state.trucks = false
                    break;
                case "trucks":
                    this.$store.state.trucks = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.comercial = this.$store.state.buses = false
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
.slide-test {}

.object {
    transition: all 1s ease;
}

/* Enter and leave animations can use different */

/* durations and timing functions.              */

.slide-fade-enter-active {
    min-height: 161.06px;
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
