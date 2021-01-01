<template>
    <div class="motorization">
        <div class="container">
            <div class="title">Motorización</div>
            <div class="subtitle">Motor diesel 2.0 CRDi</div>
            <div class="longtext px-5">Un máximo de 185 pps a 4,000 rpm y 41kg ∙ m de torque a 1,750 ~ 2,750 rpm.</div>
            <div class="container">
                <div class="row motorization-firsttwoimages">
                    <div class="col-md-6 d-flex justify-content-center px-5">
                        <img :src="`../static/img/section_transport/suv/tucson/motorization/1.jpg`" alt="" class="img-fluid">
                    </div>
                     <div class="col-md-6 d-flex justify-content-center px-5">
                        <img :src="`../static/img/section_transport/suv/tucson/motorization/2.jpg`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
    
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="row cream-image mt-4">
                    <div class="col-md-6 ">
                        <img :src="`../static/img/section_transport/suv/tucson/motorization/3.jpg`" alt="" class="img-fluid">
                         <div class="title text-center">Transmisión automática de 6 velocidades</div>
                    </div>
                    <div class="col-md-6">
                          <img :src="`../static/img/section_transport/suv/tucson/motorization/4.jpg`" alt="" class="img-fluid">
                         <div class="title text-center">Transmisión automática de 6 velocidades</div>
                    </div>
                </div>
    
            </div>
        </div>
        <div class="motorization-last">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center mb-4">
                                <div class="title-moto-last">Seleccione el modo de conducción</div>
                            <div class="subtitle-moto-last mb-3">
                               Un botón en la consola central ofrece convenientemente una opción de 3 modos de manejo (normal, deportivo y ecológico) para adaptarse al estado de ánimo del conductor y las condiciones de manejo.
                            </div>
                            <div class="d-flex justify-content-center">
                                <img :src="`../static/img/section_transport/suv/tucson/motorization/5.jpg`" alt="" class="img-fluid">
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