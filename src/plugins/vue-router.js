import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ViewHome',
      component: () => import('@/views/pages/Home.vue')
    },
    {
      path: '/about',
      name: 'ViewAbout',
      component: () => import('@/views/pages/About.vue')
    },
    {
      path: '/gallery',
      name: 'ViewGallery',
      component: () => import('@/views/pages/Gallery.vue')
    },
    {
      path: '/map',
      name: 'ViewMap',
      component: () => import('@/views/pages/Map.vue')
    },
    {
      path: '/menu',
      name: 'ViewMenu',
      component: () => import('@/views/pages/Menu.vue')
    },
    {
      path: '/recipes',
      name: 'ViewRecipes',
      component: () => import('@/views/pages/Recipes.vue')
    },
    {
      path: '/shop',
      name: 'ViewShop',
      component: () => import('@/views/pages/Shop.vue')
    },
    {
      path: '*',
      name: 'ViewError404',
      component: () => import('@/views/pages/Error404.vue')
    }
  ]
});
