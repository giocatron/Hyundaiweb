<template>
    <div>
        <div class="title">New Accent</div>
        <div class="subtitle">Espacioso y con estilo único </div>
        <div class="longtext">
        La estructura de cuerpo reforzada del New Accent ofrece una protección sin igual. Las áreas críticas están reforzadas con acero de resistencia ultra-alta resistencia. 
        </div>
        <div class="main-image">
            <img :src="`../static/img/section_transport/cars/new_accent/main.jpg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
        </div>
        <price></price>
        <div class="container">
            <div class="row description-two-bloks">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/new_accent/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                          Sofisticado
                        </div>
                        <div class="text-block">
                            En el exterior, detalles cromados en la parrilla frontal y alrededor de las luces antiniebla dan al New Accent un estilo propio de su nueva personalidad. 
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/cars/new_accent/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                             Dinámico
                        </div>
                        <div class="text-block">
                             Todos los detalles del diseño exterior irradian tensión, movimiento, y fluidez a pesar de estar quieto, y generan un andar dinámico, agradable, y económico al estar en movimiento.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <div>
                  <img :src="`../static/img/section_transport/cars/new_accent/cream-main.jpg`" alt="Foto capas auto" class="img-fluid">
                </div>
            </div>
            <div class="subtitle">
              Estructura del cuerpo
            </div>
            <div class="longtextcream container">
                La estructura de cuerpo reforzada del New Accent ofrece una protección sin igual. Las áreas críticas están reforzadas con acero de resistencia ultra-alta resistencia para que New Accent cumpla con los estándares de seguridad de choques más actualizados de la Administración Nacional de Tráfico y Seguridad en Carreteras de los Estados Unidos.
            </div>
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/cars/new_accent/cream-block1.jpg`" alt="" class="img-fluid">
                        </div>
                        <div class="cream-block-description-box">
                            <div class="cream-title">
                              Maletera inteligente
                            </div>
                            <div class="cream-longtext">
                              Párese cerca del maletero y en tres segundos la tapa se abre automáticamente sin presionar ningún botón. La función de troncal inteligente se desactiva fácilmente en cualquier momento.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/cars/new_accent/cream-block2.jpg`" alt="" class="img-fluid">
                        </div>
                        <div class="cream-block-description-box">
                            <div class="cream-title">
                                   Asientos traseros plegables
                            </div>
                            <div class="cream-longtext">
                             La versatilidad del New Accent es sorprendente: puede manejar una combinación de tareas de transporte de pasajeros y carga, gracias a los asientos traseros plegables y planos.
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
                <a href="../static/catalogs/new_accent.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/components/Price.vue'
import Gallery from '@/views/sections/cars/new_accent/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

