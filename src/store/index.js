import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     
  },
  mutations: {

  },
  actions: {
    signup({commit},user){
      return new Promise((resolve, reject) => {
        commit('auth_load')
        axios({
          url: 'auth',
          data: user,
          method: 'POST'
        })
            .then( response => {
              let token = response.data.token
              localStorage.setItem('token', token)
              resolve(response)
            })
            .catch( error => {
              localStorage.removeItem('token')
              reject(error)
            })

      })
    }
  },
  modules: {
  }
})
