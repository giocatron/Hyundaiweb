<template>
    <div class="car">
        <div class="cover">
            <img :src="`static/img/section_transport/suv/tucson/cover.jpeg`" alt="Portada Hyundai Accent" class="img-fluid">
        </div>
        <div class="nav-car d-flex">
            <ul class="navbar-nav d-flex flex-row mx-auto ">
                <li class="nav-item active ">
                    <div v-on:click="activeComponenent('features')" class="nav-link pointer">Características</div>
                </li>
                <li class="divider-vertical"></li>
                <li class="divider-vertical"></li>
                <li class="nav-item active">
                    <div v-on:click="activeComponenent('price')" class="nav-link pointer">Cotización</div>
                </li>
            </ul>
        </div>
        <transition name="slide-fade" mode="out-in">
            <feature v-if="features"></feature>
            <price v-else-if="price"></price>
        </transition>
    </div>
</template>

<script>
import Feature from '@/views/sections/suv/tucson/components/Feature.vue'
import Price from '@/views/sections/suv/tucson/components/Price.vue'
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
                    this.price = true;
                    this.features = this.motor = false;
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
