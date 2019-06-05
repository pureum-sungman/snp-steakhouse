import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/about',
      name: 'ViewAbout',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/gallery',
      name: 'ViewGallery',
      component: () => import('@/views/Gallery.vue')
    },
    {
      path: '/',
      name: 'ViewHome',
      component: () => import('@/views/Home.vue')
    },
  ]
});
