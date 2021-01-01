<template>
    <div>
        <div class="container">
            <div class="title">Camión Hormigonero</div>
            <div class="longtext text-left px-5">
                El Hyundai HD270 Mixer es ideal para el transporte de hormigón en espacios reducidos. Su tanque de agua admite hasta 350 litros con un agitamiento de 7 m3 y un ángulo de pendiente de 16º.
                <br><br>
                Su motor de alto rendimiento de 12,9 litros y 380 caballos de fuerza, su caja mecánica de 6 velocidades y su freno auxilia tripo Jacob aseguran su óptimo desempeño y de forma segura.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                                    <img :src="`static/img/section_transport/trucks/mezclador/main.png`" alt="Hyundai mezclador de costado y atras" class="img-fluid">
                </div>
            </div>
              <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row ">
                    <div class="col-md-12">
                        <div class="cream-block-description-box d-flex justify-content-center">
                            <div><span class="first-font"> HD270 Mixer: </span> <span class="second-font">  7 m3 </span></div>                  
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/mezclador.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/mezclador/components/Price.vue'
import Gallery from '@/views/sections/trucks/mezclador/components/Gallery.vue'
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

