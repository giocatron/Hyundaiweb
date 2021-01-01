<template>
    <div>
        <div class="container">
            <div class="title">Cargo</div>
            <div class="subtitle">Un paso adelante</div>
            <div class="longtext text-left px-5">
                Los camiones Hyundai Cargo complementan las ya sobresalientes características de las versiones con chasis y cabina agregando faldones laterales y traseros fácilmente rebatibles para subir y bajar mercaderías con facilidad. <br><br> Como cada
                producto de la marca, están equipados con un noble y económico. Asimismo, los puestos de conducción están optimizados para minimizar el cansancio.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/trucks/cargo/main.png`" alt="Hyundai Cargo de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
    
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div class="cream-block-description-box">
                            <div><span class="cream-title">HD65 Cargo:</span> <span class="cream-longtext"> 4.5 toneladas</span></div>
                            <div><span class="cream-title">HD72 Cargo: </span> <span class="cream-longtext"> 5.5 toneladas</span></div>
    
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/trucks/cargo/creme.jpg`" alt="" class="img-fluid">
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/cargo.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/components/Price.vue'
import Gallery from '@/views/sections/trucks/cargo/components/Gallery.vue'
export default {
    components: {
        Gallery,
         Price
    }
}
</script>

