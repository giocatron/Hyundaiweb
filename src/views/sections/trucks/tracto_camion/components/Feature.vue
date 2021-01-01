<template>
    <div>
        <div class="container">
            <div class="title">Tracto camiones</div>
            <div class="longtext text-left px-5">
                Para conseguir una mayor efectividad de costos en el transporte de larga distancia y listos para asumir cargas pesadas, los tracto camiones Hyundai son los aliados perfectos para la logística de gran volumen.
 <br><br>
             Hyundai ofrece máxima durabilidad y un rendimiento superior con sus camiones para grandes cargas reforzados para responder a las necesidades del cliente. Los modelos HD600L y HD1000 tienen capacidades de arrastre de hasta 50 y 70 toneladas, respectivamente.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                       <img :src="`../static/img/section_transport/trucks/tracto_camion/main.png`" alt="Hyundai tracto_camion de costado y atras" class="img-fluid">
                </div>
            </div>
                <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="cream-block-description-box d-flex justify-content-center align-items-center">
                            <div><span class="first-font"> HD600L:   </span> <span class="second-font">  50.000 Kg de arrastre. </span><span class="first-font"> HD1000:    </span> <span class="second-font"> 70.000 Kg de arrastre.</span></div>
    
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/tracto_camion.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Gallery from '@/views/sections/trucks/tracto_camion/components/Gallery.vue'
import Price from '@/views/sections/trucks/tracto_camion/components/Price.vue'
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

