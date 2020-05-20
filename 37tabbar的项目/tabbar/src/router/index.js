import Vue from 'vue'
import VueRouter from 'vue-router'
const home = () =>
    import ("../views/home/home");
const classify = () =>
    import ("../views/classify/classify");
const cart = () =>
    import ("../views/cart/cart");
const user = () =>
    import ("../views/user/user");

Vue.use(VueRouter)

const routes = [
    { path: '', redirect: "/home" },
    { path: '/home', component: home },
    { path: '/classify', component: classify },
    { path: '/cart', component: cart },
    { path: '/user', component: user },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router