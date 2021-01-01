<template>
    <div class="promotions">
      <!--  <img src="static/img/promotions/hyundai-promo-2020.png" alt="Promociones" class="img-fluid" style="width: 100%;">-->
        <div class="container pb-4">
            <div class="text-center title">Noticias</div>
            <div v-if="first" v-on:click="activeComponenent('list')" class="btn white btn-secondary mb-2"> &#60 Volver</div>
            <transition name="slide-fade" mode="out-in">
                <div v-if="list">
                    <div class="row justify-content-center pb-3">
                        <div class="col-md-6">
                            <div class="car">
                                <img src="static/img/news/thumb/1.jpg" alt="Noticia" class="img-fluid mt-3">
                                <h5 class="mt-2 subtitle text-left" style="font-size: 25px;">Hyundai Motor Group desarrolla tecnologías de aire acondicionado para mantener el aire limpio en los vehículos</h5>
                                <div class="col-md-12 text-right">
                                    <div v-on:click="activeComponenent('first')" class="btn btn-primary mb-2">Ver noticia > </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                        </div>
                    </div>
                </div>
                <first v-if="first"></first>
            </transition>
        </div>
    </div>
</template>
<script>
import First from '@/views/news/First.vue'
export default {
    data() {
        return {
            list: true,
            first: false
        }
    },
    components: {
        First
    },
    methods: {
        activeComponenent(value) {
            switch (value) {
                case "list":
                    this.first = false;
                    this.list =  true;
                    break;

                case "first":
                    this.list = false;
                    this.first = true;
                    break;

                default:
                    //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
                    break;

            }
        }
    }
}
</script>