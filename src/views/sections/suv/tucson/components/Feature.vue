<template>
    <div class="old-tucson">
        <div class="title">Tucson</div>
        <div class="main-image container d-flex justify-content-center">
            <img :src="`static/img/section_transport/suv/tucson/main.png`" alt="Hyundai Accent de costado y atras" class="img-fluid">
        </div>
        <div class="cream-color-zone py-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10">
                        <div class="old-tucson-title">DINÁMICA, PODEROSA y EFICIENTE</div>
                       <ul>
                           <li>Protección lateral contra impactos</li>
                           <li>Freno a disco en las cuatro ruedas</li>
                           <li>Cierre Central</li>
                           <li>Radio con CD/MP3/AUX/USB Bluetooth</li>
                           <li>Volante ajustable</li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
        </div>
        <gallery></gallery>
    </div>
</template>

<script>
import Gallery from '@/views/sections/suv/tucson/components/Gallery.vue'
export default {
    components: {
        Gallery
    }
}
</script>
<style>
    .old-tucson-title{
       font-family: 'hyundai_sans_head_krmedium',sans-serif;
        font-size: 30px;
          color: #000000; 
          margin-bottom: 40px;
          text-align: center;
    }
    .old-tucson ul li{
         font-family: 'hyundai_sans_head_krmedium',sans-serif;
        font-size: 20px;
          color: #000000;
    }
</style>

