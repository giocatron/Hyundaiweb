<template>
    <div>
        <div class="container">
            <div class="title">Creta</div>
            <div class="subtitle">Una armonía entre lo visible y lo invisible.</div>
            <div class="longtext">
                Un elegante diseño exterior permite que brille la belleza interior. Experimenta una nueva sensación de conducción.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/suv/creta/main.png`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
            <div class="container">
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/creta/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box-creta">
                            <div class="title-block">
                                Sistema de asistencia de estacionamiento trasero
                            </div>
                            <div class="text-block">
                                Sistema de asistencia de estacionamiento trasero con pantalla de la cámara de visión trasera en AVN y directrices de adaptación de la dirección para ayudar a estacionar en condiciones difíciles.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/creta/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box-creta">
                            <div class="title-block">
                                Escultura fluídica 2.0
                            </div>
                            <div class="text-block">
                                El diseño simplificado cuenta con detalles y gráficos refinados en un cuerpo moderno con una parrilla de radiador y faros de proyector únicos. El objetivo no es solo la belleza, sino la confianza.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/creta/block3.jpg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box-creta">
                            <div class="title-block">
                                Impresionante por dentro
                            </div>
                            <div class="text-block">
                                El tablero de instrumentos, los botones convenientes y la dirección fácil de agarrar son como un horizonte. Maravillosamente distribuido y acogedor.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/creta/block4.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box-creta">
                            <div class="title-block">
                                Acero avanzado de alta resistencia (AHSS)
                            </div>
                            <div class="text-block">
                                Con la aplicación avanzada de acero de alta resistencia (AHSS), obtiene una mayor resistencia del cuerpo y durabilidad a la corrosión. Cuerpo más ligero para un mejor kilometraje.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="cream-color-zone py-5">
                    <div class="cream-main d-flex justify-content-center">
                        <img :src="`../static/img/section_transport/suv/creta/cream_main.jpg`" alt="Foto capas auto" class="img-fluid">
                    </div>
                    <div class="subtitle">
                    6 bolsas de aire
                    </div>
                    <div class="longtextcream container">
                    Seis bolsas de aire revelan el enfoque inflexible de Hyundai para la ingeniería de seguridad. Las bolsas de aire delanteras dobles, las bolsas de aire de impacto lateral y las cortinas laterales trabajan juntas con los cinturones de seguridad y el sistema de pretensión disponible para llevar la seguridad del vehículo a un nivel paralelo.
                    </div>
                </div> -->
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/creta.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/suv/creta/components/Price.vue'
import Gallery from '@/views/sections/suv/creta/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

<style>
@media (min-width: 992px) {
    .block-description-box-creta {
        margin-top: 19px;
        max-width: 550px;
        margin-bottom: 20px;
        min-height: 200px;
        display: grid;
        grid-template-columns: 574px;
        grid-template-rows: 150px 200px;
    }
}

@media (max-width: 991.98px) {
    .block-description-box-creta {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>

