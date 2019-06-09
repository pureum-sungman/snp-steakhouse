import Vue from 'vue';
import Vuex from 'vuex';
import {
  includes as _includes,
  unionBy as _unionBy,
  find as _find,
  findIndex as _findIndex,
  orderBy as _orderBy
} from 'lodash';
import RecipeDefault from '@/assets/data/recipe_default.json';
import RecipeIngredient from '@/assets/data/recipe_ingredient.json';
import RecipeProcess from '@/assets/data/recipe_process.json';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isMobile: false,
    recipes: []
  },
  mutations: {
    update(state, payload = {}) {
      Vue.set(state[payload.target], payload.key, payload.data);
    },
    set(state, payload = {}) {
      Object.keys(payload).forEach(key => {
        Vue.set(state, key, payload[key]);
      });
    }
  },
  getters: {
    getAllRecipes: state => state.recipes,
    getRecipeById: (state /* getters, rootState, rootGetters */) => id => {
      return _find(state.recipes, { RECIPE_ID: id });
    },
    getRecipeByType: (state /* getters, rootState, rootGetters */) => type => {
      return _find(state.recipes, { TY_NM: type });
    },
    getRecipeByName: (state /* getters, rootState, rootGetters */) => name => {
      return _find(state.recipes, { RECIPE_NM_KO: name });
    }
  },
  actions: {
    set(ctx, payload = {}) {
      Object.keys(payload).forEach(key => {
        const commitObj = {};
        commitObj[key] = payload[key];
        ctx.commit('set', commitObj);
      });
    },
    checkWindowWidth(ctx) {
      ctx.commit('set', { isMobile: window.innerWidth <= 768 });
    },
    /**
     * 샘플 레시피 정보 초기화 함수
     **/
    initRecipes(ctx) {
      // 검색 키워드 배열
      const keywords = [
        '스테이크',
        '샐러드',
        '수프',
        '파스타',
        '발효초요구르트',
        '민트라임모히또',
        '수정과'
      ];

      /**
       * 기본 정보
       **/
      keywords.forEach(keyword => {
        ctx.commit('set', {
          recipes: _unionBy(
            // 기존 배열
            ctx.state.recipes,
            // 키워드로 필터링 된 레시피 배열
            RecipeDefault.data.filter(args => {
              return _includes(args.RECIPE_NM_KO, keyword);
            }),
            // 'RECIPE_ID' 기준으로 중복되는 레시피 제거
            'RECIPE_ID'
          )
        });
      });

      /**
       * 재료 (INGREDIENTS) & 조리 과정 (PROCESS)
       **/
      ctx.state.recipes.forEach(recipe => {
        // 기존에 저장되어 있던 배열에서 현재 레시피의 인덱스
        const index = _findIndex(ctx.state.recipes, {
          RECIPE_ID: recipe.RECIPE_ID
        });

        // 재료 배열 (INGREDIENTS)
        // 1. 'RECIPE_ID' 기준으로 필터링
        const INGREDIENTS = RecipeIngredient.data.filter(ing => {
          return ing.RECIPE_ID === recipe.RECIPE_ID;
        });

        // 조리 과정 배열 (PROCESS)
        // 1. 'RECIPE_ID' 기준으로 필터링
        // 2. 'COOKING_NO' 기준으로 오름차순 정렬
        const PROCESS = _orderBy(
          RecipeProcess.data.filter(prcs => {
            return prcs.RECIPE_ID === recipe.RECIPE_ID;
          }),
          ['COOKING_NO'],
          ['asc']
        );

        // 현재 레시피만 업데이트
        ctx.commit('update', {
          target: 'recipes',
          key: index,
          data: Object.assign({}, ctx.state.recipes[index], {
            INGREDIENTS,
            PROCESS
          })
        });
      });
    }
  }
});
