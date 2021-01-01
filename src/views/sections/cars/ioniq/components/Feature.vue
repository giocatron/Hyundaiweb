<template>
    <div>
        <div class="title">IONIQ Hybrid</div>
        <div class="subtitle">Economía y Confort</div>
        <div class="longtext container">
            Los componentes impresionantes y de alto rendimiento del cuerpo aerodinámico del híbrido IONIQ están diseñados de manera ideal para trabajar juntos a la perfección.
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-7">
                    <img :src="`../static/img/section_transport/cars/ioniq/main.jpg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
                <div class="col-md-5">
                    <price></price>
                </div>
            </div>
            
        </div>
        <div class="main-image container">
            
        </div>
        <!--<price></price>-->
        <div class="container">
            <div class="row description-two-bloks">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/ioniq/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box-ionic">
                        <div class="title-block">
                            Aerodinámico
                        </div>
                        <div class="text-block">
                            Con un coeficiente de arrastre (Cd) de solo 0.24, IONIQ no solo se ve atractivo sino que ofrece una conducción aún más suave.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/ioniq/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box-ionic">
                        <div class="title-block">
                            Dinámico y divertido de conducir.
                        </div>
                        <div class="text-block">
                            La sensible transmisión de doble embrague (DCT) de 6 velocidades permite un cambio de marchas más rápido y preciso.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class=" py-5">
            <div class="cream-main d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/cars/ioniq/cream_main.jpg`" alt="Foto capas auto" class="img-fluid">
                </div>
            </div>
            <div class="subtitle">
                El eficiente sistema híbrido
            </div>
            <div class="longtextcream container">
                Una combinación perfectamente combinada de un eficiente motor de gasolina, un motor eléctrico y una batería de polímero de ión de litio hace que la conducción no solo sea sostenible y económica, sino también divertida.
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/ionic.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
    
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/cars/ioniq/components/Price.vue'
import Gallery from '@/views/sections/cars/ioniq/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

<style>
@media (max-width: 991.98px) {
    .block-description-box-ionic {
        margin-top: 19px;
    }
}

@media (min-width: 992px) {
    .block-description-box-ionic {
        margin-top: 19px;
        max-width: 574px;
        margin-bottom: 20px;
        min-height: 200px;
        display: grid;
        grid-template-columns: 574px;
        grid-template-rows: 150px 200px;
    }
}
</style>

