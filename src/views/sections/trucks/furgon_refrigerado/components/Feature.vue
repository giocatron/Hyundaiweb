<template>
    <div>
        <div class="container">
            <div class="title">Camiones con Furgón Refrigerado</div>
            <div class="longtext text-left px-5">
                Los camiones Hyundai con chasis y cabina son equipados también de fábrica con furgones refrigerados con enfriamiento de hasta los -25 grados centígrados, ideales para movilizar productos alimenticios y de otro tipo que precisen mantener la cadena de frío
                desde su producción hasta el destino final.
                <br><br> Se ofrecen con capacidades de carga de entre 11 y 24 m3 y con recubrimiento interior de poliuretano. Garantía de hasta 3 años sin límite de kilometraje.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/trucks/furgon_refrigerado/main.png`" alt="Hyundai furgon_refrigerado de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div class="cream-block-description-box">
                            
                            <div><span class="first-font"> HD55 S: </span> <span class="second-font">  12 m3</span></div>
                            
                            <div><span class="first-font"> HD72:  </span> <span class="second-font"> 17 m3</span></div>
                           
                            <div><span class="first-font"> HD120:   </span> <span class="second-font"> 24 m3</span></div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/trucks/furgon_refrigerado/creme.png`" alt="" class="img-fluid">
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/furgon_refrigerado.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/furgon_refrigerado/components/Price.vue'
import Gallery from '@/views/sections/trucks/furgon_refrigerado/components/Gallery.vue'
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

