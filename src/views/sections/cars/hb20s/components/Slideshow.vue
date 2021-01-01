<template>
    <div>
        <div class="bd-example-1">
            <div id="slide1" class="carousel galer" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#slide1" data-slide-to="0" class="active"></li>
                    <li data-target="#slide1" data-slide-to="1" class=""></li>
                    
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/cars/hb20s/bg.jpg'" class="d-block w-100" alt="Hyundai HB20s">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20s/2.gif'" class="image-text" alt="Hyundai HB20s">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Deportividad al volante</h3>
                                <p class="text-left">Con la sensanción deportiva, las palancas del volante permiten un cambio seguro y libre sin quitar las manos del volante.</p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20s/bg.jpg'" class="d-block w-100" alt="Hyundai HB20s">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/cars/hb20s/1.png'" class="image-text" alt="Hyundai HB20s">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Toque moderno</h3>
                                <p class="text-left">Refinadas y de nuevo diseño, las manijas cromadas de las puertas permiten que la puerta se abra con la llave en el sitio de manera rápida y fácil.</p>    
                            </div>
                        </div>
                    </div>                                  
                </div>
                <a class="carousel-control-prev" href="#slide1" role="button" data-slide="prev">
                    <div class="btn-slider">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </div>
                </a>
                <a class="carousel-control-next" href="#slide1" role="button" data-slide="next">
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


