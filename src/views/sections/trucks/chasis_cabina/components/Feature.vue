<template>
    <div>
        <div class="container">
            <div class="title">Camiones Chasis Cabina</div>
            <div class="subtitle">Un paso adelante</div>
            <div class="longtext text-left px-5">
                Los camiones Hyundai con chasis y cabina son lo más potentes y robustos. Pueden transportar todo tipo de cargas con capacidades de entre 2.000 y 12.000 Kg y con gran economía de combustible. <br><br> Tu compañero confiable, seguro y perfecto de negocios es un camión Hyundai, con la mejor garantía del mercado, de hasta 3 años sin límite de kilometraje, más que cualquier otra marca.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/trucks/chasis_cabina/main.png`" alt="Hyundai chasis_cabina de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div class="cream-block-description-box">
                            <div><span class="first-font"> HD35 L: </span> <span class="second-font"> ２.000 Kilos </span></div>
                            <div><span class="first-font"> HD40: </span> <span class="second-font"> 2.000 Kilos </span></div>
                            <div><span class="first-font"> HD45: </span> <span class="second-font"> 2.500 Kilos </span></div>
                            <div><span class="first-font">  HD55 S: </span> <span class="second-font">  3.500 Kiloss </span></div>
                             <div><span class="first-font">   HD60: </span> <span class="second-font">   4.000 Kilos</span></div>
                            <div><span class="first-font">   HD65: </span> <span class="second-font">   4.5000 Kilos</span></div>
                            <div><span class="first-font">    HD72:</span> <span class="second-font">       5.5000 Kilos</span></div>
                              <div><span class="first-font">     HD78:</span> <span class="second-font">        6.500 Kilos</span></div>
                            <div><span class="first-font">     HD78 GT:</span> <span class="second-font">        6.500 Kilos</span></div>
                            <div><span class="first-font">     EX9: </span> <span class="second-font">       7.000 Kilos</span></div>
                            <div><span class="first-font">    HD160 Max: </span> <span class="second-font">      12.000 Kilos</span></div>
    
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/trucks/chasis_cabina/creme.jpg`" alt="" class="img-fluid">
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/chasis_cabina.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/chasis_cabina/components/Price.vue'
import Gallery from '@/views/sections/trucks/chasis_cabina/components/Gallery.vue'
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

