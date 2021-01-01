<template>
    <div>
        <div class="bd-example-2">
            <div id="slide10" class="carousel slide10" data-ride="carousel10">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/suv/hb20x/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/suv/hb20x/elegancia/hb20x-phone.jpeg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Conéctese siempre.</h3>
                                <p class="text-left">Todos los pasajeros podrán cargar su teléfono celular rápidamente. USB para carga rápida ayudará en esta función. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/suv/hb20x/elegancia/hb20x-start.jpeg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Instalaciones al volante.</h3>
                                <p class="text-left">Al ingresar a la cabina del HB20X Nueva Generación, simplemente presione el botón de arranque del motor, ubicado en el lado derecho del volante, para comenzar a conducir. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/suv/hb20x/elegancia/hb20x-door.jpeg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Manijas de puertas nuevas.</h3>
                                <p class="text-left">Las nuevas manijas de las puertas ofrecen un diseño más elegante y práctico para abrir la puerta con la llave cara a cara. </p>    
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/bg.jpg'" class="d-block w-100" alt="Hyundai hb20">
                        <div class="carousel-caption-1">
                            <div class="w-50">
                                <img :src="'../static/img/section_transport/suv/hb20x/elegancia/hb20x-key.jpeg'" class="image-text" alt="Hyundai hb20">
                            </div>
                        </div>
                        <div class="carousel-caption-2">
                            <div class="text-description">
                                <h3 class="subtitle text-medium text-left">Llave inteligente</h3>
                                <p class="text-left">Una alternativa más práctica y tecnológica para que el conductor abra las puertas es la Smart Key. </p>    
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


