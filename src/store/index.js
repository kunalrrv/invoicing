import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";
import { assign } from 'lodash-es'

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
    },
    UPDATE_CUSTOMER_INFO (state, payload) {
      let customer = state.customers.find(item => item.id === payload.id)
      assign(customer, payload)
    }
  },
  actions: {
    async fetchCustomerInfo({ commit }) {
      let endpoint = process.env.VUE_APP_CUSTOMER_ENDPOINT
      let response = await axios.get(endpoint).catch(err => {
        console.log("Err:", err)
      })
      commit('SET_CUSTOMER_INFO', response.data)
      return response.data
    },
    async updateCustomerInfo({ commit }, payload) {
      let endpoint = `${process.env.VUE_APP_CUSTOMER_ENDPOINT}/${payload.id}` // Endpoint URL
      console.log("Endpoint URL: ", endpoint)
      let finalPayload = Object.assign({}, payload)
      delete finalPayload.id;
      console.log("Payload: ", finalPayload)
      commit('UPDATE_CUSTOMER_INFO', payload)
      return payload
      // let response = axios.put(endpoint, payload)
      // return response
    }
  },
  modules: {
  }
})
