<template>
    <div class="container mb-5">
        <div class="test responsive-heigh-gallery">
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/1.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-2" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/2.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-3" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/3.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-4" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/4.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-5" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/5.jpg)` }"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            </swiper>
            <!-- swiper2 Thumbs -->
            <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/1.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-2" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/2.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-3" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/3.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-4" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/4.jpg)` }"></swiper-slide>
                <swiper-slide class="slide-5" v-bind:style="{ 'background-image': `url(../static/img/section_transport/cars/ioniq/gallery/5.jpg)` }"></swiper-slide>
            </swiper>
        </div>
          <warning></warning>
    </div>
</template>

<script>
import Warning from '@/components/Warning.vue'
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    data() {
        return {
            swiperOptionTop: {
                spaceBetween: 10,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 10,
                slidesPerView: 4,
                touchRatio: 0.2,
                loop: true,
                loopedSlides: 5, //looped slides should be the same
                slideToClickedSlide: true,
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.swiper
            const swiperThumbs = this.$refs.swiperThumbs.swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
    components: {
        swiper,
        swiperSlide,
          Warning
    }
}
</script>

<style>
.test {
    /* background-image: url('./static/img/about_us/slide/1.jpg') */
}

.swiper-container {
    background-color: #000;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

/* .swiper-slide.slide-1 {
  background-image: url('static/img/about_us/slide/1.jpg');
}
.swiper-slide.slide-2 {
  background-image: url('static/img/about_us/slide/1.jpg');
}
.swiper-slide.slide-3 {
  background-image: url('static/img/about_us/slide/1.jpg');
}
.swiper-slide.slide-4 {
  background-image: url('static/img/about_us/slide/1.jpg');
}
.swiper-slide.slide-5 {
  background-image: url('static/img/about_us/slide/1.jpg');
} */

.gallery-top {
    height: 80% !important;
    width: 100%;
}

.gallery-thumbs {
    height: 20% !important;
    box-sizing: border-box;
    padding: 10px 0;
}

.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
}

.gallery-thumbs .swiper-slide-active {
    opacity: 1;
}
</style>
