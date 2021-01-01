<template>
    <div class="motorization">
        <div class="container">
            <div class="title">Motorización</div>
            <div class="subtitle">Motor diesel 2.6</div>
            <div class="longtext ">El motor diésel 2.6 con aspiración natural emplea un solo árbol de levas y es capaz de entregar 80 ps a 4.000 rpm y 163.0 Nm de torque a 2.200 rpm.</div>
            <div class="container">
                <div class="row motorization-firsttwoimages">
                    <div class="col-md-12 d-flex justify-content-center">
                        <img :src="`../static/img/section_transport/comercial/h_100/motorization/1.jpeg`" alt="" class="img-fluid">
                    </div>
                </div>
            </div>
    
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="row cream-image mt-4">
                    <div class="col-md-12 d-flex justify-content-center">
                        <img :src="`../static/img/section_transport/comercial/h_100/motorization/2.jpeg`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-12 d-flex justify-content-center flex-column align-items-center">
                        <div class="title text-center">Transmisión manual de 6 velocidades. </div>
                        <div class="subtitle text-center">La transmisión de 6 velocidades está emparejada con la 2.6. Esta fabricada en Hyundai, reconocida por su eficiencia y durabilidad excepcional. La recogida del embrague es muy suave y progresiva.</div>
                    </div>
                </div>
    
            </div>
        </div>
    
    </div>
</template>

<script>
export default {
    props: ['car'],
}
</script>