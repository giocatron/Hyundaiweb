<template>
    <div>
        <div class="container">
            <div class="title pt-0">HB20s</div>
            <div class="subtitle mt--15">Más atrevido que nunca</div>
            <div class="longtext container">
                Conoce a la sofisticada y conceptual HB20S New Generation.
            </div>
            <div class="main-image d-flex justify-content-center pb-4">
                <div>
                    <!--img :src="`../static/img/section_transport/cars/hb20s/slider/6.jpg`" alt="HB20s" class="img-fluid">-->
                    <slide></slide>
                    <div class="mt-1">
                        <div class="subtitle">Belleza exterior</div>
                        <div class="longtext container mt-0 pb-2">
                            La innovación y la elegancia se destacan en las nuevas luces traseras Clear Vision
                        </div>
                    </div>
                    
                </div>
            </div>
            <price></price>
        </div>
        
        <!--<div class="container pt-2 pb-5">
            <div class="row description-two-bloks pt-5">
                <div class="col-md-12 text-center pb-5 pb-2">
                    <div class="subtitle">Vigilando lo nuevo.</div>
                </div>
                <div class="col-md-12 text-center">
                    <div class="col-md-12 text-center">
                       <slider></slider>
                    </div>
                </div>
            </div>
        </div>-->


        <div class="container pt-5 pb-5">
            <div class="row description-two-bloks pt-5">
                <div class="col-md-12 text-center pb-5 pb-2">
                    <div class="subtitle">Nuevo centro blueMedia de 8 pulgadas.</div>
                    <div class="col-md-12 text-center">
                        <div class="description">
                            <div class="text-block">
                                El centro de medios flotante de 8 "es un dispositivo que se comunica directamente con usted y su automóvil, utilizando conectividad clave como Bluetooth®, calendario, transmisión de audio, historial de llamadas, reproductor de MP3, reproductor de fotos, video, comandos audio y más Además, se conecta a las diversas funciones de su teléfono a través de Apple CarPlay® y Android Auto®.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 text-center">
                    <div class="col-md-12 text-center">
                        <TwentyTwenty
                        before="../static/img/section_transport/cars/hb20s/blueMedia/1.jpg"
                        after="../static/img/section_transport/cars/hb20s/blueMedia/2.jpg" />
                    </div>
                </div>
            </div>
        </div>

       
        
        <div class="container pt-5">
            <div class="row description-two-bloks pt-5">
                <div class="col-md-12 text-center">
                    <div class="subtitle">Lo más destacado de la época</div>
                </div>
                <div class="col-md-6 box-img-text-first-block">
                    <div class="block-description-box">
                        <div class="text-block">
                            Las nuevas linternas Clear Vision presentan un aspecto más limpio, belleza e iluminación más homogénea.
                        </div>
                    </div>
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/hb20s/3.png`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="block-description-box">
                        <div class="text-block">
                           Con la sensanción deportiva, las palancas del volante permiten un cambio seguro y libre sin quitar las manos del volante.
                        </div>
                    </div>
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/hb20s/2.png`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>

        <div class="container pt-5 pb-5">
            <div class="row description-two-bloks pt-5">
                <div class="col-md-12 text-center pb-5 pb-2">
                    <div class="subtitle">Alto desempeño</div>
                </div>
                <div class="col-md-6 box-img-text-first-block clear">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/hb20s/engine.jpg`" alt="Motor" class="img-fluid">
                    </div>
                    
                </div>
                <div class="col-md-6 box-img-text-second-block bg-engine pb-2 ">
                   <div class="block-description-box mb-10">
                       Motor
                       <div class="title-block">
                         Gamma 1.6 CVVT dual
                        </div>
                    </div>
                    <div class="text-block mb-10 pb-3">
                       El motor Gamma 1.6 tiene doble sincronización de válvulas CVVT, 4 válvulas por cilindro y múltiple de admisión variable. Todo para producir 130 caballos de fuerza con bajo consumo de combustible, satisfaciendo las necesidades de un conductor exigente. Además, tiene un sistema de arranque en frío E-start, que no requiere un depósito de gasolina adicional, lo que mejora el rendimiento del motor y reduce las emisiones contaminantes. Disponible con transmisión automática secuencial de 6 velocidades o manual de 6 velocidades.
                       
                    </div>
                    <img :src="`../static/img/section_transport/cars/hb20s/estart.png`" alt="E-start" class="img-fluid">
                </div>
            </div>
        </div>
        

            
        <!-- <div class="cream-color-zone mt-5 py-4">
                <div class="subtitle">
                    Transmisión automática secuencial de 6 marchas <br> Suspensiones reforzadas y elevadas <br> Sensor de Retroceso <br> Doble airbag <br> Llantas de aleación de 16" <br> Seguridad para niños <br>
                </div>
        
            </div> -->
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                <div class="download-link container my-2 text-right">
                    <a href="../static/catalogs/hb20s.pdf" target="_blank"> Descargar Ficha técnica</a>
                </div>
                <gallery></gallery>
            </div>
        </div>
        
    
</template>

<script>
import TwentyTwenty from 'vue-twentytwenty'
import Price from '@/views/sections/cars/hb20s/components/Price.vue'
//import Slideshow from '@/views/sections/cars/hb20s/components/Slideshow.vue'
import Slide from '@/views/sections/cars/hb20s/components/Slide.vue'
import Gallery from '@/views/sections/cars/hb20s/components/Gallery.vue'
export default {
    components: {
        //Slideshow,
        Slide,
        TwentyTwenty,
        Gallery,
        Price
    }
}
</script>
<style>
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
</style>
