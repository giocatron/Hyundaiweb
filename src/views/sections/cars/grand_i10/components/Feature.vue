<template>
    <div>
        <div class="title">Grand i10</div>
        <div class="main-image container d-flex justify-content-center">
            <div>
                <img :src="`static/img/section_transport/cars/grand_i10/main.jpg`" alt="Hyundai grand_i10 de costado y atras" class="img-fluid">
            </div>
        </div>
        <price></price>
        <div class="container">
            <div class="row description-two-bloks">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/grand_i10/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block text-right">
                            Característica
                        </div>
                        <div class="text-block text-right">
                            - Motor 1.0 <br> - Dirección asistida. <br> - Caja: AT – MT de 5 velocidades. <br> - AA: Atmosférico. <br> - Suspensión: Mcpherson.<br>
    
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/grand_i10/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                            Exterior
                        </div>
                        <div class="text-block">
                            - El vehículo ideal para la ciudad. <br> - Pequeño y confortable. <br> - Potente y económico. <br> - Excelente maniobrabilidad en espacios reducidos. <br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <div>
                    <img :src="`static/img/section_transport/cars/grand_i10/cream-main.jpg`" alt="Foto capas auto" class="img-fluid">
                </div>
            </div>
            <div class="subtitle">
                Premium y espacioso
            </div>
            <div class="longtextcream container">
                El Hyundai Grand i10, repleto de funciones, responde a todas sus expectativas. El color, las texturas y la forma de la cabina le otorgan un atractivo superior y espacioso que hará que cualquier automóvil grande sea envidioso.
            </div>
    
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/grand_i10.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/cars/grand_i10/components/Price.vue'
import Gallery from '@/views/sections/cars/grand_i10/components/Gallery.vue'
export default {
    components: {
           Price,
        Gallery
    }
}
</script>

