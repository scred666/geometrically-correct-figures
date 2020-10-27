import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { validation } from '@/utils/validators'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    figure: {
      name: 'rectangle',
      src: require('@/assets/img/rect.svg'),
      params: {
        height: 4,
        width: 4
      }
    }
  },
  mutations: {
    UPDATE_FIGURE: (state, payload) => {
      // state.figure.name = payload.name
      // state.figure.params = payload.params
      state.figure = payload
    },
    UPDATE_FIGURE_PARAM: (state, payload) => {
      state.figure.params[payload.param] = payload.value
    }
  },
  actions: {
    setFigureParam ({ state, commit }, payload) {
      let allowUpdate = true
      if (state.figure.validation) {
        allowUpdate = validation(state.figure.params, payload, state.figure.name)
      }
      // const allowUpdate = state.figure.validation && validation(state.figure.params, payload, state.figure.name)
      if (allowUpdate) commit('UPDATE_FIGURE_PARAM', payload)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
