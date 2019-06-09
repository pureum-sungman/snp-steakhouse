import Vue from 'vue';
import Vuex from 'vuex';
import { get as _get, find as _find, isNil as _isNil } from 'lodash';

// 샘플 데이터 - 레시피
import recipeData from '@/assets/data/recipe';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    isMobile: false,
    pageTransitionEffect: 'fade',
    recipes: recipeData
  },
  mutations: {
    set(state, { target, key, value }) {
      try {
        _isNil(target)
          ? Vue.set(state, key, value)
          : Vue.set(_get(state, target), key, value);
      } catch (error) {
        console.error(error);
      }
    }
  },
  actions: {
    set(ctx, payload) {
      ctx.commit('set', payload);
    }
  },
  getters: {
    getRecipeById: (state /* getters, rootState, rootGetters */) => id => {
      return _find(state.recipes, { RECIPE_ID: id });
    },
    getRecipeByType: (state /* getters, rootState, rootGetters */) => type => {
      return _find(state.recipes, { TY_NM: type });
    },
    getRecipeByName: (state /* getters, rootState, rootGetters */) => name => {
      return _find(state.recipes, { RECIPE_NM_KO: name });
    }
  }
});
