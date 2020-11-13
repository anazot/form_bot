import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      user: {},
      status: '',
      token: localStorage.getItem('token')|| ''

  },
  mutations: {
      load_auth(state){
          state.status = 'loading'
      },
      success_auth(state,user,token ){
          state.user = user;
          state.token = token;
          state.status = 'success'
      },
      error_auth(state) {
          state.status = 'error'
      },
      logout(state){
          state.token = ''
          state.status = ''
      }
  },
  getters:{
      isLogged: state => !!state.token,
      notLogged: state => state.status
  },
  actions: {
    signup({commit},user){
      return new Promise((resolve, reject) => {
        commit('load_auth')
        axios({
            url: '',
            data: user,
            method: 'POST'
        })
            .then( response => {
                let token = response.data.token
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('success_auth',user, token)
                resolve(response)
            })
            .catch( error => {
                commit('error_auth')
                localStorage.removeItem('token')
                reject(error)
            })

      })
    },
    logout({commit}){
        return new Promise ((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            delete axios.default.headers.common['Authorization']
            resolve()
        })
    }
    },
  modules: {

  }
})
