import { createRouter, createWebHashHistory } from 'vue-router';
const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',component:()=>import('../pages/Home.vue'),},
    {path:'/businesslist',component:()=>import('../pages/businessList.vue'),},
    {path:'/orderlist',component:()=>import('../pages/orderList.vue'),},
    {path:'/login',component:()=>import('../pages/login.vue'),},
    {path:'/register',component:()=>import('../pages/register.vue'),},
    { path: '/businessDetail/:item',
        name: 'BusinessDetail', // 给路由添加名称
        component:()=>import('../pages/businessDetail.vue')},
];







const router=createRouter(
    {
        history:createWebHashHistory(),
        routes,
    }
);
export default router;