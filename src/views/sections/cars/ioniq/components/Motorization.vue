<template>
    <div class="motorization">
        <div class="container">
            <div class="title">Motorización</div>
            <div class="subtitle">Motor Kappa 1.6 Atkinson GDi</div>
            <div class="longtext ">El motor Kappa 1.6 Atkinson GDi ofrece una mayor eficiencia de combustible con una potencia máxima de 105 ps a 5.700 rpm y un par máximo de 15,0 kg ∙ m a 4,000 rpm.</div>
            <div class="container">
                <div class="row motorization-firsttwoimages">
                    <div class="col-md-12 d-flex justify-content-center">
                        <img :src="`../static/img/section_transport/cars/ioniq/motorization/1.jpg`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
            <div class="subtitle">Motor eléctrico híbrido</div>
            <div class="longtext ">El motor Kappa 1.6 Atkinson GDi ofrece una mayor eficiencia de combustible con una potencia máxima de 105 ps a 5.700 rpm y un par máximo de 15,0 kg ∙ m a 4,000 rpm.</div>
            <div class="container">
                <div class="row motorization-firsttwoimages">
                    <div class="col-md-12 d-flex justify-content-center">
                        <img :src="`../static/img/section_transport/cars/ioniq/motorization/2.jpg`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="motorization-cream-change py-5">
            <div class="container">
                <div class="row cream-image">
                    <div class="col-md-12 d-flex justify-content-center">
                        <div>
                            <img :src="`../static/img/section_transport/cars/ioniq/motorization/3.jpg`" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="title">Sistema de 7 airbags</div>
                <div class="subtitle">El airbag del conductor, el airbag del pasajero, los airbags de 2 lados y los airbags de cortina protegen a los pasajeros en caso de colisión. Conexiones de cuerpo enderezadas e mejoras de instalación de vías de carga.</div>
            </div>
        </div>
        <div class="motorization-last">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center mb-4">
                            <div class="title-moto-last">Almohadilla de aislamiento de tablero de triple capa</div>
                            <div class="subtitle-moto-last">
                                Mejor bloquea el ruido del motor desde la cabina (PET + TPE + PU)
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div>
                                <img :src="`../static/img/section_transport/cars/ioniq/motorization/4.jpg`" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    props: ['car'],
}
</script>

<style>
.car .motorization .motorization-cream-change .title {
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
    color: #000000;
    font-size: 40px;
}

.car .motorization .motorization-cream-change .subtitle {
    font-family: 'hyundai_sans_head_krlight', sans-serif;
    color: #000000;
    font-size: 23px;
}
</style>