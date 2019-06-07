import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: () => import('@/views/pages/Home.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: () => import('@/views/pages/About.vue'),
      meta: {
        layout: 'Sidebar',
        sidebarComponents: [import('@/views/components/SidebarA.vue')]
      }
    },
    {
      path: '/gallery',
      name: 'PageGallery',
      component: () => import('@/views/pages/Gallery.vue'),
      meta: {
        layout: 'Fluid'
      }
    },
    {
      path: '/map',
      name: 'Pagemap',
      component: () => import('@/views/pages/Map.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/menu',
      name: 'PageMenu',
      component: () => import('@/views/pages/Menu.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/recipes',
      name: 'PageRecipes',
      component: () => import('@/views/pages/Recipes.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '/shop',
      name: 'PageShop',
      component: () => import('@/views/pages/Shop.vue'),
      meta: {
        layout: 'Default'
      }
    },
    {
      path: '*',
      name: 'PageError404',
      component: () => import('@/views/pages/Error404.vue'),
      meta: {
        layout: 'Default'
      }
    }
  ]
});
