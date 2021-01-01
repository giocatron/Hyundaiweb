<template>
<div>
    <div class="container">
        <div class="title">All New Santa Fe</div>
        <div class="subtitle">La SUV inteligente, perfecta para la familia.</div>
        <div class="longtext">
        Los autos familiares no necesitan ser aburridos. 
Una amplia parrilla cromada en cascada y llantas de aleación de 19 pulgadas conforman el nuevo diseño único y audaz de la SUV. Las luces compuestas también le dan al automóvil un atractivo de alta tecnología, listo para aventuras familiares.
        </div>
        <div class="main-image d-flex justify-content-center">
            <div>
                  <img :src="`../static/img/section_transport/suv/all_new_santa_fe/main.jpg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
            </div>      
        </div>
         <price></price>
        <div class="container">
            <div class="row description-two-bloks mt-5">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/suv/all_new_santa_fe/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                        Alerta de ocupante trasero (ROA)
                        </div>
                        <div class="text-block">
                            La Alerta de Ocupante Trasero detecta el movimiento en los asientos traseros y le recuerda al conductor que hay ocupantes traseros con una alerta en el grupo. 
Si el sistema detecta movimiento después de que el conductor haya abandonado el automóvil y lo haya bloqueado, se activará una alarma sonora.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`../static/img/section_transport/suv/all_new_santa_fe/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                             Asistencia de salida segura (SEA)
                        </div>
                        <div class="text-block">
                             Mantenga a su familia segura con la asistencia de salida segura. El sistema detecta los vehículos que se aproximan por la parte trasera y mantiene activo el bloqueo para niños, evitando que los pasajeros salgan. Cuando los vehículos han pasado, con solo presionar un botón se desbloquea la puerta para una salida segura.
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
       </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main">
              <div class="d-flex justify-content-center">
                  <div>
                    <img :src="`../static/img/section_transport/suv/all_new_santa_fe/cream_main.jpg`" alt="Foto capas auto" class="img-fluid">
                    </div>
              </div>
            </div>
            <div class="subtitle">
            Sistema de 8 airbags
            </div>
            <div class="longtextcream container">
             Un sistema de 8 airbags con airbags frontales y laterales y airbags de cortina ofrece una amplia protección contra colisiones. Los airbags frontales avanzados determinan cuándo y cómo desplegar la presión en un accidente al detectar la posición del ocupante, el uso del cinturón de seguridad y la gravedad del choque.
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
import Price from '@/views/sections/suv/all_new_santa_fe/components/Price.vue'
import Gallery from '@/views/sections/suv/all_new_santa_fe/components/Gallery.vue'
export default {
    components: {
        Gallery,
        Price
    }
}
</script>

