import Vue from 'vue';
import Router from 'vue-router';
// import store from '@/plugins/vuex';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    { path: '/home', redirect: '/' },
    { path: '/index', redirect: '/' },
    {
      path: '/',
      name: 'PageHome',
      component: () => import('@/views/pages/Home.vue'),
      meta: {
        layout: 'Fluid'
      }
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: () => import('@/views/pages/About.vue'),
      meta: {
        layout: 'Sidebar',
        sidebarComponents: [
          import('@/views/components/SidebarA.vue'),
          import('@/views/components/SidebarB.vue')
        ],
        navbarIndex: 0
      }
    },
    {
      path: '/gallery',
      name: 'PageGallery',
      component: () => import('@/views/pages/Gallery.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/map',
      name: 'PageMap',
      component: () => import('@/views/pages/Map.vue'),
      meta: { layout: 'Default' }
    },
    {
      path: '/menu',
      name: 'PageMenu',
      component: () => import('@/views/pages/Menu.vue'),
      meta: { layout: 'Default', navbarIndex: 1 }
    },
    {
      path: '/recipes',
      name: 'PageRecipes',
      component: () => import('@/views/pages/Recipes.vue'),
      meta: { layout: 'Default', navbarIndex: 2 }
    },
    {
      path: '/recipes/:id',
      name: 'PageRecipe',
      component: () => import('@/views/pages/Recipe.vue'),
      meta: {
        layout: 'Sidebar',
        sidebarComponents: []
      },
      beforeEnter(to, from, next) {
        // const recipe = store.getters.getRecipeById(to.params.id);
        next();
      }
    },
    {
      path: '/shop',
      name: 'PageShop',
      component: () => import('@/views/pages/Shop.vue'),
      meta: { layout: 'Default', navbarIndex: 3 }
    },
    {
      path: '*',
      name: 'PageError404',
      component: () => import('@/views/pages/Error404.vue'),
      meta: { layout: 'Default' }
    }
  ]
});
