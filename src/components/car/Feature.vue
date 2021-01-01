<template>
    <div>
        <div class="title">{{car.title}}</div>
        <div class="subtitle">{{car.subtitle}}</div>
        <div class="longtext">
          {{car.text}}
        </div>
        <div class="main-image">
            <img :src="`static/img/section_transport/cars/${car.name}/main.jpg`" alt="Hyundai Accent de costado y atras" class="img-fluid">
        </div>
        <div class="container">
            <div class="row description-two-bloks">
                <div class="col-md-6 box-img-text-first-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/${car.name}/block1.jpg`" alt="Vehiculo de frente" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                          {{car.two_section.section1.title}} 
                        </div>
                        <div class="text-block">
                            {{car.two_section.section1.text}} 
                        </div>
                    </div>
                </div>
                <div class="col-md-6 box-img-text-second-block">
                    <div class="text-center">
                        <img :src="`static/img/section_transport/cars/${car.name}/block2.jpg`" alt="Vehiculo de Atras" class="img-fluid">
                    </div>
                    <div class="block-description-box">
                        <div class="title-block">
                               {{car.two_section.section2.title}} 
                        </div>
                        <div class="text-block">
                                {{car.two_section.section2.text}} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cream-color-zone py-5">
            <div class="cream-main d-flex justify-content-center">
                <img :src="`static/img/section_transport/cars/${car.name}/cream-main.jpg`" alt="Foto capas auto" class="img-fluid">
            </div>
            <div class="subtitle">
              {{car.cream_zone.title}} 
            </div>
            <div class="longtextcream container">
                {{car.cream_zone.text}} 
            </div>
            <div class="container">
                <div class="row cream-blocks">
                    <div class="col-md-6">
                        <div>
                            <img :src="`static/img/section_transport/cars/${car.name}/cream-block1.jpg`" alt="" class="img-fluid">
                        </div>
                        <div class="cream-block-description-box">
                            <div class="cream-title">
                                 {{car.cream_zone.two_section.section1.title}}
                            </div>
                            <div class="cream-longtext">
                                {{car.cream_zone.two_section.section1.text}}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <img :src="`static/img/section_transport/cars/${car.name}/cream-block2.jpg`" alt="" class="img-fluid">
                        </div>
                        <div class="cream-block-description-box">
                            <div class="cream-title">
                                     {{car.cream_zone.two_section.section2.title}}
                            </div>
                            <div class="cream-longtext">
                              {{car.cream_zone.two_section.section2.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end cream zone -->
        <div class="galery-zone">
            <div class="title">Galería</div>
        </div>
        <galery :carname="car.name" ></galery>
    </div>
</template>

<script>
import Galery from '@/components/car/Galery.vue'
export default {
    props:['item','car'],
    components: {
        Galery
    }
}
</script>

