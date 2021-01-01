<template>
    <div id="app">
        <div class="content">
            <header-home></header-home>
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
        </div>

        <footer-home></footer-home>
    </div>
</template>

<script>
import HeaderHome from '@/components/Header.vue'
import FooterHome from '@/components/Footer.vue'
import Vue from "vue"
import VueTagManager from "vue-tag-manager"
import VueGtm from 'vue-gtm';
//import VueRouter from 'vue-router';
//const router = new VueRouter({ routes });
export default {
    name: 'app',
    components: {
        HeaderHome,
        FooterHome
    }
}
Vue.use(VueTagManager, {
    gtmId: 'GTM-WH6MWJQ'
})

Vue.use(VueGtm, {
  id: 'GTM-WH6MWJQ',
  defer: false, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
});

</script>


<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100%;
}
.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
}


.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>
