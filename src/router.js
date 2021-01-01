import Vue from 'vue'
import Router from 'vue-router'

import Proximamente from './views/Proximamente.vue'
import Index from './views/Index.vue'
import AboutUs from './views/AboutUs.vue'
import Spares from './views/Spares.vue'
import Services from './views/Services.vue'
import Promotionsh20 from './views/Promotions.vue'
import PromotionsH50 from './views/PromotionsH50.vue'
import Donde from './views/Donde.vue'
import News from './views/News.vue'
import Contact from './views/Contact.vue'
import Tour from './views/tour.vue'
import Gracias from './views/Gracias.vue'
import Price from './views/Price.vue'


// cars
import Accent from './views/sections/cars/accent/Car.vue'
import NewAccent from './views/sections/cars/new_accent/Car.vue'
import Grand_i10 from './views/sections/cars/grand_i10/Car.vue'
import Ioniq from './views/sections/cars/ioniq/Car.vue'
import Hb20s from './views/sections/cars/hb20s/Car.vue'
import Hb20 from './views/sections/cars/hb20/Car.vue'
//suv
import All_new_santa_fe from './views/sections/suv/all_new_santa_fe/Car.vue'
import Creta from './views/sections/suv/creta/Car.vue'
import Grand_santa_fe from './views/sections/suv/grand_santa_fe/Car.vue'
import Hb20x from './views/sections/suv/hb20x/Car.vue'
import Palisade from './views/sections/suv/palisade/Car.vue'
import Venue from './views/sections/suv/venue/Car.vue'
import I20_active from './views/sections/suv/i20_active/Car.vue'
import Santa_fe from './views/sections/suv/santa_fe/Car.vue'
import Tucson from './views/sections/suv/tucson/Car.vue'
import NewTucson from './views/sections/suv/new_tucson/Car.vue'
// comercial
import H_100 from './views/sections/comercial/h_100/Car.vue'
import H1 from './views/sections/comercial/h1/Car.vue'
// Buses
import County from './views/sections/buses/county/Car.vue'
import Super_aero_city from './views/sections/buses/super_aero_city/Car.vue'
import h350_bus from './views/sections/buses/h350_bus/Car.vue'



// Trucks
import Cargo from './views/sections/trucks/cargo/Car.vue'
import Chasis_cabina from './views/sections/trucks/chasis_cabina/Car.vue'
import Furgon_refrigerado from './views/sections/trucks/furgon_refrigerado/Car.vue'
import Furgon from './views/sections/trucks/furgon/Car.vue'
import H350 from './views/sections/trucks/h350/Car.vue'
import Mezclador from './views/sections/trucks/mezclador/Car.vue'
import Nuevo_xcient from './views/sections/trucks/nuevo_xcient/Car.vue'
import Tracto_camion from './views/sections/trucks/tracto_camion/Car.vue'
import Volquete from './views/sections/trucks/volquete/Car.vue'


import Camionesybuses from './views/Camionesybuses.vue'

import Cars from './views/Cars.vue'
import Suv   from './views/Suv.vue'
import Comercial   from './views/Comercial.vue'
import Camiones   from './views/Camiones.vue'
import Buses   from './views/Buses.vue'

import CamioBusPromo from "./views/camionesybuses/CamioBusPromo";
import MapHome from "./components/MapHome";

import test from './views/test.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/nosotros',
        name: 'about',
        component: AboutUs
      },
      {
        path: '/repuestos',
        name: 'spares',
        component: Spares
      },
      {
        path: '/servicios',
        name: 'services',
        component: Services
      },
        {
        path: '/promociones-hb20h',
        name: 'promotions',
        component: Promotionsh20
      },
      {
        path: '/promociones-50',
        name: 'promotions',
        component: PromotionsH50
      },
      {
        path: '/news',
        name: 'news',
        component: News
      },
      {
        path: '/proximamente',
        name: 'proximamente',
        component: Proximamente
      },
      {
        path: '/noticiasynovedades',
        name: 'news',
        component: News
      },
      {
        path: '/contacto',
        name: 'contact',
        component: Contact
      },
      {
        path: '/tour',
        name: 'tour',
        component: Tour
      },
      {
        path: '/cotizacion',
        name: 'price',
        component: Price
      },
      {
        path: '/test',
        name: 'test',
        component: test
      },
      {
        path: '/donde-encontrarnos',
        name: 'donde',
        component: Donde
      },
      // cars
      {
        path: '/accent',
        name: 'accent',
        component: Accent
      },
      {
        path: '/coches/new_accent',
        name: 'new_accent',
        component: NewAccent
      },
      {
        path: '/grand_i10',
        name: 'grand_i10',
        component: Grand_i10
      },
      {
        path: '/coches/ioniq',
        name: 'ioniq',
        component: Ioniq
      },
      {
        path: '/coches/hb20',
        name: 'hb20',
        component: Hb20
      },
      {
        path: '/coches/hb20s',
        name: 'hb20s',
        component: Hb20s
      },
      // suv
      {
        path: '/suv/all-new-santa-fe',
        name: 'all_new_santa_fe',
        component: All_new_santa_fe
      },
      {
        path: '/suv/creta',
        name: 'creta',
        component: Creta
      },
      {
        path: '/grand_santa_fe',
        name: 'grand_santa_fe',
        component: Grand_santa_fe
      },
      {
        path: '/suv/hb20x',
        name: 'hb20x',
        component: Hb20x
      },
      {
        path: '/suv/palisade',
        name: 'palisade',
        component: Palisade
      },
      {
        path: '/suv/venue',
        name: 'venue',
        component: Venue
      },
      {
        path: '/i20_active',
        name: 'i20_active',
        component: I20_active
      },
      {
        path: '/santa_fe',
        name: 'santa_fe',
        component: Santa_fe
      },
      {
        path: '/suv/tucson',
        name: 'tucson',
        component: Tucson
      },
      {
        path: '/suv/new-tucson',
        name: 'newtucson',
        component: NewTucson
      },
      // comercial
      {
        path: '/comercial/h-100',
        name: 'h_100',
        component: H_100
      },
      {
        path: '/comercial/h1',
        name: 'h1',
        component: H1
      },
      {
        path: '/buses/county',
        name: 'county',
        component: County
      },
      {
        path: '/buses/h350_bus',
        name: 'h350_bus',
        component: h350_bus
      },
      {
        path: '/buses/super-aero-city',
        name: 'super_aero_city',
        component: Super_aero_city
      },
      // trucks
      {
        path: '/camiones/cargo',
        name: 'cargo',
        component: Cargo
      },
      {
        path: '/camiones/chasis_cabina',
        name: 'chasis_cabina',
        component: Chasis_cabina
      },
      {
        path: '/camiones/furgon_refrigerado',
        name: 'furgon_refrigerado',
        component: Furgon_refrigerado
      },
      {
        path: '/camiones/furgon',
        name: 'furgon',
        component: Furgon
      },
      {
        path: '/camiones/350',
        name: 'h350',
        component: H350
      },
      {
        path: '/camiones/mezclador',
        name: 'mezclador',
        component: Mezclador
      },
      {
        path: '/camiones/nuevo_xcient',
        name: 'nuevo_xcient',
        component: Nuevo_xcient
      },
      {
        path: '/camiones/tracto_camion',
        name: 'tracto_camion',
        component: Tracto_camion
      },
      {
        path: '/camiones/volquete',
        name: 'volquete',
        component: Volquete
      },
      {
        path: '/camionesybuses',
        name: 'camionesybuses',
        component: Camionesybuses
      },
      {
        path: '/coches',
        name: 'cars',
        component: Cars
      },
      {
        path: '/suv',
        name: 'suv',
        component: Suv
      },
      {
        path: '/comercial',
        name: 'comercial',
        component: Comercial
      },
      {
        path: '/camiones',
        name: 'camiones',
        component: Camiones
      },
      {
        path: '/buses',
        name: 'buses',
        component: Buses
      },
      {
        path: '/gracias',
        name: 'gracias',
        component: Gracias
      },
      {
        path: '/camionesybuses/promociones',
        component: CamioBusPromo
      },
      {
        path: '/map-home/:lat/:lng',
        component: MapHome
      },
      {
        path: '/*',
        redirect: { name: 'route-name' }
      }
     ],
     scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
      return { x: 0, y: 0 };
    }
    })
