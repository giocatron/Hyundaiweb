<template>
    <div>
        <div class="bd-example-2">
            <div id="hb20xslide" class="carousel slidehb20x" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#hb20xslide" data-slide-to="0" class="active"></li>
                    <li data-target="#hb20xslide" data-slide-to="1"></li>
                    <li data-target="#hb20xslide" data-slide-to="2"></li>
                    <!--<li data-target="#hb20xslide" data-slide-to="1"></li>
                    <li data-target="#hb20xslide" data-slide-to="2"></li>-->
                </ol>
                <div class="carousel-inner">
                    <!--  <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/suv/hb20x/slider/consoladelujo.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Consola de lujo</h2>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
                        </div>
                    </div>-->
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/suv/hb20x/slide2/hb20x-interior-1.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Belleza y funcionalidad.</h2>
                                <p>La consola central con apoyabrazos y el ajuste de altura del asiento garantizan el bienestar del pasajero y del conductor. </p> 
                        </div>
                    </div>
                     <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/slide2/hb20x-interior-2.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Stop & Go para reducir el consumo de combustible.</h2>
                            <p>Algunas versiones están equipadas con el sistema de arranque y parada del motor, Stop & Go, que detecta cuando el automóvil se detiene por completo y entra en estado de espera. </p>
                        </div>
                    </div>
                     <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/slide2/hb20x-interior-3.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Conducción segura.</h2>
                                <p>La dirección eléctrica progresiva es más ligera cuando el automóvil es más lento y más rígido a velocidades más altas.</p> 
                        </div>
                    </div>
                    <!--<div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/slider/bloqueocentral.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Bloqueo central</h2>
                               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
                        </div>
                    </div>-->
                    <!--<div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/slider/3.jpeg'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/suv/hb20x/slider/4.jpeg'" class="d-block w-100" alt="HB20">
                        <div class="carousel-caption d-none d-md-block">
                             <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> 
                        </div>
                    </div>-->
                </div>
                <a class="carousel-control-prev" href="#hb20xslide" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
                <a class="carousel-control-next" href="#hb20xslide" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
</template>

<style>
.home-slider .home-carousel-caption {
    position: initial;
    right: 15%;
    bottom: 45%;
    left: 15%;
    z-index: 10;
    padding-top: 30px;
    padding-bottom: 30px;
    color: #000;
    font-family: 'hyundai_sans_head_krmedium', sans-serif !important;
    text-align: center;
}

.carousel-caption{
    font-family: 'hyundai_sans_head_krmedium', sans-serif !important;
    padding-top: 30px !important;
    padding-bottom: 30px !important;
    color: #000 !important;
    position: initial !important;
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
.carousel-indicators{
    bottom: 170px !important;
}
</style>


