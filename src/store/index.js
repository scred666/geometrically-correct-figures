import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { validation } from '@/utils/validators'
import { shapes } from '@/utils/figures'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    figure: {
      name: shapes.rectangle,
      params: {
        height: 4,
        width: 4
      }
    }
  },
  mutations: {
    UPDATE_FIGURE: (state, { name, params, validation }) => {
      state.figure.name = name
      state.figure.params = { ...params }
      validation
        ? Vue.set(state.figure, 'validation', validation)
        : Vue.delete(state.figure, 'validation')
    },
    UPDATE_FIGURE_PARAM: (state, { param, value }) => {
      state.figure.params[param] = value
    }
  },
  actions: {
    setFigureParam ({ state, commit }, payload) {
      let allowUpdate = true
      if (state.figure.validation) {
        allowUpdate = validation(state.figure.params, payload, state.figure.name)
      }
      if (allowUpdate) commit('UPDATE_FIGURE_PARAM', payload)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
