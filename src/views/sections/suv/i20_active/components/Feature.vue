<template>
    <div>
        <div class="container">
            <div class="title pt-0">Hyundai i20 Active</div>
            <div class="longtext">
               Con la filosofía de diseño de "Fluidic Sculpture 2.0" de Hyundai, reforzada por los faros estirados dinámicamente y el contorno preciso de la superficie, el i20 destaca por su notable diseño. 
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                <img :src="`static/img/section_transport/suv/i20_active/main.jpg`" alt="Hyundai i20 Active" class="img-fluid">
                </div>
            </div>
            <price></price>
        </div>
        <div class="cream-color-zone  py-4 mt-5 h-100">
            <div class="container d-flex justify-content-center align-items-center">
                <div class="row">
                    <div class="col-md-6  text-right">
                        Motor 1.4 Naftero <br> Automático de 4 velocidades y mecánico de 6   <br> Comando al volante
                    </div>
                    <div class="col-md-6  text-left">
                        Doble airbag <br> Llantas de aleación de 16" <br> Seguridad para niños <br>
                    </div>
                </div>
            </div>
    
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/i20.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/components/Price.vue'
import Gallery from '@/views/sections/suv/i20_active/components/Gallery.vue'
export default {
    components: {
        Gallery,
         Price
    }
}
</script>

