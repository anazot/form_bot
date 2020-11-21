import Vue from 'vue'
import Router from 'vue-router'
import store from './store/index.js'
import Login from './components/Login.vue'
import Main from "./components/Main.vue";
import Register from "@/components/Register";

Vue.use(Router)
const Authenticated = (to, from, next) => {
    if (store.getters.isLogged){
        next()
        return
    }
    next('/')
}
const notAuthenticated = (to, from, next) => {
    if (!store.getters.isLogged){
        next()
        return
    }
    next('/main')
}

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            component: Login,
            beforeEnter: notAuthenticated
        },
        {
            path: '/register',
            component: Register,
            beforeEnter: notAuthenticated
        },
        {
            path: '/main',
            component: Main,
            beforeEnter: Authenticated,
            meta:{
                requiresAuth: true
            }
        },
    ]
})
router.beforeEach((to, from,  next) => {
    if( to.matched.some(record => record.meta.requiresAuth)){
        if(store.getters.isLogged){
            next()
            return
        }
        next('/')}
    else{
        next()
    }
})
export default router;