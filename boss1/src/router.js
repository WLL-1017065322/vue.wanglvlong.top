import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Joblist from './views/Joblist.vue';
import Company from './views/Company.vue';
import Message from './views/Message.vue';
import Aboutme from './views/Aboutme.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  // linkActiveClass: 'active', 有bug
  linkExactActiveClass: 'router-link-active',

  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/joblist',
          name: 'joblist',
          component: Joblist,
        },
        {
          path: '/company',
          name: 'company',
          component: Company,
        },
        {
          path: '/message',
          name: '/message',
          component: Message,
        },
        {
          path: '/aboutme',
          name: 'aboutme',
          component: Aboutme,
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: Register,

    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
