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
      component: () => import('@/views/Home.vue')
    },
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
      path: '/map',
      name: 'ViewMap',
      component: () => import('@/views/Map.vue')
    },
    {
      path: '/menu',
      name: 'ViewMenu',
      component: () => import('@/views/Menu.vue')
    },
    {
      path: '/recipes',
      name: 'ViewRecipes',
      component: () => import('@/views/Recipes.vue')
    },
    {
      path: '/shop',
      name: 'ViewShop',
      component: () => import('@/views/Shop.vue')
    },
  ]
});
