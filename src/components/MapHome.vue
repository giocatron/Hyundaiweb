<template>
    <div>
        <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="15">
            <GmapMarker :position="center"  title="dsds" />
        </GmapMap>
    </div>
</template>
<script>
    import _ from 'lodash';
    export default {
        name: 'mapdefault',
        data(){
            return{
                center: { lat: -25.2706107, lng: -57.6053073 },
                mapTypeId: "roadmap",
                zoom: 12,
            }
        },
        mounted() {
            const latTake = _.toNumber(this.$route.params.lat);
            const lngTake = _.toNumber(this.$route.params.lng);
            this.center = {lat: latTake, lng: lngTake }
        }
    }
</script>
<style>
    .vue-map-container {
        min-height: 100vh;
        height: 100%;
        width: 100%;
    }
</style>
