<template>
    <div>
        <div class="container">
            <div class="title">Xcient Volquete / Tracto</div>
            <div class="longtext text-left px-5">
                Los Hyundai Xcient Volquete y Tracto, representan una nueva generación de camiones que adoptan un look aerodinámico y moderno. En ambas versiones, su diseño con un parabrisas inclinado y una expansión del volumen frontal, le otorgan un estilo muy atractivo con estética sofisticada y de vanguardia. <br><br>
                El confort de marcha, el enorme habitáculo y su elevado nivel de equipamiento, lo convierten en el camión que el conductor elegirá para grandes distancias. 
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/trucks/nuevo_xcient/main.png`" alt="Hyundai nuevo_xcient de costado y atras" class="img-fluid">
               </div>
            </div>
             <price></price>
        </div>
        <div class="cream-color-zone py-5">
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div class="cream-block-description-box">
                          - Xcient Volquete: Tolva de 20 m3<br>
                        - Xcient Tracto: Hasta 70.000 Kg de arrastre
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/trucks/nuevo_xcient/creme.jpg`" alt="" class="img-fluid">
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/xcient.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/nuevo_xcient/components/Price.vue'
import Gallery from '@/views/sections/trucks/nuevo_xcient/components/Gallery.vue'
export default {
    components: {
        Gallery,
           Price
    }
}
</script>

<style>
.first-font {
    font-family: 'hyundai_sans_head_krmedium';
    font-size: 20px;
}

.second-font {
    font-family: 'hyundai_sans_head_krlight';
    font-size: 20px;
}
</style>

