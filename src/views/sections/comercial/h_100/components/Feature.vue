<template>
    <div>
        <div class="container">
            <div class="title">H-100</div>
            <div class="subtitle">Un paso adelante</div>
            <div class="longtext">
                H-100 establece el nuevo estándar para camiones ligeros con una mayor flexibilidad y versatilidad para ayudar a satisfacer sus necesidades comerciales diarias.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/comercial/h_100/main.jpeg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
            </div>
             <price></price>
            <div class="container">
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/comercial/h_100/block1.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                Bien refinado
                            </div>
                            <div class="text-block">
                                H-100 tiene un perfil elegante y una calidad de construcción sólida para proporcionar una medida igual de estilo y estabilidad.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/comercial/h_100/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                Profesional
                            </div>
                            <div class="text-block">
                                Diseñado para operar en las condiciones más difíciles, el H-100 es una opción segura y puede configurarse de forma única para adaptarse mejor a sus necesidades.
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/h100.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/comercial/h_100/components/Price.vue'
import Gallery from '@/views/sections/comercial/h_100/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

