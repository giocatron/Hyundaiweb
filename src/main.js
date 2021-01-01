import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from 'jquery'
import VueScrollReveal from 'vue-scroll-reveal';
import VuePlyr from 'vue-plyr'
import VueAnalytics from 'vue-analytics';
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.

Vue.use(VuePlyr)

import VueSweetalert2 from 'vue-sweetalert2';

// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCJqyYf0-x19hppbcApH51MlLZ8_qwbelc'
    },
})

Vue.use(VueAnalytics, {
    id: 'UA-136994547-6',
    router
})

import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo)


import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

Vue.use(VueScrollReveal, {
    class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
    duration: 800,
    scale: 1,
    distance: '10px',
    mobile: false
});

global.$ = jQuery

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@/assets/css/animate.css"
import "@/assets/css/style.css"

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
