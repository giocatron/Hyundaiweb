<template>
    <div class="spares">
        <div class="cover">
            <img src="/static/img/spares/cover.jpg" alt="Repuestos" class="img-fluid"/>>
        </div>
        <div class="title">
            Repuestos
        </div>
        <div class="subtitle">
            ¿Por qué usar repuestos genuinos Hyundai?
        </div>
        <div class="stair1 d-flex flex-column justify-content-center">
            <div class="container ">
                <div class="title-stair">
                    Por tu protección:
                </div>
                <div class="text-stair">
                    Cuando usás repuestos genuinos, lográs que tu vehículo mantenga el mismo rendimiento en todo momento, optimizando al máximo su funcionamiento, gracias a la confiabilidad y durabilidad que siempre nos han caracterizado.
                </div>
            </div>
        </div>
        <div class="stair2 d-flex flex-column justify-content-center">
            <div class="container">
                <div class="title-stair">
                    Por tu familia:
                </div>
                <div class="text-stair">
                    Solo con nuestros repuestos genuinos podrás garantizar un funcionamiento seguro de tu Hyundai, y así salvaguardar el bienestar de los tuyos.
                </div>
            </div>
        </div>
        <div class="stair3 d-flex flex-column justify-content-center">
            <div class="container">
                <div class="title-stair">
                    Por tu patrimonio:
                </div>
                <div class="text-stair">
                    Al usar repuestos genuinos mantendrás vigente tu inversión, ya que Hyundai conservará los altísimos niveles de ingeniería y desarrollo que solo te puede ofrecer nuestra fábrica.
                </div>
            </div>
        </div>
        <div class="stair4 d-flex flex-column justify-content-center">
            <div class="container">
                <div class="title-stair">
                    Por respaldo:
                </div>
                <div class="text-stair">
                    Solo con el uso de repuestos genuinos podrás mantener la garantía de fábrica y asegurarás que cada una de las partes de tu Hyundai cumplan con su función al 100%.
                </div>
            </div>
        </div>
        <div class="last-stair d-flex flex-column justify-content-center">
            <div class="container">
               Contactános para mayor información al 021 282 469 o al 021 282 470.
            </div>
        </div>
        <mechanical></mechanical>
    </div>
</template>

<script>
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    offset: -199,
    force: true,
    cancelable: true,
    onStart: function(element) {
        // scrolling started
    },
    onDone: function(element) {
        // scrolling is done
    },
    onCancel: function() {
        // scrolling has been interrupted
    },
    x: false,
    y: true
}

import Zones from '@/components/home/Zones.vue'
import Mechanical from '@/components/spares/Mechanical.vue'

export default {
    name:'spares',
    components:{
        Zones,
        Mechanical

    }
}

</script>
