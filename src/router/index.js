import Vue from "vue";
import Router from "vue-router";



Vue.use(Router)


const routers=[
    {
        path:'',
        redirect: '/home',
    },
    {
        path:'/main',
        component:()=>import('../pages/Main'),
        children:[
            {
                path:'/home',
                component:()=>import('../pages/Home'),
                meta: { index: 0 }
            },
            {
                path:'/fenlei',
                component: () => import('@/pages/Fenlei'),
                meta: { index:1 }
            },
            {
                path:'/paycar',
                component: () => import('@/pages/Paycar'),
                meta: { index:2 }
            },
            {
                path:'/user',
                component: () => import('@/pages/User'),
                meta: { index:3 }
            },
        ]
    },

]

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err)
}


const router=new Router({
    routes:routers,
    mode:'history'
})



export default router