<template>
    <div>
        <div class="bd-example-2">
            <div id="slide3" class="carousel slide3bgcolor" data-ride="carousel">
                <ol class="carousel-indicators colors-indicator">
                    <li data-target="#slide3" data-slide-to="0" style="background: red;" class="active"></li>
                    <li data-target="#slide3" data-slide-to="1" style="background: black;" ></li>
                    <li data-target="#slide3" data-slide-to="2" style="background: white;" ></li>
                    <li data-target="#slide3" data-slide-to="3" style="background: #706962;" ></li>
                    <li data-target="#slide3" data-slide-to="4" style="background: #5F5F5F;" ></li>
                    <li data-target="#slide3" data-slide-to="5" style="background: #35393F;" ></li>

                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img :src="'../static/img/section_transport/cars/hb20/color/1.png'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/color/2.png'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/color/3.png'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/color/4.png'" class="d-block w-100" alt="Hyundai HB20">
                        <div class="carousel-caption d-none d-md-block">
                            <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/color/5.png'" class="d-block w-100" alt="HB20">
                        <div class="carousel-caption d-none d-md-block">
                               <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                     <div class="carousel-item">
                        <img :src="'../static/img/section_transport/cars/hb20/color/6.png'" class="d-block w-100" alt="HB20">
                        <div class="carousel-caption d-none d-md-block">
                              <!-- <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> -->
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#slide3" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
                <a class="carousel-control-next" href="#slide3" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
</template>

<style>
.colors-indicator{
        bottom: -50px !important;
}
.colors-indicator li {
    width: 25px !important;
    height: 25px !important;
    border: 2px solid #b9b9b9 !important;
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
</style>


