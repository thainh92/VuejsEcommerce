import Vue from 'vue'
import VueRouter from 'vue-router'
import {userRoutes} from "@/pages/users";
import {orderRoutes} from "@/pages/order";
import {productRoutes} from "@/pages/product";

Vue.use(VueRouter)

const routes = [
    ...userRoutes,
    ...orderRoutes,
    ...productRoutes
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
})

export default router;