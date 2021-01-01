<template>
<div>
    <div class="container">
        <div class="title">Santa Fe</div>
        <div class="subtitle">Robusto en estilo</div>
        <div class="longtext px-5">
       El concepto Storm Edge de Santa Fe representa un diseño audaz y robusto que indica el poder y la delicadeza de la naturaleza durante la creación de la tormenta en el cielo.       
        </div>
        <div class="main-image d-flex justify-content-center">
            <img :src="`static/img/section_transport/suv/santa_fe/main.jpeg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
        </div>
        <div class="container">
            <div class="row description-two-bloks mt-5">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/suv/santa_fe/block1.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                            Audaz pero delicada,
voluminosa pero equilibrada 
                        </div>
                     
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/suv/santa_fe/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                             Sólido y espacioso,
energético y cuidadoso.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
       </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <img :src="`static/img/section_transport/suv/santa_fe/cream_main.jpeg`" alt="Foto capas auto" class="img-fluid">
            </div>
            <div class="subtitle">
                Sistema de visualización de vista completa
            </div>
            <div class="longtextcream container">
           Una combinación perfectamente combinada de un eficiente motor de gasolina, un motor eléctrico y una batería de polímero de ión de litio hace que la conducción no solo sea sostenible y económica, sino también divertida.
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/santafe.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>

</template>

<script>
import Gallery from '@/views/sections/suv/santa_fe/components/Gallery.vue'
export default {
    components: {
        Gallery
    }
}
</script>

