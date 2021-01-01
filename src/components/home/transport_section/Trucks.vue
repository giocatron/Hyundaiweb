<template>
    <div class="container">
        <div class="row mt-3 ">
            <div class="col-md-3 col-6">
            <router-link :to="{ name: 'chasis_cabina'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/chasis_cabina/thumbnail.png" alt="Camion Cabina" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Chasis Cabina
                    </div>
                </router-link>
            </div>
           <!-- <div class="col-md-3 col-6">
                <router-link :to="{ name: 'cargo'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/cargo/thumbnail.png" alt="Camion Cargo" class="img-fluid">
                    </div>
                    <div class="car-title">
                         Cargo
                    </div>
                </router-link>
            </div>-->
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'furgon'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/furgon/thumbnail.png" alt="Furgón" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Camiones Furgón
                    </div>
                </router-link>
            </div>
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'furgon_refrigerado'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/furgon_refrigerado/thumbnail.png" alt="Camion Furgón rerigerado" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Camiones con Furgón Refrigerado
                    </div>
                </router-link>
            </div>
    
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'h350'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/h350/thumbnail.png" alt="Camion  H350" class="img-fluid">
                    </div>
                    <div class="car-title">
                        H350 Van
                    </div>
                </router-link>
            </div>
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'nuevo_xcient'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/nuevo_xcient/thumbnail.png" alt="Nuevo Xcient" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Xcient Volquete / Tracto
                    </div>
                </router-link>
            </div>
                <div class="col-md-3 col-6">
                    <router-link :to="{ name: 'volquete'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/volquete/thumbnail.png" alt="Volquete" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Camiones con Volquete
                    </div>
                </router-link>
            </div>
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'mezclador'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/mezclador/thumbnail.png" alt="Mezclador" class="img-fluid">
                    </div>
                    <div class="car-title">
                      Camión Hormigonero
                    </div>
                </router-link>
            </div>
    
            <div class="col-md-3 col-6">
                <router-link :to="{ name: 'tracto_camion'}">
                    <div class="img-car">
                        <img src="static/img/section_transport/trucks/tracto_camion/thumbnail.png" alt="Tracto camion" class="img-fluid">
                    </div>
                    <div class="car-title">
                        Tractocamión
                    </div>
                </router-link>
            </div>
        
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="css">

</style>
