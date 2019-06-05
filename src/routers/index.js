import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ViewHome',
      component: () => import(
        /* webpackChunkName: "viewHome" */
        '@/views/Home.vue'
      )
    },
    {
      path: '/about',
      name: 'ViewAbout',
      component: () => import(
        /* webpackChunkName: "viewAbout" */
        '@/views/About.vue'
      )
    }
  ]
});
