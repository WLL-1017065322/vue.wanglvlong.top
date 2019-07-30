import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';
import Search from './views/Search.vue';
import Order from './views/Order.vue';
import AboutMe from './views/AboutMe.vue';
import Login from './views/Login.vue';
import Shop from './views/Shop/Shop.vue';
import ShopGoods from './views/Shop/ShopGoods/ShopGoods.vue';
import ShopRatings from './views/Shop/ShopRating/ShopRating.vue';
import ShopInfo from './views/Shop/ShopInfo/ShopInfo.vue';

import ceshi from './views/ceshi.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/main',
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: '/aboutme',
      name: 'AboutMe',
      component: AboutMe,
      meta: {
        showFooter: true,
      },
    },

    {
      path: '/ceshi',
      component: ceshi,
    },
    // {
    //   path: '/ceshiT',
    //   component: ceshiT,
    // },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/shop',
      // name: 'Shop', 也就是说在 子路由 里如有有默认路由的话，父路由不需要设置 name 字段
      component: Shop,
      children: [
        { path: '/shop/goods', component: ShopGoods },
        { path: '/shop/ratings', component: ShopRatings },
        { path: '/shop/info', component: ShopInfo },
        { path: '', redirect: '/shop/goods' },
      ],
    },
  ],
});
