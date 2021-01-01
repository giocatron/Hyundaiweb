<template>
    <div class="motorization">
        <div class="title">Motorización</div>
        <div class="subtitle">Motor de gasolina de 1.0 MPi</div>
        <div class="d-flex justify-content-center">
            <div class="longtext motorsubtitle ">El motor Kappa de 16 V DOHC con tecnología dual de tren de válvulas de distribución variable (VTVT) le ofrece lo mejor de ambos mundos: kilometraje superior y rendimiento óptimo. El sistema VTVT controla el funcionamiento de la válvula dependiendo
                de los requisitos del motor, lo que conduce a una mejor eficiencia con menores emisiones.</div>
        </div>
    
    
        <div class="container">
            <div class="row motorization-firsttwoimages">
                <div class="col-md-12  d-flex justify-content-center">
                    <img :src="`static/img/section_transport/cars/grand_i10/motorization/1.jpg`" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="row cream-image mt-4">
                    <div class="col-md-12 d-flex justify-content-center">
                        <div>
                            <img :src="`static/img/section_transport/cars/grand_i10/cream-main.jpg`" alt="" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="title">Transmisión automática</div>
                <div class="subtitle">Conducir en el tráfico es muy fácil con la transmisión automática de 4 velocidades. Ofrecido con 1.2 variantes de gasolina Kappa de Grand i10 para una experiencia de conducción agradable en el tráfico de la ciudad congestionada.</div>
    
            </div>
        </div>
        <div class="motorization-last">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center mb-4">
                            <div class="title-moto-last">Diseño aerodinamico</div>
                            <div class="subtitle-moto-last">
                                El parachoques de diseño aerodinámico reduce la resistencia del flujo de aire hacia adelante y el efecto del alerón trasero para mejorar la economía de combustible y la estabilidad de conducción.
                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                            <div>
                                <img :src="`static/img/section_transport/cars/grand_i10/motorization/3.jpg`" alt="" class="img-fluid">
                            </div>
                        </div>
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

<style>
.motorsubtitle {
    max-width: 1052px;
}
</style>