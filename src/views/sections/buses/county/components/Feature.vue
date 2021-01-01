<template>
    <div>
        <div class="container">
            <div class="title">County</div>
            <div class="longtext">
                Hyundai desarrolló buses de media distancia para satisfacer los requerimientos de transporte de empresas de todo tipo. El County ofrece asientos reclinables en sus 28 plazas y todas las amenidades para viajes urbanos e inter-urbanos confortables.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/buses/county/main.png`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
    
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
         
            <div class="title">Galería</div>
               <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/county.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/buses/county/components/Price.vue'
import Gallery from '@/views/sections/buses/county/components/Gallery.vue'
export default {
    components: {
        Gallery,
         Price
    }
}
</script>

