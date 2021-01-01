<template>
    <div>
        <div class="container">
            <div class="title">New Tucson</div>
            <div class="subtitle">Fusión de innovación y confort Premium.</div>
            <div class="longtext px-5">
                Es hora de descubrir lo desconocido. Cada marca representa tu crecimiento.
            </div>
            <div class="main-image d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/suv/new_tucson/main.jpeg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
                </div>
            </div>
            <price></price>
            <div class="container">
                <div class="row description-two-bloks mt-5">
                    <div class="col-md-6 box-img-text-first-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/new_tucson/block1.jpeg`" alt="Vehiculo de frente" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                Cumpliendo desafíos
                            </div>
                            <div class="text-block">
                                La vida está llena de consecuencias. Pero con la pareja adecuada, no hay nada que temer.New Tucson hace que sus desafíos diarios sean más fáciles y agradables, sin importar cuán grandes o pequeños sean.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 box-img-text-second-block">
                        <div class="text-center">
                            <img :src="`../static/img/section_transport/suv/new_tucson/block2.jpeg`" alt="Vehiculo de Atras" class="img-fluid">
                        </div>
                        <div class="block-description-box">
                            <div class="title-block">
                                Interiores enfocados
                            </div>
                            <div class="text-block">
                                El espacioso interior de la New Tucson es lo suficientemente grande como para acomodar todas las herramientas que necesita para lograr sus ganancias.
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <div>
                    <img :src="`../static/img/section_transport/suv/new_tucson/cream_main.jpeg`" alt="Foto capas auto" class="img-fluid">
                </div>
                
            </div>
            <div class="subtitle container">
                Añade combustible a tu pasión. Entonces conduzca. Sistema de visualización de vista completa
            </div>
            <div class="longtextcream container">
                El motor de la New Tucson se combinados con transmisiones de alto rendimiento logran maximizar la eficiencia de combustible y la durabilidad. La conducción sensible y poderosa de Tucson le dará el impulso adicional que necesita para completar su desafío.
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/new_tucson.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
            <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/tucson-naftera.pdf" target="_blank"> Descargar Ficha técnica versión Naftera</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/suv/new_tucson/components/Price.vue'
import Gallery from '@/views/sections/suv/new_tucson/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

