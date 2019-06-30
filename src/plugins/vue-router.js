import Vue from 'vue';
import Router from 'vue-router';
import store from '@/plugins/vuex';
import _isEqual from 'lodash/isEqual';

Vue.use(Router);

// 파라미터 (px) 기준으로 플랫폼 결정  (Mobile || Desktop)
const PLATFORM = store.getters.getPlatform(768 /* 부트스트랩 4 'md' 사이즈 */);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: ['/home', '/index', '/main'],
      name: `Page${PLATFORM}Home`,
      component: () => {
        // 'PLATFORM' 변수 기준으로 각각 다른 페이지 호출
        return _isEqual(PLATFORM, 'Mobile')
          ? import(`@/views/pages/${PLATFORM}About.vue`)
          : import(`@/views/pages/${PLATFORM}Home.vue`);
      },
      meta: { layout: `${PLATFORM}Fluid` }
    },
    {
      path: '/about',
      name: `Page${PLATFORM}About`,
      component: () => import(`@/views/pages/${PLATFORM}About.vue`),
      meta: { layout: `${PLATFORM}Fluid` }
    },
    {
      path: '/menu',
      name: `Page${PLATFORM}MenuArchive`,
      component: () => import(`@/views/pages/${PLATFORM}MenuArchive.vue`),
      meta: { layout: `${PLATFORM}Fluid` }
    },
    {
      path: '/menu/:id',
      name: `Page${PLATFORM}MenuSingle`,
      component: () => import(`@/views/pages/${PLATFORM}MenuSingle.vue`),
      meta: { layout: `${PLATFORM}Fluid` },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/recipe',
      name: `Page${PLATFORM}RecipeArchive`,
      component: () => import(`@/views/pages/${PLATFORM}RecipeArchive.vue`),
      meta: { layout: `${PLATFORM}Fluid` }
    },
    {
      path: '/recipe/:id',
      name: `Page${PLATFORM}RecipeSingle`,
      component: () => import(`@/views/pages/${PLATFORM}RecipeSingle.vue`),
      meta: { layout: `${PLATFORM}Fluid` },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '/shop',
      name: `Page${PLATFORM}ShopArchive`,
      component: () => import(`@/views/pages/${PLATFORM}ShopArchive.vue`),
      meta: { layout: `${PLATFORM}Fluid` }
    },
    {
      path: '/shop/:id',
      name: `Page${PLATFORM}ShopSingle`,
      component: () => import(`@/views/pages/${PLATFORM}ShopSingle.vue`),
      meta: { layout: `${PLATFORM}Fluid` },
      beforeEnter(to, from, next) {
        // 'id' 파라미터 검증 필요
        next();
      }
    },
    {
      path: '*',
      name: `Page${PLATFORM}Error404`,
      component: () => import(`@/views/pages/${PLATFORM}Error404.vue`),
      meta: { layout: `${PLATFORM}Default` }
    }
  ]
});
