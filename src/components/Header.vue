<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="nav-bar-container  w-100 container">
            <router-link tag="a" to="/">
                <img src="@/assets/logo_vertical.svg" alt="Logo Hyundai" class="logo-vertical">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                                        <span class="navbar-toggler-icon"></span>
                                                                      </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item close-point-child-principal active ">
                        <router-link tag="a" to="/" class="nav-link">Inicio</router-link>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Showroom</a>
                        <div class="dropdown-menu close-point-child-notprincipal">
                            <div class="dropdown-item pointer" tag="a" v-on:click="gotosection('cars')">Autos</div>
                            <div class="dropdown-item pointer" tag="a" v-on:click="gotosection('suv')">Suv</div>
                            <div class="dropdown-item pointer" tag="a" v-on:click="gotosection('comercial')">Comercial</div>
                            <div class="dropdown-item pointer" tag="a" v-on:click="gotosection('buses')">Buses</div>
                            <div class="dropdown-item pointer" tag="a" v-on:click="gotosection('trucks')">Camiones</div>
                        </div>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Postventa</a>
                        <div class="dropdown-menu close-point-child-notprincipal">
                            <router-link class="dropdown-item" to="/repuestos">Repuestos</router-link>
                            <router-link class="dropdown-item" to="/servicios">Servicios</router-link>
                        </div>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item close-point-child-principal active">
                        <router-link tag="a" to="/news" class="nav-link">Noticias</router-link>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Promociones</a>
                        <div class="dropdown-menu close-point-child-notprincipal">
                       <!-- <router-link class="dropdown-item" to="/promociones-50">Promo 50 años</router-link>-->
                              <router-link class="dropdown-item" to="/promociones-hb20h">Promo HB20h</router-link>
                        </div>
                    <li class="divider-vertical"></li>
                    <li class="nav-item close-point-child-principal active">
                        <router-link tag="a" to="/nosotros" class="nav-link">Nosotros</router-link>
                    </li>
                    <li class="divider-vertical"></li>
                    <li class="nav-item close-point-child-principal active">
                        <router-link tag="a" to="/tour" class="nav-link">Tour Virtual</router-link>
                    </li>
                    
                   <!-- <li class="divider-vertical"></li>
                    class="nav-link">Agende su cita</a> 
                       <a href="#" target="_blank" class="nav-link">Agende su cita</a>
                    </li> -->
    
                    <li class="divider-vertical"></li>
                    <li class="nav-item close-point-child-principal active">
                        <router-link tag="a" to="/contacto" class="nav-link">Contacto y Sucursales</router-link>
                    </li>
                    <li class="budget close-point-child-principal">
                        <router-link tag="a" class="pointer" to="/cotizacion">Cotizar</router-link>
                    </li>
                    <li class="nav-item close-point-child-principal active">
                        <!-- <a href="https://wa.me/595981680005" target="_blank" class="pointer" to="/cotizacion">
                                            <img src="@/assets/img/icons/header/contactcenter.svg" alt="Contact Center" class="contact-center">
                                        </a> -->
                        <div @click="showAlert">
                            <img src="@/assets/img/icons/header/contactcenter.svg" alt="Contact Center" class="contact-center">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
var VueScrollTo = require('vue-scrollto');
var options = {
    easing: 'ease-in',
    offset: -199,
    force: true,
    cancelable: true,
    onStart: function(element) {
        // scrolling started
    },
    onDone: function(element) {
        // scrolling is done
    },
    onCancel: function() {
        // scrolling has been interrupted
    },
    x: false,
    y: true
}
export default {
    name: 'Header',
    data() {
        return {
            test: "test texto"
        }
    },
    mounted() {
        
        this.$nextTick(() => {
            console.log(this.$router.currentRoute.path)
          
            $('.close-point-child-principal>a').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });
            $('.close-point-child-notprincipal>.dropdown-item').on('click', function() {
                $('.navbar-collapse').collapse('hide');
            });
        })
    },
    methods: {
        async sendPhone(name, phone) {
            try {
                let res = await this.axios.post(`http://servermultifuncion.kumandaserver.com/api/public/_/items/hyundai_contact_center`, { "status": "published", "name": name, "phone": phone })
            } catch (e) {
                console.log(e)
            }
        },
        gotosection(value) {
            switch (value) {
                case "cars":
                    this.$store.state.cars = true
                    this.$store.state.suv = this.$store.state.comercial = this.$store.state.buses = this.$store.state.trucks = false
                    break;

                case "suv":
                    this.$store.state.suv = true
                    this.$store.state.cars = this.$store.state.comercial = this.$store.state.buses = this.$store.state.trucks = false
                    break;
                case "comercial":
                    this.$store.state.comercial = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.buses = this.$store.state.trucks = false
                    break;
                case "buses":
                    this.$store.state.buses = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.comercial = this.$store.state.trucks = false
                    break;
                case "trucks":
                    this.$store.state.trucks = true
                    this.$store.state.cars = this.$store.state.suv = this.$store.state.comercial = this.$store.state.buses = false
                    break;
                default:
                    //Sentencias_def ejecutadas cuando no ocurre una coincidencia con los anteriores casos
                    break;

            }
            if (this.$router.currentRoute.path == '/') {
                VueScrollTo.scrollTo('#showroom', 500, options);
            } else {
                this.$router.push({ path: '/', hash: '#showroom' })
            }

        },
        showAlert() {
            let that = this;
            // Use sweetalert2
            // this.$swal('Formulario');
            this.$swal.mixin({
                input: 'text',
                confirmButtonText: 'Siguiente &rarr;',
                cancelButtonText: "Cancelar",
                showCancelButton: true,
                progressSteps: ['1', '2']
            }).queue([{
                    title: 'Conversa con nosotros por Whatsapp.',
                    text: 'Coloque su nombre y apellido.'
                },
                'Teléfono'
            ]).then((result) => {
                if (result.value) {
                    try {
                        that.sendPhone(result.value[0], result.value[1])
                        this.$swal.fire({
                            title: 'Redirigiendo!',
                            html: 'Tus datos: <pre>' +
                                result.value +
                                '</pre>',
                            confirmButtonText: 'Ir a whatsapp!'
                        }).then(function() {
                            window.location = 'https://wa.me/595981680005'
                        })
                    } catch (e) {
                        console.log(e)
                    }

                }
            })
        }

    }
}
</script>
