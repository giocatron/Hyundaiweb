<template>
    <div class="zones mt-5 ">
        <div class="title">Talleres</div>
        <div class="zones-blue-bg">
        <div class="container">
            <div class="row mt-2 no-gutters">
                <div class="zone-place text-left  col-md-3 p-4" v-for="(location,i) in locations" :key="i">
                    <div v-on:click="goToZone(location[1],location[2])">
                        <div class="zone-title">
                                    <div><img src="@/assets/img/icons/map/map_icon.svg" alt="icono mapa" class="map-icon"></div>
                            <div class="ml-1">{{location[0]}} </div>
                    
                        </div>
                        <div v-if="location[3]" class="title-direction">
                            {{location[3]}}
                        </div>
                        <div v-if="location[4]" class="title-direction">
                            {{location[4]}}
                        </div>
                        <div v-if="location[5]" class="title-direction">
                            {{location[5]}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
        <div class="row">
            <div class="col-md-12" id="map_mechanical">
                <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
                    <GmapMarker v-for="(location, index) in locations" :key="index" :position="{ lat: location[1], lng: location[2]}" @click="center = { lat: location[1], lng: location[2]}" title="dsds" />
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
                { position: { lat: -25.2906935, lng: -57.6049089 } },
                // Multiplaza
                { position: { lat: -25.3169311, lng: -57.5735615 } },
                //  Terminal
                { position: { lat: -25.3295759, lng: -57.6023787 } },
                //  Mariscal Lopez
                { position: { lat: -25.314308, lng: -57.5301772 } },
                //  Caaguazu
                { position: { lat: -25.4507625, lng: -56.445538 } },
                //  Coronel Oviedo
                { position: { lat: -25.4447823, lng: -56.4393854 } },
                // Encarnación
                { position: { lat: -27.3094722, lng: -55.8418054 } },
                // Santa Rita
                { position: { lat: -25.7691667, lng: -55.0687372 } },
                // Ciudad del Este
                { position: { lat: -25.505859, lng: -54.6448802 } },
                // Santa Rosa
                { position: { lat: -26.8859359, lng: -56.8865641 } },
                // Concepción
                { position: { lat: -23.4031473, lng: -57.4363301 } },
            ],
            locations: [
                ['Casa Central', -25.2706107, -57.6053073, 'Artigas 1921', 'reservastaller@automotor.com.py'],
                ['Taller Ciudad del Este', -25.505859, -54.6448802, 'Dirección: Avenida Monseñor Rodríguez Km. 4,5 e/ Calle 1 y Calle 7', 'tallercde@automotor.com.py'],
                ['Santa Rita', -25.7691667, -55.0687372, 'Av. Rodríguez de Francia casi Adela Speratti', 'santarita@automotor.com.py'],
                ['Encarnación', -27.3094722, -55.8418054, 'Avenida Bernardino Caballero 791', 'encarnacion@automotor.com.py'],
                ['Cnel. Oviedo', -25.4447823, -56.4393854, 'Mcal. Estigarribia casi Las Residentas', 'oviedo@automotor.com.py'],
                ['Departamento de Repuestos', -25.2717139, -57.605117, 'Av. Artigas 2025', ' +595 21 282469/70', 'parts-dept@automotor.com.py'],
                ['Taller autorizado LC Cars', -24.6720367, -56.4461071, 'Avda. Zoilo Gonzalez c/ Pedro Juan Caballero', '+595343-420009 / +595981458652', 'lccarsmultiservicios@gmail.com'],
                ['Taller autorizado Cristian Paats & Cia', -25.4447823, -56.4393854, 'Jose Segundo Decoud esq. Carlos Antonio Lopez (al lado de COPACO)', '+595521-202-345 - 0976438170', 'cristianpaatsycia@hotmail.com'],
                ['Taller autorizado Autocentro San Roque', -25.4604701, -56.0069811, 'Pedro Juan Caballero esq. Cristobal Colon', '+595522-40925 - 0981 506097', 'autocentrosanroque@hotmail.com'],
                //['Taller autorizado Rectificadora Campo 9', -25.3779436, -55.7085371, 'Ruta VII km. 213', '+595528-222285 - 0972 805165', 'alberto221968@hotmail.com'],
                ['Taller autorizado JuanK Encarnación', -27.3094722, -55.8418054, 'Ruta VI km. 3', '+59571-203251/+595971905277 / +595961999754 /+595975764204'],
                ['Taller autorizado Industrial Chaco', -22.357106, -60.0337708, 'Calle Industrial c/ Hindenburg (al lado de la playa de autos en la esquina)', '+595491-417450 - 0981 244046', 'sac2@automotor.com.py'],
                ['Taller autorizado Autocenter', -22.3845982, -59.835856, 'Tallerstrasse c/ Av. Central', '+595492-252110 - 0981 200237', 'autocenter@portalchaco.com'],
                ['Taller autorizado Braun S.R.L.', -22.6465638, -60.1228818, '1ero de Febrero esq. La Perdiz no. 775', '+595493-240243 - 0984 172300', 'braunsrl@gmail.com; servicio@braun.com.py'],
                ['Taller autorizado JuanK Hohenau', -27.070111111111, -55.645972222222, 'braunsrl@gmail.com; servicio@braun.com.py', '+595775-232998 / +595961999755', 'juank.colonias@hotmail.com; juank@itacom.com.py'],
                ['Taller autorizado Gorostiaga CDE', -25.5091657, -54.6351241, 'Av. Monseñor Rodríguez Ruta 7 km. 3 1/2 esq. Cadete Pando (en la esquina esta el Shopping Noblense)', '+59561-570219 - 0983 300366 - 0973 808170', 'almada.genaro@gorostiaga.com.py'],
                ['Taller autorizado Premium', -24.9727077, -54.9186158, 'Simon Bolivar c/ Mcal Lopez (doblar a la izquierda frente a Autoelectrica Sosa)', '+595983-639549 / +595677-20448', 'repuestos.premium@gmail.com'],
                ['Taller autorizado Bazzo', -25.8027238, -55.0954699, 'Av. El Agricultor - Fraccion Sur (atras de la agencia Ford y Disapar)', '+595673-220345 / +595983-615230', 'bazcar_f1@hotmail.com'],
                //['Taller autorizado Taller GT', -27.3483344, -55.8658996, 'Gral. Escobar esq. Capellán Molas', '+595985-408030 / 0985 725 481', 'tallergt.enc@gmail.com'],
                ['Taller autorizado Taller San Carlos', -23.40728, -57.44382, '14 de mayo esq. Pte Franco', '+595331-241992 - 0984 396112', 'carlosdiazf61@hotmail.com'],
                ['Taller autorizado Gorostiaga Santa Rita', -25.7691667, -55.0687372, 'Ruta 6ta. Km. 40 Barrio Simuelo', '0673 221-841/2 / +595986164222', 'dani2014bm@hotmail.com'],
                ['Taller autorizado Motor Mec', -26.8556666, -58.2988295, 'Antequera y Teniente Mendoza (en la esquina del Banco Continental)', '0786 230 211 - 0975 122 025', 'motormec_pilar@hotmail.com'],
                ['Taller autorizado Motormack', -22.396074, -59.837147, 'Avda. Central (al entrar al pueblo a la izquierda)', '0492 252 351 - 0981746205', 'alfred@motormack.com'],
                ['Norte Autos', -22.561197, -55.723115, 'Pedro Juan Caballero', 'Teniente Herrero esq. Benjamin Aceval (Frente a la plaza Herminio Gimenez)', '+595336 375 390', 'taller-norteautos@hotmail.com'],
                ['Ciudad del Este', -25.505859, -54.6448802, 'Dirección: Avenida Monseñor Rodríguez Km. 4,5 e/ Calle 1 y Calle 7', 'tallercde@automotor.com.py'],
                ['Autidiesel Paraná', -24.2478, -54.76368, 'Katueté, Canindeyú', 'autodieselparana@hotmail.com'],
                ['LubriMor Servicios & Repuestos', -26.85926, -57.03484, 'San Ignacio, Misiones', '+595972129565 / +595973535660', 'alemor998@gmail.com'],
                ['Taller Fogasa', -23.803298, -56.503879, 'Santa Rosa del Aguaray', '+595992 225723 / +59598 4401200', 'fogasausa@hotmail.com'],
                ['Taller RG', -25.805955, -56.431192, 'Villarica', '+595993 340303', 'rg.automotor.servicios@katuetei.com.py'],
                ['Alineación Rio Verde', -25.805955, -56.431192, 'Villarrica - Ruta 3 km 340', '+595986 756619', 'alineacionrioverde90@gmail.com'],
                ['Autocentro LB', -25.805955, -56.431192, 'Villarrica - Coronel Giménez casi Río Aquidabán', '+595982 282001', 'autocentrolb@gmail.com']
            ]
        };
    },
    methods: {
        goToZone(latitude, longitude) {
            VueScrollTo.scrollTo('#map_mechanical', 500, options);
            let lat = _.toNumber(latitude);
            let lng = _.toNumber(longitude);
            this.center.lat = lat;
            this.center.lng = lng;
        }
    }
};
</script>

<style scoped>
.title-direction {
    margin-left: 40px;
    font-size: 12px;
}

.vue-map-container {
    min-height: 500px;
    height: 100%;
    width: 100%;
}

.zone-direction {
    font-weight: 100;
    font-size: 13px;
}

.zone-title {
    cursor: pointer;
}
</style>
