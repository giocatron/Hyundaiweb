<template>
    <div class="motorization">
        <div class="title">Motorización</div>
        <div class="subtitle">{{car.motorization_zone.subtitle}}</div>
        <div class="longtext ">{{car.motorization_zone.text}}</div>
        <div class="container">
            <div class="row motorization-firsttwoimages">
                <div class="col-md-6">
                    <img :src="`static/img/section_transport/cars/${car.name}/motorization/1.png`" alt="" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <img :src="`static/img/section_transport/cars/${car.name}/motorization/2.png`" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="title">{{car.motorization_zone.cream_zone.title}}</div>
                <div class="subtitle">{{car.motorization_zone.cream_zone.text}}</div>
                <div class="row cream-image mt-4">
                    <div class="col-md-6">
                        <img :src="`static/img/section_transport/cars/${car.name}/motorization/3.png`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                         <img :src="`static/img/section_transport/cars/${car.name}/motorization/4.png`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="motorization-last">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="">
                            <img :src="`static/img/section_transport/cars/${car.name}/motorization/5.png`" alt="" class="img-fluid">
                        </div>
                        <div class="">
                            <div class="title-moto-last">{{car.motorization_zone.two_zone.section1.title}}</div>
                            <div class="subtitle-moto-last">
                                {{car.motorization_zone.two_zone.section1.text}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`static/img/section_transport/cars/${car.name}/motorization/6.png`" alt="" class="img-fluid">
                        </div>
                        <div>
                            <div class="title-moto-last">
                               {{car.motorization_zone.two_zone.section2.title}}
                            </div>
                            <div class="subtitle-moto-last">
                                 {{car.motorization_zone.two_zone.section2.text}}
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