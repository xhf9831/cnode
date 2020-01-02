import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import common from '../components/Structure'
import details from '../views/details/Detail'
import login from '../views/login/Login'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: common,
        children: [{
            path: '',
            name: 'Home',
            component: Home
        }]
    },
    {
        path: '/detail',
        component: common,
        children: [{
            path: '',
            name: 'detail',
            component: details
        }]

    },
    {
        path: '/login',
        name: 'login',
        component: login
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router