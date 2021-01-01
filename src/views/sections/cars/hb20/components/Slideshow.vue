<template>
    <div>
        <div class="bd-example-2">
            <div id="slide10" class="carousel slide10" data-ride="carousel10">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/cars/hb20/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20/seguridad/airbag-doble.jpg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Doble airbag</h3>
                                <p class="text-left">El HB20 New Generation presenta 2 frontales, para garantizar la protección de los usuarios dentro del vehiculo. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20/seguridad/aire-acondicionado-manual.jpg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Aire acondicionado manual</h3>
                                <p class="text-left">Potente aire que permite la comodidad en elevadas temperaturas de la ciudad </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20/seguridad/cinturon-3-puntos.jpg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Cinturon de tres puntos y apoya cabeza</h3>
                                <p class="text-left">Listos para garantizar la seguridad en el manejo al detenerse en el momento preciso que el usuario debe accionarlo. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20/seguridad/frenos-abs.jpg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Frenos ABS</h3>
                                <p class="text-left">Listos para garantizar la seguridad en el manejo al detenerse en el momento preciso que el usuario debe accionarlo. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20/seguridad/rueda-acero.jpg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Rueda acero de 14</h3>
                                <p class="text-left">Las ruedas pensadas en nuestras calles a modo de mantener siempre su resistencia y durabilidad en los desafíos al manejar</p>    
                            </div>
                        </div>
                    </div>                                          
                </div>
                <a class="carousel-control-prev" href="#slide10" role="button" data-slide="prev">
                    <div class="btn-slider">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </div>
                </a>
                <a class="carousel-control-next" href="#slide10" role="button" data-slide="next">
                    <div class="btn-slider">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </div>
              
                </a>
            </div>
        </div>
    </div>
</template>

<style>
.btn-slider{    
    width: 35px;
    height: 35px;
    background: black;
}

.home-slider .home-carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 45%;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 0px;
    color: #fff;
    text-align: center;
}

.home-slider .home-carousel-caption h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 50px;
    text-shadow: 2px 2px 4px #000000;
    text-transform: uppercase;
}

.home-slider .home-carousel-caption h2 {
    text-transform: uppercase;
    font-size: 25px;
    text-shadow: 2px 2px 4px #000000;
}

.carousel-item-index {
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    height: 800px; */
}
.carousel-indicators li {
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -ms-flex: 0 1 auto;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    width: 5px;
    height: 5px;
    border-radius: 20px;
    margin-right: 3px;
    margin-left: 5px;
    text-indent: -999px;
    cursor: pointer;
    background-color: transparent;
    background-clip: padding-box;
    border: 3px solid #ffffff;
    opacity: .5;
    -webkit-transition: opacity 0.6s ease;
    transition: opacity 0.6s ease;
}
.carousel-caption-1 {
    position: absolute;
    float: left;
    width: 100%;
    height: 100%;
    /*background-color: #428bca;*/
    opacity: 0.8;
    bottom:0;
    right:0;
}
.carousel-caption-2 {
    position: absolute;
    float: right;
    width: 50%;
    height: 100%;
    /*background-color: #428bca;*/
    opacity: 0.8;
    bottom:0;
    right:0;
}
.carousel-item{
        flex-direction: row;
        display: flex;
}
.image-text{
    max-width: 95%;
    padding: 40px;
}
.text-medium{
    font-size: 30px !important;
}
.text-description{
    padding: 60px 60px 0 60px;
    margin-top: -8px;
}
@media (max-width: 575.98px){
    .text-medium {
        font-size: 23px !important;
    }
    .text-description {
        padding: 5px 5px 0 5px !important;
         margin-top: -8px;
    }
}
.carousel-control-prev {
    width: 5% !important;
}
.carousel-control-next {
    width: 5% !important;
}
.carousel-control-next-icon, .carousel-control-prev-icon {
    vertical-align: -webkit-baseline-middle !important;
}

</style>


