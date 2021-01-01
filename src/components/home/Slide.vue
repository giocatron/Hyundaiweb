<template>
    <div class="container">
        <carousel :perPage="1" paginationActiveColor="#002c5e" :paginationPadding="2">
            <slide>
               <router-link tag="a" to="/tour"> <img src="static/img/promotions/tour4.jpg" class="d-block w-100" alt="Tour Virtual"></router-link>
            </slide>
            <slide>
                <img src="static/img/home/slide/home-slide.jpg" class="d-block w-100" alt="Hyundai HB20">
            </slide>
            <slide>
                <img src="static/img/home/slide/hb20hatch.jpg" class="d-block w-100" alt="Hyundai HB20s">
            </slide>
            <slide>
                <img src="static/img/home/slide/hb20x.png" class="d-block w-100" alt="Hyundai HB20X">
            </slide>
            <slide>
                <img src="static/img/home/slide/1.jpg" class="d-block w-100" alt="Santa Fe 2019">
            </slide>
            <slide>
                <img src="static/img/home/slide/3.jpg" class="d-block w-100" alt="New Xcient">
            </slide>
            <slide>
                <img src="static/img/home/slide/7.jpg" class="d-block w-100" alt="New Xcient">
            </slide>
        </carousel>
    </div>
</template>
<script>
    import { Carousel, Slide } from 'vue-carousel';
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
export default {
    name: 'slider',
    data() {
        return {
            test: "test texto"
        }
    },
    components: {
        Carousel,
        Slide
    },
    methods: {
        gotosection(value) {
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
            if (this.$router.currentRoute.path == '/') {
                VueScrollTo.scrollTo('#showroom', 500, options);
            } else {
                this.$router.push({ path: '/', hash: '#showroom' })
            }

        }
    }
}
</script>

<style>
.home-slider .home-carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 45%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 0px;
    color: #fff;
    text-align: center;
}

.home-slider .home-carousel-caption h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    text-shadow: 2px 2px 4px #000000;
    text-transform: uppercase;
}

.home-slider .home-carousel-caption h2 {
    text-transform: uppercase;
    font-size: 25px;
    text-shadow: 2px 2px 4px #000000;
}

.carousel-item-index {
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 800px; */
}
</style>


