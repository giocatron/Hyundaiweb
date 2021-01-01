<template>
    <div class="zones mt-5 container-total-fluid">
        <div class="title">Dónde encontrarnos</div> 
        <div class="row mt-4 zones-blue-bg no-gutters">
            <div class="col-md-6 text-right py-4 zone-col">
                <div class="zone-group">
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.2706107','-57.6053073')">
                            <div class="mr-1">Showroom Artigas</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.2706107/-57.6053073"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.2908423','-57.602702')">
                           <div class="mr-1">Showroom Brasilia</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.2908423/-57.602702"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.3169311','-57.5735615')">
                            <div>City Store - Multi Plaza</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.3169311/-57.5735615"> ver en map</router-link></div>

                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.3295759','-57.6023787')">
                           <div class="mr-1">Showroom Terminal</div>
                           <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.3295759/-57.6023787"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.314389','-57.528144')">
                            <div class="mr-1">Showroom Mariscal López</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.3143899/-57.5281445"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.4507625','-56.445538')">
                            <div class="mr-1">Showroom Caaguazú</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.4507625/-56.445538"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.4447823','-56.4393854')">
                           <div class="mr-1">Showroom Coronel Oviedo</div>
                           <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.4447823/-56.4393854"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-27.3134001','-55.8455937')">
                          <div class="mr-1">Showroom Encarnación</div>  
                          <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-27.3134001/-55.8455937"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.7691667','-55.0687372')">
                           <div class="mr-1">Showroom Santa Rita</div>
                           <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.7691667/-55.8452852"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-25.505859','-54.6448802')">
                            <div class="mr-1">Showroom Ciudad del Este</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-25.505859/-54.6448802"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-26.8859359','-56.8865641')">
                            <div class="mr-1">Showroom Santa Rosa</div>
                            <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-26.8859359/-56.8865641"> ver en map</router-link></div>
                        </div>
                    </div>
                    <div class="zone-place">
                        <div class="zone-title" v-on:click="goToZone('-23.4031473','-57.4363301')">
                              <div class="mr-1">Showroom Concepción</div>
                              <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div><router-link tag="a"  to="/map-home/-23.4031473/-57.4363301"> ver en map</router-link></div>
                        </div>
                    </div>
                </div>
                <div class="zone-vertical-divider">
                </div>
            </div>
            <div class="col-md-6" id="map_index">
                <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
                    <GmapMarker v-for="(item, index) in markers" :key="index" :position="item.position" @click="center = item.position" title="dsds" />
                </GmapMap>
            </div>
        </div>
    
    </div>
</template>

<script>
import _ from 'lodash'
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    offset: -99,
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
export default {
    data() {
        return {
            center: { lat: -25.2706107, lng: -57.6053073 },
            mapTypeId: "roadmap",
            zoom: 12,
            markers: [
                //   Casa central
                { position: { lat: -25.2706107, lng: -57.6053073 } },
                // Brasilia
                { position: { lat: -25.2908423, lng: -57.602702 } },
                // Multiplaza
                { position: { lat: -25.3169311, lng: -57.5735615 } },
                //  Terminal
                { position: { lat: -25.3295759, lng: -57.6023787 } },
                //  Mariscal Lopez
                { position: { lat: -25.3143899, lng: -57.5281445 } },
                //  Caaguazu
                { position: { lat: -25.4507625, lng: -56.445538 } },
                //  Coronel Oviedo
                { position: { lat: -25.4447823, lng: -56.4393854 } },
                // Encarnación
                { position: { lat: -27.3134156, lng: -55.8452852 } },
                // Santa Rita
                { position: { lat: -25.7691667, lng: -55.0687372 } },
                // Ciudad del Este
                { position: { lat: -25.505859, lng: -54.6448802 } },
                // Santa Rosa
                { position: { lat: -26.8859359, lng: -56.8865641 } },
                // Concepción
                { position: { lat: -23.4031473, lng: -57.4363301 } },
            ]
        };
    },
    methods: {
        goToZone(latitude, longitude) {
            VueScrollTo.scrollTo('#map_index', 500, options);
            let lat = _.toNumber(latitude);
            let lng = _.toNumber(longitude);
            this.center.lat = lat;
            this.center.lng = lng;
        }
    }
};
</script>

<style scoped>
.vue-map-container {
    min-height: 500px;
    height: 100%;
    width: 100%;
}
</style>
