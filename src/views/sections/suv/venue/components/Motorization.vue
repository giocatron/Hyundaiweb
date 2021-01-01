<template>
    <div class="motorization">

        
        <div class="motorization-last">
            <div class="container">
                <div class="title">Motorización</div>
                <div class="subtitle">Motor naftero 1.6 123hp.</div>
                <div class="longtext px-5">
                El modelo Venue proporciona confort en la conducción, manejo deportivo y consumo de combustible superior. Además, sin importar las condiciones del camino, el sofisticado Control de Multitracción 2WD garantiza que Venue mantendrá un desempeño de conducción óptimo y una experiencia de conducción relajante durante tus aventuras urbanas.
                </div>
                <div class="main-image d-flex justify-content-center pb-5">
                    <div>
                        <img :src="`../static/img/section_transport/suv/venue/venue-motor.jpg`" alt="Vnue Urban City" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="motorization-cream-zone py-5">
            <div class="container">
                <div class="title">Transmisión</div>
                <div class="row cream-image mt-4">
                    <div class="col-md-6 ">
                        <img :src="`../static/img/section_transport/suv/venue/transmision-1.jpg`" alt="" class="img-fluid">
                    </div>
                    <div class="col-md-6">
                        <!--<div class="longtext text-left ft-16">Una potencia máxima de 295ps a 6,000 rpm y <br>un torque máximo de 36.2 kg ∙ m a 5,200 rpm.s</div>-->
                          <img :src="`../static/img/section_transport/suv/venue/transmision-2.jpg`" alt="" class="img-fluid">
                         
                    </div>
                </div>
            <div class="title font-32">Transmisión automática de 6 velocidades.</div>
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
