<template>
    <div>
        <div class="bg-white" style="margin-top: -40px;"><!-- No se encuentra el css del template -->
            <div class="container">
                <div class="title pt-0">HB20x</div>
                <div class="subtitle mt--15">Nueva Generación.</div>
                <div class="row description-two-bloks pt-4">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle pt-5">Variedad de colores.</div>
                        <div class="col-md-12 text-center">
                            <div class="description">
                                <div class="text-block">
                                    Tonos neutros y fuertes para todos los gustos.
                                </div>
                            </div>
                        </div>
                    </div>
                    <carcolor></carcolor>
                    
                </div>
                <div class="pt-5">
                    <!--<price></price>-->
                </div>
                
                
            </div>
            <div class="container pt-2 pb-5">
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle">La nueva generación HB20X supera sus expectativas.</div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div class="col-md-12 text-center">
                        <slide></slide>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="py-5 pt-5">
            <div class="parallax-wrapper"  style="height: 500px;">
                <div style="width: 100%; background: 0 !important;">
                    <div class="parallax div-visible" style="background-image: url('../static/img/section_transport/suv/hb20x/bg-hb20x.jpg')">
                        <div class="row pb-5 pt-5">
              
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-white pb-5">
            <div class="container">
                <!--<div class="row description-two-bloks">
                    <div class="col-md-12 text-center">
                        <div class="subtitle">Tecnologías inteligentes.</div>
                    </div>
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="block-description-box">
                            <div class="title-block-2 text-left">
                                Sistema exclusivo de protección y seguridad.
                            </div>
                            <div class="text-block" style="font-size: 12pt;">
                                El sistema de alerta de frenado autónomo utiliza la cámara en el parabrisas para identificar los automóviles y peatones que se encuentran adelante, en caso de riesgo de colisión, se aplican pitidos y se aplican los frenos.
                            </div>
                        </div>
                        
                        
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="block-description-box">
                            <div class="title-block-2 text-left">
                            Alerta de cambio de carril.
                            </div>
                            <div class="text-block" style="font-size: 12pt;">
                                La alerta de cambio de carril, que es la única en la categoría, identifica que el vehículo está invadiendo el siguiente carril y emite una señal audible y también visual en el panel.
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div class="row description-two-bloks">
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/hb20x/hb20x-proteccion.jpeg`" alt="HB20x Proteccion y seguridad" class="img-fluid">
                        </div>
                        
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/hb20x/hb20x-alertacarril.jpeg`" alt="HB20x Alerta de carril" class="img-fluid">
                        </div>
                    </div>
                </div>-->
                <price></price>
            </div>
        
        
            <div class="container pt-5 pb-5">
                <!--<div class="container pt-5">
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center">
                        <div class="subtitle">Tecnologias inteligentes.</div>
                    </div>
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="block-description-box">
                            <div class="title-block option pb-2">
                                Transmisión automática de 8 velocidades cambio por cable
                            </div>
                            <div class="text-block">
                                El sistema de alerta de frenado autónomo utiliza la cámara en el parabrisas para identificar los automóviles y peatones que se encuentran adelante, en caso de riesgo de colisión, se aplican pitidos y se aplican los frenos.
                            </div>
                        </div>
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/hb20x/hb20-sensor.gif`" alt="HB20 Sensor" class="img-fluid">
                        </div>
                        
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="block-description-box">
                            <div class="title-block option pb-5">
                                Alerta de cambio de carril.
                            </div>
                            <div class="text-block">
                            Por medio de una cámara ubicada en el parabrisas, el sistema puede identificar los carriles delanteros, y si el vehículo se sale de su camino, el sistema alerta al conductor mediante luces del tablero de instrumentos y advertencia audible.
                            </div>
                        </div>
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/hb20x/hb20-carrill.gif`" alt="Cambio de carril" class="img-fluid">
                        </div>
                    </div>
                </div>
                
            </div>-->
        

            <div class="bg-white py-5 pt-5">
                <!--<div class="container">
                    <div class="subtitle" style="margin-top:5px !important;">El nuevo robusto.</div>
                    <div class="longtext px-5 pb-5">
                    El nuevo motor ofrece una mayor agilidad en el tráfico, adelantamientos más seguros y tranquilidad para subir las laderas. La potencia del motor flexible TGDi de inyección directa ofrece 120 CV de potencia y 17,5 kgfm de par.

                    </div>
                </div>
                <div class="cream-main d-flex justify-content-center">
                    
                    <div>
                        <img :src="`static/img/section_transport/suv/hb20x/engine.jpeg`" alt="Foto motor auto" class="img-fluid">
                    </div>
                    
                </div>-->
                <div class="container">
                    <div class="subtitle pb-4" style="margin-top:5px !important;">Descubra detalles más elegantes y prácticos.</div>

                </div>
                <div class="cream-main d-flex justify-content-center">
                <slideshow></slideshow>
                </div>
            </div>



        
            <div class="container pt-5 pb-5">
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle">Conectividad integrada.</div>
                            <div class="col-md-12 text-center">
                                <div class="description">
                                    <div class="text-block">
                                        Nuevo sistema de pantalla táctil flotante de 8 ”. Conectividad con Apple CarPlay y Google Android Auto. Posibilidad de duplicar Waze y otras aplicaciones, personalizar los iconos en la pantalla y configurar la función de "favoritos". Es posible acceder a las funciones principales del teléfono inteligente, mediante comando de audio en el volante y botón de reconocimiento de voz.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 text-center">
                            <div class="col-md-12 text-center">
                                <TwentyTwenty
                                before="../static/img/section_transport/suv/hb20x/blueMedia/1.jpg"
                                after="../static/img/section_transport/suv/hb20x/blueMedia/2.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        <!--<div class="py-5 pt-5">
            <div class="parallax-wrapper"  style="height: 500px;">
                <div class="div-visible" style="width: 100%; background: 0 !important;">
                    <div class="parallax" style="background-image: url('../static/img/section_transport/suv/hb20x/hb20x-tablero.jpg')">
                        <div class="row pb-5 pt-5">
            
                    -
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
            

                
            

            
            <!-- <div class="cream-color-zone mt-5 py-4">
                    <div class="subtitle">
                        Transmisión automática secuencial de 6 marchas <br> Suspensiones reforzadas y elevadas <br> Sensor de Retroceso <br> Doble airbag <br> Llantas de aleación de 16" <br> Seguridad para niños <br>
                    </div>
            
                </div> -->
            <!-- end cream zone -->
        
        <div class="bg-white pb-5">
            <div class="container pt-2 pb-4">
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle">Interior 100% reformado.</div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div class="col-md-12 text-center">
                        <slide2></slide2>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--<div class="py-5 pt-5">
            <div class="parallax-wrapper"  style="height: 500px;">
                <div style="width: 100%; background: 0 !important;">
                    <div class="parallax" style="background-image: url('../static/img/section_transport/suv/hb20x/bg2-hb20x.jpg')">
                        <div class="row pb-5 pt-5">
            
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>-->

        <div class="bg-white pb-5">
            <div class="container pb-5">
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle">Competencia en seguridad.</div>
                    </div>
                    <div class="col-md-12 text-center">
                        <div class="col-md-12 text-center">
                        <slide3></slide3>
                        </div>
                    </div>
                </div>
                <div class="row description-two-bloks pt-5">
                    <div class="col-md-12 text-center pb-5 pb-2">
                        <div class="subtitle">Eficiencia en el desempeño.</div>
                    </div>
                    <div class="tab-100">
                        <div class="home-suv">
                            <div class="justify-content-center">
                                <ul class="nav mt-4">
                                    <li class="nav-item tab-50 tab-menu bg-engine">
                                        <div v-on:click="activeComponenent('engine')" class="pointer  nav-link tab-menu tab-100">Motor Gamma Flex 1.6</div>
                                    </li>
                                    <li class="nav-item tab-50 tab-menu tab-menu-last">
                                        <!--<div v-on:click="activeComponenent('transmision')" class="pointer  nav-link tab-menu tab-100 tab-menu-last">Transmisión MT</div>-->
                                        <div v-on:click="activeComponenent('transmision2')" class="pointer nav-link tab-menu tab-100 tab-menu-last">En transmisión</div>
                                    </li>
                                    <!--<li class="nav-item tab-30 tab-menu bg-engine">
                                        <div v-on:click="activeComponenent('transmision2')" class="pointer  nav-link tab-menu tab-100">En transmisión</div>
                                    </li>-->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                    <engine v-if="engine"></engine>
                    <transmision v-if="transmision"></transmision>
                    <transmision2 v-if="transmision2"></transmision2>
                </div>
            </div>
            <div class="galery-zone">
                <div class="col-md-12 text-center pb-4 pb-2">
                    <img :src="`../static/img/section_transport/suv/hb20x/car-media.jpeg`" alt="Car media" class="img-fluid">
                    <div class="subtitle">Galería</div>
                    <div class="download-link container my-2 text-right">
                        <a href="../static/catalogs/hb20x.pdf" target="_blank"> Descargar Ficha técnica</a>
                    </div>
                    <gallery></gallery>
                </div>
            </div>
        </div>
    </div>
        
   
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty'
import Price from '@/views/sections/suv/hb20x/components/Price.vue'
import Slideshow from '@/views/sections/suv/hb20x/components/Slideshow.vue'
import Slide from '@/views/sections/suv/hb20x/components/Slide.vue'
import Slide2 from '@/views/sections/suv/hb20x/components/Slide2.vue'
import Slide3 from '@/views/sections/suv/hb20x/components/Slide3.vue'
import Engine from '@/views/sections/suv/hb20x/components/Engine.vue'
import Transmision from '@/views/sections/suv/hb20x/components/Transmision.vue'
import Transmision2 from '@/views/sections/suv/hb20x/components/Transmision2.vue'
import Gallery from '@/views/sections/suv/hb20x/components/Gallery.vue'
import Carcolor from '@/views/sections/suv/hb20x/components/Carcolor.vue'
export default {
    components: {
        Slideshow,
        Slide,
        Slide2,
        Slide3,
        Engine,
        Transmision,
        Transmision2,
        TwentyTwenty,
        Gallery,
        Carcolor,
        Price
    }, 
    data() {
        return {
            engine: true,
            transmision: false
        }
    },
    methods: {
        activeComponenent(value) {
            switch (value) {
                case "transmision":
                    this.transmision = true;
                    this.engine = false;
                    this.transmision2 = false;
                    break;

                case "engine":
                    this.engine = true;
                    this.transmision = false;
                    this.transmision2 = false;
                    break;
                 case "transmision2":
                    this.transmision2 = true;
                    this.engine = false;
                    this.transmision = false;
                    break;

                 case "price":
                    VueScrollTo.scrollTo('#price_section', 500, options);
                    // this.price = true;
                    // this.transmision = this.engine = false;
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
.bg-security{
    background-color: #F6F3F2;
}
.bg-white{
    background-color: white;
}
.clear{
    padding-right: 0px !important;
    padding-left: 0px !important
}
.bg-engine{
    background-color: #f5f2f1;
}
.mb-10{
    margin-bottom: 10px !important;
}
.twentytwenty-container .twentytwenty-arrow-left {
    top: 6px;
    left: 4px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid white;
}
.twentytwenty-container .twentytwenty-arrow-right {
    bottom: 14px;
    left: 18px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid white;
}
.tab-100{
    width: 100%;
}
.tab-50{
    width: 50%;
}
.tab-30{
    width: 33.3%;
}
.tab-menu{
    color: #272727 !important;
}
.tab-menu-last{
    background-color: #666666;
    color: white !important;
}
.parallax{
    position: fixed;
    width: 100%;
    height: 500px;
    top: 100px;
    left: 0;
    z-index: -1;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    pointer-events: none;
}
.title-block-2{
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
    text-align: center;
    font-size: 26px;
    color: #000000;
}

</style>
