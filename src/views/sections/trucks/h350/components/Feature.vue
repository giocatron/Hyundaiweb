<template>
    <div>
        <div class="container">
            <div class="title">H350 Van  </div>
            <div class="longtext text-left px-5">
                El Hyundai H350 Van está diseñado como una eficiente y altamente confiable herramienta de trabajo. 
                Con gran espacio interior, su capacidad de carga es de 13 m3 en el furgón (5 europallets) o hasta 1.500 Kg y otros 1.500 Kg más considerando la posibilidad de arrastre. 

            </div>
            <div class="longtext text-left px-5">
               Con una garantía de 2 años o 100.000 kilómetros y el mejor precio de la categoría, el Hyundai H350 Van potencia la productividad con una excelente relación de costo / beneficio. 
            </div>
            <br>
            <!--div class="title">H350 Bus </div>
            <div class="longtext text-left px-5">
               El Hyundai H350 Bus está concebido para brindar servicios de movilidad de personas en trayectos urbanos y de media y larga distancia, con todos los elementos de seguridad y confort para 16 y ahora también 18 pasajeros. Espacios de almacenamiento para equipajes pequeños también fueron incorporados gracias a sus generosas dimensiones. 
            </div>
            <div class="longtext text-left px-5">
               Su motor turbo diésel de 150 hp asegura la potencia durante todo el trayecto. La garantía de 2 años o 100.000 kilómetros termina por cerrar el círculo de eficiencia que tu empresa necesita. 
            </div>-->
            
           <!-- <div class="main-image d-flex justify-content-center">
                <div>
                <img :src="`../static/img/section_transport/trucks/h350/main.png`" alt="Hyundai h350 de costado y atras" class="img-fluid">
                    </div>
            </div>-->
               <price></price>
        </div>
        <div class="cream-color-zone py-5">
    
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div class="cream-block-description-box">
                            <div><span class="first-font"> H350 Van: </span> <span class="second-font">  13 m3. / 1.500Kg</span></div>
                            <!--<div><span class="first-font">  H350 Bus:  </span> <span class="second-font">  16 pasajeros + 1 conductor</span></div>-->
                            <!--div><span class="first-font"> H350 Bus:  </span> <span class="second-font">   H350 Bus: 18 pasajeros + 1 conductor</span></div>-->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/trucks/h350/creme.jpeg`" alt="" class="img-fluid">
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
    
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
                 <div class="download-link container my-2 text-right">
                <a href="../static/catalogs/h350.pdf" target="_blank"> Descargar Ficha técnica</a>
            </div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Price from '@/views/sections/trucks/h350/components/Price.vue'
import Gallery from '@/views/sections/trucks/h350/components/Gallery.vue'
export default {
    components: {
        Gallery,
         Price
    }
}
</script>

<style>
.first-font {
    font-family: 'hyundai_sans_head_krmedium';
    font-size: 20px;
}

.second-font {
    font-family: 'hyundai_sans_head_krlight';
    font-size: 20px;
}
</style>

