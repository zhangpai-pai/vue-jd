import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'
import Cata from '@/views/cata/Cata.vue'
import Jdm from '@/views/jdm/Jdm.vue'
import Cart from '@/views/cart/Cart.vue'
import Mine from '@/views/mine/Mine.vue'
import Login from '@/views/login/Login.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/cata', component: Cata },
        { path: '/jdm', component: Jdm },
        { path: '/cart', component: Cart },
        { path: '/mine', component: Mine },
        { path: '/login', component: Login }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.path == '/login') {
        console.log("未登录")
        next()
    } else {
        let res = localStorage.getItem("login")
        if (res && JSON.parse(res).isLogin) {
            next()
            console.log("已登录")
        } else {
            next('/login')
        }
    }
})
export default router 