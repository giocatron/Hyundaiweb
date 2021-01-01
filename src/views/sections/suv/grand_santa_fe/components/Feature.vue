<template>
    <div>
        <div class="container">
            <div class="title">Grand Santa Fe</div>
            <div class="subtitle">Concepto Robusto.</div>
            <div class="longtext">
                La presencia dominante del diseño optimizado de Hyundai con una superficie trasera elegante la diferencia de otras SUV.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`static/img/section_transport/suv/grand_santa_fe/main.jpeg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
            <div class="container">
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/grand_santa_fe/block1.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                7 asientos
                            </div>
                            <div class="text-block">
                                Cuando se trata de una distribución de asientos increíblemente flexible y práctica, Grand Santa Fe sabe cómo. Elija el estándar de 7 plazas para un interior espacioso en una proporción de 4: 2: 4 o un opcional de 6 plazas para mayor comodidad con una
                                configuración de asiento aislada. De cualquier manera, los asientos de diseño ergonómico de Grand Santa Fe garantizan la máxima comodidad y espacio dinámico para todos.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/grand_santa_fe/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                Bastidores de techo
                            </div>
                            <div class="text-block">
                                Práctico y estéticamente atractivo, el diseño de tipo de portaequipajes complementa la elegante línea superior de Grand Santa Fe.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/grand_santa_fe/block3.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box-gran-santafe">
                            <div class="title-block">
                                Sistema antibloqueo de frenos (ABS)
                            </div>
                            <div class="text-block">
                                Ya no te preocupes si tus frenos se bloquean o patinan. El sistema de frenos antibloqueo (ABS) permite un mejor control y manejo al compensar el exceso de frenado.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`static/img/section_transport/suv/grand_santa_fe/block4.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box-gran-santafe">
                            <div class="title-block">
                                Control electrónico de estabilidad (ESC) y Gestión de estabilidad del vehículo (VSM).
                            </div>
                            <div class="text-block">
                                El control electrónico de estabilidad (ESC) confiable mantiene a todas las ruedas firmes en cada curva junto con la gestión de estabilidad del vehículo (VSM) que optimiza la estabilidad direccional al controlar la dirección asistida impulsada por motor
                                (MDPS) y los frenos en cada rueda.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <div>
                    <img :src="`static/img/section_transport/suv/grand_santa_fe/cream_main.jpeg`" alt="Foto capas auto" class="img-fluid">
                </div>
            </div>
            <div class="subtitle">
                Sistema de 1o airbags
            </div>
            <div class="longtextcream container">
                El sistema completo de 10 bolsas de aire está diseñado para ofrecer la máxima defensa contra lesiones asegurando la protección tanto del conductor como de los pasajeros con las bolsas de aire delanteras y laterales de cortina.
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/grand_santa_fe.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/components/Price.vue'
import Gallery from '@/views/sections/suv/grand_santa_fe/components/Gallery.vue'
export default {
    components: {
        Price,
        Gallery
    }
}
</script>

<style>
@media (min-width: 992px) {
    .block-description-box-gran-santafe {
        margin-top: 19px;
        max-width: 550px;
        margin-bottom: 20px;
        min-height: 200px;
        display: grid;
        grid-template-columns: 574px;
        grid-template-rows: 250px 200px;
    }
}

@media (max-width: 991px) {
    .block-description-box-gran-santafe {
        margin-top: 20px;
        margin-bottom: 20px;
    }
}
</style>

