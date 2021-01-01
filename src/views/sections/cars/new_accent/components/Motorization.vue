<template>
    <div class="motorization">
        <div class="title">Motorización</div>
        <div class="subtitle">Motor de gasolina de 1.6 MPi</div>
        <div class="longtext ">El motor de gasolina de 1.6 MPi es capaz de un máximo de 123.0 ps a 6.300 rpm y 15.4 kg · m de torque a 4.850 rpm.</div>
        <div class="container">
            <div class="row motorization-firsttwoimages">
                <div class="col-md-6">
                    <img :src="`../static/img/section_transport/cars/new_accent/motorization/1.png`" alt="" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <img :src="`../static/img/section_transport/cars/new_accent/motorization/2.png`" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="title">Motor de gasolina de 1.4 MPi</div>
                <div class="subtitle">El motor de gasolina de 1.4 MPi es capaz de un máximo de 100.0 ps a 6.000 rpm y un torque de 13.5 kg · m a 4.000 rpm.</div>
                <div class="row cream-image mt-4">
                    <div class="col-md-6">
                        <img :src="`../static/img/section_transport/cars/new_accent/motorization/3.png`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                         <img :src="`../static/img/section_transport/cars/new_accent/motorization/4.png`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="motorization-last">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="">
                            <img :src="`../static/img/section_transport/cars/new_accent/motorization/5.png`" alt="" class="img-fluid">
                        </div>
                        <div class="">
                            <div class="title-moto-last">Transmisión automática de 6 velocidades</div>
                            <div class="subtitle-moto-last">
                               Apenas notará que esta caja de cambios de 6 velocidades está haciendo su trabajo. El cambio automático es rápido, suave y silencioso, pero también muy conveniente. Su diseño eficiente ayuda a maximizar la economía de combustible.
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`../static/img/section_transport/cars/new_accent/motorization/6.png`" alt="" class="img-fluid">
                        </div>
                        <div>
                            <div class="title-moto-last">
                               Transmisión manual de 6 velocidades
                            </div>
                            <div class="subtitle-moto-last">
                                Para los conductores que ponen la economía por encima de todo, el manual de 6 velocidades es la elección perfecta. El funcionamiento del embrague es fácil y predecible y, al pasar por las puertas, hay una sensación agradable y precisa.
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
      props:['car'],
}
</script>