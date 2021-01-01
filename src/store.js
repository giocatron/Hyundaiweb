import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  lastselection: 'cars',
  cars: true,
  suv: false,
  comercial: false,
  buses: false,
  trucks: false
}

const mutations = {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    }
  }

  
export default new Vuex.Store({
  state
})