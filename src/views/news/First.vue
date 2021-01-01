<template>
    <div class="motorization">
        <div class="motorization-last">
            <div class="container car">
                <div class="subtitle text-left">Hyundai Motor Group desarrolla tecnologías de aire acondicionado para mantener el aire limpio en los vehículos</div>
                <div class="longtext px-5 text-left">
                    - Tres tecnologías desarrolladas para gestionar la calidad del aire en los vehículos. <br>
                    - Se introducirán tecnologías en los próximos modelos nuevos. <br>
                    SEUL, 27 de julio de 2020 - Hyundai Motor Group anunció hoy nuevas tecnologías para mejorar la calidad del aire en los vehículos y crear un ambiente interior más agradable para los clientes. 
    Reconociendo la creciente preocupación por la calidad del aire, el Grupo presentó tres nuevas tecnologías de aire acondicionado: "After-Blow", "Multi-Air Mode" e "Fine Dust Indicator". Las tecnologías se introducirán inicialmente en modelos seleccionados en Corea y se expandirán a los próximos vehículos del Grupo en todo el mundo en el futuro. 

                </div>
                <div class="main-image d-flex justify-content-center pb-5">
                    <div>
                        <img :src="`static/img/news/posts/first/1.jpg`" alt="Aire acondicionado" class="img-fluid">
                    </div>
                </div>
                <div class="subtitle">Tecnología After-Blow</div>
                <div class="longtext px-5 text-left">
                    "After-Blow" seca el condensado en el evaporador y suprime el crecimiento de moho en el sistema de aire acondicionado, lo que puede causar un olor durante el clima cálido. 
Después de apagar el motor y el condensado en el evaporador se drena naturalmente durante aproximadamente 30 minutos, "After-Blow" se activa durante 10 minutos para secar el evaporador y cualquier resto de condensado en el paso de aire. 
El sistema de aire acondicionado permite automáticamente la entrada de aire exterior durante este tiempo para evitar la acumulación de humedad. La tecnología utiliza un sensor inteligente de batería (IBS) para controlar la batería y deja de funcionar cuando la batería está baja, lo que disipa cualquier preocupación sobre la descarga de la batería. También se desactiva cuando el sistema de aire acondicionado no está en uso durante un cierto período de tiempo, o cuando la temperatura exterior es baja.
                </div>
                <div class="main-image d-flex justify-content-center pb-5">
                    <div>
                        <img :src="`static/img/news/posts/first/2.jpg`" alt="Aire acondicionado" class="img-fluid">
                    </div>
                </div>
                <div class="subtitle">Tecnología de modo de aire múltiple.</div>
                <div class="longtext px-5 text-left">
                    El " Multi-Air Mode" utiliza múltiples ventilaciones para aire acondicionado y calefacción para crear un ambiente interior más agradable con viento suave. Cuando se activa este modo, el aire se dispersa a las ranuras multiaéreas recién agregadas en los asientos del conductor y del pasajero, además de las salidas de aire normales. El volumen general del viento sigue siendo el mismo, pero la dispersión del viento reduce el contacto directo con el aire y suaviza el aire. Este modo se puede activar y desactivar según la preferencia del controlador.
                </div>
                <div class="subtitle">Tecnología de indicador de polvo fino. .</div>
                <div class="longtext px-5 text-left">
                    El "Fine Dust Indicator" mide el aire dentro del vehículo en tiempo real y entrega información digitalizada, lo que permite al conductor administrar mejor la calidad del aire. 
El indicador muestra la concentración y el nivel de contaminación de partículas ultrafinas (PM 2.5) dentro del vehículo utilizando números enteros y colores para una mejor visibilidad para el usuario: azul para 0 a 15 μg / m3, verde para 16 a 35 μg / m3, naranja para 36 a 75 μg / m3, y rojo para 76 μg / m3 o más. Si el nivel de partículas ultrafinas excede 36 μg / m3 mientras la función está activa, el modo de limpieza de aire se ejecutará para purificar el aire en el vehículo. 
El sistema de limpieza de aire establece automáticamente el volumen de aire entre 3 y 8 y cambia al modo de recirculación de aire y activa el sistema de aire acondicionado para reducir la humedad interior. Si el aire no mejora en el modo de limpieza de aire, también puede servir como un recordatorio para que el conductor reemplace los filtros del aire acondicionado o limpie los asientos y tapetes contaminados. 

                </div>
            </div>
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="row cream-image mt-4">
                    <div class="col-md-6 ">
                        <img :src="`static/img/news/posts/first/3.jpg`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <!--<div class="longtext text-left ft-16">Una potencia máxima de 295ps a 6,000 rpm y <br>un torque máximo de 36.2 kg ∙ m a 5,200 rpm.s</div>-->
                          <img :src="`static/img/news/posts/first/4.jpg`" alt="" class="img-fluid">
                         
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
.font-32{
    font-size: 32px !important;
}
.specList {
    overflow: hidden;
    padding: 36px 0 34px;
    font-size: 14px;
    border-top: 1px solid #f6f3f2;
    line-height: 20px;
}
.performance.on {
    display: block;
}
.specList>dd dt {
    float: left;
    width: 282px;
}
.specList>dt {
    float: left;
    width: 170px;
}
.specList>dd {
    overflow: hidden;
    float: left;
}
.specList>dd dd {
    float: left;
    width: 546px;
}
.specList>dd dl {
    overflow: hidden;
    width: 828px;
    padding-top: 5px;
}
.infoTable-title{
    font-size: 14px;
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
    cursor: pointer;
}
.text-motorization{
    font-size: 20px !important;
    text-align: left !important;
    margin-top: 20px !important;
}
.conductor{
    background-color: #F6F3F2 !important;
}
.option{
    font-size: 30px !important;
    /*padding-top: 30px !important;*/
}
.ft-16{
    margin: 0px 20px 15px 20px;
    font-size: 16px !important;
}
.infoTable {
    width: 100%;
}
.infoTable tr th {
    font-size: 14px;
    line-height: 18px;
    padding: 12px 30px 12px 30px;
    font-weight: normal;
    text-align: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    min-height: 43px;
    border-bottom: 1px solid #fff;
    width: 240px;
    border-right: 1px solid #e4dcd3;
    background: #e4dcd3;
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
}
.infoTable tr td {
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
}
.infoTable tr td {
    padding: 0 20px;
    border-right: 1px solid #e4dcd3;
    border-bottom: 1px solid #e4dcd3;
    font-size: 14px;
    font-family: 'hyundai_sans_head_krregular', sans-serif;
    border-top: 1px solid #e4dcd3;
}
.webBlock {
    display: block;
}
.headSpec{
    border-radius: 0;
    background: #ffffff;
    /* border-bottom: 1px solid #e4dcd3; */
    height: 58px;
    padding: 0 30px;
    line-height: 58px;
    text-align: left;
    text-decoration: none;
    font-family: 'hyundai_sans_head_krmedium', sans-serif;
    font-size: 14px;
    cursor: pointer;
}
.accordion>.card {
    border-radius: 0;
}
/*.headSpec::after {
    display: inline-block;
    right: 30px;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}*/
.drop{
     content: '';
    display: block;
    position: absolute;
    right: 30px;
    top: 50%;
    width: 12px;
    height: 7px;
    margin-top: -3px;
    background: url(https://www.hyundai.com/etc/designs/hyundai/ww/en/images/common/bg_toggle_small.png) no-repeat top left !important;
}
</style>
