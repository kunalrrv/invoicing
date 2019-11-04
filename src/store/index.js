import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    customers: []
  },
  getters: {
    customerInfo: state => {
      return state.customers
    }
  },
  mutations: {
    SET_CUSTOMER_INFO (state, payload) {
      state.customers = payload.customers
    }
  },
  actions: {
    async fetchCustomerInfo() {
      let endpoint = process.env.VUE_APP_CUSTOMER_ENDPOINT
      let response = axios.get(endpoint)
      return response
    },
    setCustomerInfo({ commit }, payload) {
      commit('SET_CUSTOMER_INFO', payload)
    }
  },
  modules: {
  }
})
