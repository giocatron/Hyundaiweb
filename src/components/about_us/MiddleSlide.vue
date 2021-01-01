<template>
    <div class="mt-5">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <div>
                    <div class="text-img w-100 h-100">
                       <div class="container box-slide-text">
                              <div class="box-slide-title">
                                  Misión
                              </div>
                                <div class="box-slide-long-text">
                                  Ofrecemos soluciones automotrices y maquinarias de primer nivel, comprometidos con la excelencia y trayectoria que nos caracteriza. Brindamos un servicio confiable a través de una experiencia personalizada, garantizando la plena satisfacción de nuestros clientes.
                              </div>
                       </div>
                    </div>
                   <img src="static/img/about_us/slide/1.jpg" alt="Fondo Camioneta" class="img-fluid ">
                </div>
            </swiper-slide>
            <swiper-slide>
                <div>
                    <div class="text-img w-100 h-100">
                       <div class="container box-slide-text">
                              <div class="box-slide-title">
                                 Nuestra Visión de Futuro
                              </div>
                                <div class="box-slide-long-text">
                                  Superar las expectativas del cliente, brindando una mejor experiencia .
                              </div>
                       </div>
                    </div>
                   <img src="static/img/about_us/slide/2.jpg" alt="Fondo Camioneta" class="img-fluid ">
                </div>
            </swiper-slide>
    
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev">
                        <img src="@/assets/img/icons/prev_icon.png" alt="">
                    </div>
                    <div class="swiper-button-next" slot="button-next">
                        <img src="@/assets/img/icons/next_icon.png" alt="">
                    </div> -->
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                autoWith: true, //enable auto height
                slidesPerView: 1,
                spaceBetween: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                // navigation: {
                //     nextEl: ".swiper-button-next",
                //     prevEl: ".swiper-button-prev"
                // }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
