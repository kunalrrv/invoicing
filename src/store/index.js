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
    /**
     * @description Getter for customer information from store in the state.customers
     */
    customerInfo: state => {
      return state.customers
    }
  },
  mutations: {
    /**
     * @description Mutation to set the state.customers to the payload recieved from the API Call.
     * @param {*} state 
     * @param {Object} payload Takes the payload object.
     */
    SET_CUSTOMER_INFO (state, payload) {
      state.customers = payload.customers
    },
    /**
     * @description Mutation to find the target customer object and assign the values for payload and update the store.
     * @param {*} state 
     * @param {*} payload Takes the payload object.
     */ 
    UPDATE_CUSTOMER_INFO (state, payload) {
      let customer = state.customers.find(item => item.id === payload.id)
      assign(customer, payload)
    }
  },
  actions: {
    /**
     * @description Action in the store which makes an API call to the endpoint.
     * - Once when we have the response, it commits the mutation to set the response.data onto the stores state.
     * @param {*} commit 
     */
    async fetchCustomerInfo({ commit }) {
      let endpoint = process.env.VUE_APP_CUSTOMER_ENDPOINT
      let response = await axios.get(endpoint).catch(err => {
        console.log("Err:", err)
      })
      commit('SET_CUSTOMER_INFO', response.data)
      return response.data
    },
    /**
     * @description Action which maked an API call to update the respective customer entity.
     * @param {*} commit
     * @param {*} payload Paylod object of the entity that need to be updated.
     */
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
  }
})
