import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import home from './modules/home'

Vue.use(Vuex)

// 装配 store
export default new Vuex.Store({
  getters,
  actions,
  mutations,
  modules: {
    home
  },
  strict: process.env.NODE_ENV !== 'production'
})
