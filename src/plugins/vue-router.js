import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/home', redirect: { name: 'RouteHome' } },
    { path: '/index', redirect: { name: 'RouteHome' } },
    { path: '/main', redirect: { name: 'RouteHome' } },
    {
      path: '/',
      name: 'RouteHome',
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
      name: 'RouteAbout',
      component: () => import('@/views/pages/About.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/menu',
      name: 'RouteMenuArchive',
      component: () => import('@/views/pages/MenuArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/menu/:id',
      name: 'RouteMenuSingle',
      component: () => import('@/views/pages/MenuSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/recipe',
      name: 'RouteRecipeArchive',
      component: () => import('@/views/pages/RecipeArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/recipe/:id',
      name: 'RouteRecipeSingle',
      component: () => import('@/views/pages/RecipeSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/shop',
      name: 'RouteShopArchive',
      component: () => import('@/views/pages/ShopArchive.vue'),
      meta: { layout: 'Fluid' }
    },
    {
      path: '/shop/:id',
      name: 'RouteShopSingle',
      component: () => import('@/views/pages/ShopSingle.vue'),
      meta: { layout: 'Fluid' },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '*',
      name: 'RouteError404',
      component: () => import('@/views/pages/Error404.vue'),
      meta: { layout: 'Default' }
    }
  ]
});
