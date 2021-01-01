<template>
    <div>
        <div class="container">
            <div class="title">Camiones con Volquete</div>
            <div class="longtext text-left px-5">
               Los camiones Volquetes de la serie HD de Hyundai traen tolvas incorporadas de origen para descarga automática de materiales. Las versiones con tracción 4x2 y 6x4 tienen cachambas con capacidades de 6 y 15 m3.
 <br><br>
            Equipados con grandes motores, transmisiones y sistemas de frenos de última tecnología, los camiones Dump de Hyundai son las mejores alternativas del mercado para aplicaciones de este tipo con importantes ahorros en costos operacionales.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                <img :src="`../static/img/section_transport/trucks/volquete/main.png`" alt="Hyundai volquete de costado y atras" class="img-fluid">
                </div>
            </div>
              <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cream-block-description-box d-flex justify-content-center align-items-center">
                            <div><span class="first-font"> HD160 Volquete:  </span> <span class="second-font">  Tolva de 6 m3 </span><span class="first-font"> HD270 Volquete:   </span> <span class="second-font">  Tolva de 15 m3</span></div>
    
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
               <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/volquete.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/volquete/components/Price.vue'
import Gallery from '@/views/sections/trucks/volquete/components/Gallery.vue'
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

