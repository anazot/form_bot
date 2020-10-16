import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

