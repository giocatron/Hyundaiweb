<template>
    <div class="old-accent">
        <div class="title">Accent</div>
        <div class="longtext container">
            El Accent posee capacidades excepcionales para usarlo con diferentes objetivos. Su gran maletera, de 465 litros, posee asientos rebatibles que permiten una importante capacidad de carga extra para usos múltiples.
        </div>
        <div class="main-image container">
            <img :src="`static/img/section_transport/cars/accent/main.png`" alt="Hyundai Accent de costado y atras" class="img-fluid">
        </div>
        <price></price>
        <div class="container">
            <div class="row description-two-bloks">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/accent/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box w-100">
                        <div class="title-block">
                            Interior
                        </div>
                        <div class="text-block-accent">
                            <ul>
                                <li>
                                    Llave inteligente
                                </li>
                                <li>
                                    Chasis reforzado
                                </li>
                                <li>
                                    Computadora de abordo
                                </li>
                                <li>
                                    Cámara trasera
                                </li>
                                <li>
                                    Sensores de estacionamiento
                                </li>
                                <li>
                                    Air Bags delanteros
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block w-100">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/accent/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                            Características
                        </div>
                        <div class="text-block-accent">
                            <ul>
                                <li>
                                    Motor: 1.4 Kappa
                                </li>
                                <li>
                                    Transmisión: 6 velocidades AT
                                </li>
                                <li>
                                    Dirección: Con asistencia electrónica
                                </li>
                                <li>
                                    Combustible: Gasolina
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="cream-color-zone py-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-4">
                            <ul>
                                <li>Chasis reforzado</li>
                                <li>Computadora d abordo</li>
                                <li>Busca Huellas</li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li>Bluetooth</li>
                                <li>Controles al volante</li>
                                <li>Cierre centralizado de puertas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> -->
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/accent.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/components/Price.vue'
import Gallery from '@/views/sections/cars/accent/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

<style>
.old-accent ul li {
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
    font-size: 20px;
    color: #000000;
}

.text-block-accent ul li {
    font-family: 'hyundai_sans_head_krlight', sans-serif;
    color: #000000;
    font-size: 20px;
}
</style>

