<template>
<div>
    <div class="container">
        <div class="title">El nuevo H-1</div>
        <div class="subtitle">Moderno y poderoso</div>
        <div class="longtext">
     El nuevo H-1 agrega una dimensión rica y distintiva a su vida, con un diseño lujoso y sofisticado que combina elegancia con aventura.
        </div>
        <div class="main-image d-flex justify-content-center">
            <div>
            <img :src="`../static/img/section_transport/comercial/h1/main.jpeg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
            </div>
        </div>
          <price></price>
        <div class="container">
            <div class="row description-two-bloks mt-5">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/comercial/h1/block1.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                   Quienquiera que seas,
donde sea que vayas 
                        </div>
                        <div class="text-block">
                        El H-1 Urban ofrece numerosas ventajas como un vagón de pasajeros de 12/9 asientos. Para una amplia gama de aplicaciones, desde negocios hasta placer, hay muchas variaciones de asientos disponibles. La comodidad del pasajero está asegurada por una gama de funciones y dispositivos de conveniencia.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/comercial/h1/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                            Luciendo bien,
viviendo aún mejor 
                        </div>
                        <div class="text-block">
                           Las camionetas H-1 ofrecen estilo y gran versatilidad. Una furgoneta con ventana de 5 plazas ofrece mucho espacio para el equipaje, mientras que una furgoneta con 3 plazas permite espacio para hasta 800 kg de carga.
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
                <a href="../static/catalogs/h1.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>

</template>

<script>
import Price from '@/views/sections/comercial/h1/components/Price.vue'
import Gallery from '@/views/sections/comercial/h1/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

