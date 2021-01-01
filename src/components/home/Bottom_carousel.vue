<template>
    <div>
        <!-- <carousel scrollPerPage="true" perPage="2">
                                        <slide>
                                            <img src="static/img/home/bottom_carousel/1.png" alt="">
                                        </slide>
                                        <slide>
                                            <img src="static/img/home/bottom_carousel/2.png" alt="">
                                        </slide>
                                        <slide>
                                            <img src="static/img/home/bottom_carousel/3.png" alt="">
                                        </slide>
                                        <slide>
                                            <img src="static/img/home/bottom_carousel/4.png" alt="">
                                        </slide>
                                    </carousel> -->
        <div>


            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(image,i) in images" :key="i">
                    <div>
                        <img :src="image.images.standard_resolution.url" alt="" class="img-carousel-swiper">
                    </div>

                </swiper-slide>

                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev">
                    <img src="@/assets/img/icons/prev_icon.png" alt="">
                </div>
                <div class="swiper-button-next" slot="button-next">
                    <img src="@/assets/img/icons/next_icon.png" alt="">
                </div>
                <div class="swiper-scrollbar" slot="scrollbar"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
var Instafeed = require("instafeed.js");
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOption: {
                  slidesPerView: 5,
                breakpoints: {
                      1364: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    1074: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    }
                },
                spaceBetween: 50,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                centeredSlides: false,
            },
            images: []
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    mounted() {
        let that = this;
        this.$nextTick(() => {
            var feed = new Instafeed({
                get: 'user',
                mock:true,
                userId: '1364445945',
                accessToken: '1364445945.56f1977.db930c2066724905a49eb38dd83ca8c7',
                limit: 12,
                resolution: 'low_resolution',
                success: function(data) {
                    var images = data.data;
                    that.images = images;
                    // images is an array of pictures
                }

            });
            feed.run();


        });
    },
}
</script>

<style>
.swiper-button-next {
    background-image: none;
}

.swiper-button-prev {
    background-image: none;
}

.img-carousel-swiper {
    max-height: 360px;
    max-width: 640px;
}
</style>
