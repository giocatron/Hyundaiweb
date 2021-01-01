<template>
  <div class="container">
      <div class="row mt-3 justify-content-center">
        <div class="col-md-3 col-6">
            <router-link :to="{ name: 'county'}">
                <div class="img-car">
                    <img src="static/img/section_transport/buses/county/thumbnail.png" alt="Bus County" class="img-fluid">
                </div>
                <div class="car-title">
                    County
                </div>
            </router-link>
        </div>
     <!--   <div class="col-md-3 col-6">
            <router-link :to="{ name: 'super_aero_city'}">
                <div class="img-car">
                    <img src="static/img/section_transport/buses/super_aero_city/thumbnail.png" alt="Bus County" class="img-fluid">
                </div>
                <div class="car-title">
                    Super Aero City
                </div>
            </router-link>
        </div>-->
         <div class="col-md-3 col-6">
            <router-link :to="{ name: 'h350_bus'}">
                <div class="img-car">
                    <img src="static/img/section_transport/buses/h350_bus/thumbnail.png" alt="H350_Bus" class="img-fluid">
                </div>
                <div class="car-title">
                    H350 Bus
                </div>
            </router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
