<template>
    <div>
        <div class="bd-example-2">
            <div id="slide2" class="carousel slidehb20s" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#slide2" data-slide-to="0" class="active"></li>
                    <li data-target="#slide2" data-slide-to="1"></li>
                    <li data-target="#slide2" data-slide-to="2"></li>
                       <li data-target="#slide2" data-slide-to="3"></li>
                          <li data-target="#slide2" data-slide-to="4"></li>
                             <li data-target="#slide2" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/cars/hb20s/slider/6.jpg'" class="d-block w-100" alt="Hyundai Grand i10">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20s/slider/1.jpg'" class="d-block w-100" alt="Hyundai Accent">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20s/slider/2.jpg'" class="d-block w-100" alt="Hyundai HB20X">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20s/slider/3.jpg'" class="d-block w-100" alt="Santa Fe 2019">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20s/slider/4.jpg'" class="d-block w-100" alt="New Accent">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> -->
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#slide2" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
                <a class="carousel-control-next" href="#slide2" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
</template>

<style>
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
</style>


