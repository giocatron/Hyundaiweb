<template>
    <div class="footer-hyundai py-4">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <img src="@/assets/isotype.svg" alt="">
                </div>
                <div class="col-md-6">
                    <ul class="navbar-nav d-flex flex-row menu-footer">
                        <li class="nav-item active ">
                            <router-link tag="a" to="/" class="nav-link">Inicio</router-link>
                        </li>
                        <li class="divider-vertical"></li>
                        <li class="nav-item active">
                            <router-link tag="a" to="/nosotros" class="nav-link">Nosotros</router-link>
                        </li>
                        <li class="divider-vertical"></li>
                        <li class="nav-item active">
                        <router-link tag="a" to="/repuestos" class="nav-link">Repuestos</router-link>
                        </li>
                        <li class="divider-vertical"></li>
                        <li class="nav-item active">
                                   <router-link tag="a" to="/servicios" class="nav-link">Servicios</router-link>
                        </li>
                        <li class="divider-vertical"></li>
                        <li class="nav-item active">
                            <router-link tag="a" to="/contacto" class="nav-link">Contacto</router-link>
                        </li>
                    </ul>
                    <div class="copyright mt-3">Todos los derechos reservados a  @Hyundai_automotorparaguay</div>
                </div>
                <!--<div class="col-md-2">
                    <a target="_blank" href="https://api.whatsapp.com/send?phone=595981680005" class="whatsapp-icon-link">
                        <img :src="'../static/img/footer/whatsapp.png'" class="img-whatsapp">
                    </a>
                </div>-->
                <div class="col-md-2 text-right">
                    <div> <img src="@/assets/img/icons/footer/call.svg" alt="Contactar al numero" class="icon-networks mr-2"><a href="tel:+595981680005">0981680005</a></div>
                    <div class="d-flex justify-content-end">
                        <a href="https://www.facebook.com/hyundaiparaguay/"><img src="@/assets/img/icons/footer/facebook.svg" alt="Facebook boton para ir a redes" class="icon-networks"></a>
                        <a href="https://www.youtube.com/channel/UCtq8tnZ9DiA_IZd88o35iAA"><img src="@/assets/img/icons/footer/youtube.svg" alt="Youtube boton para ir a redes" class="icon-networks"></a>
                         <a href="https://www.instagram.com/hyundaipy/?hl=es-la"><img src="@/assets/img/icons/footer/instagram.svg" alt="Instagram boton para ir a redes" class="icon-networks ml-2"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
