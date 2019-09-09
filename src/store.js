import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload = {}) {
      state.count += payload.number || 1
    },
    decrement (state) {
      state.count--
    }
  },
  getters: {
    getDouble (state) {
      return state.count * 2
    }
  },
  actions: {
    incrementAsync (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment', payload)
          resolve()
        }, 2000)
      })
    }
  }
})

export default store
