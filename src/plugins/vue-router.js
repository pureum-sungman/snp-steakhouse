import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: ['/home', '/index', '/main'],
      name: 'PageHome',
      component: () => {
        // BS4 'md' 사이즈 기준으로 윈도우 크기에 따라서 각각 다른 페이지 호출
        return window.innerWidth <= 768
          ? import('@/views/pages/About.vue')
          : import('@/views/pages/Home.vue');
      },
      meta: { layout: 'Fluid' }
    },
    {
      path: '/about',
      name: 'PageAbout',
      component: () => import('@/views/pages/About.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/menu',
      name: 'PageMenuArchive',
      component: () => import('@/views/pages/MenuArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/menu/:id',
      name: 'PageMenuSingle',
      component: () => import('@/views/pages/MenuSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/recipe',
      name: 'PageRecipeArchive',
      component: () => import('@/views/pages/RecipeArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/recipe/:id',
      name: 'PageRecipeSingle',
      component: () => import('@/views/pages/RecipeSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/shop',
      name: 'PageShopArchive',
      component: () => import('@/views/pages/ShopArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/shop/:id',
      name: 'PageShopSingle',
      component: () => import('@/views/pages/ShopSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '*',
      name: 'PageError404',
      component: () => import('@/views/pages/Error404.vue'),
      meta: { layout: 'Default' }
    }
  ]
});
