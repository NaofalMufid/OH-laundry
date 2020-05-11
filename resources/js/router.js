// IMPORT SECTION
import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import store from './store.js'

Vue.use(Router)

// define route

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
});

// navigation guards
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        let auth = store.getters.requiresAuth
        if (!auth) {
            next({ name: 'login' })
        }else{
            next()
        }
    } else {
        next()
    }
})

export default router