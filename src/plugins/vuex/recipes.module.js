import Vue from 'vue';
import { includes as _includes } from 'lodash';
import RecipeDefault from '@/assets/data/recipe_default.json';
// import RecipeIngredient from '@/assets/data/recipe_Ingredient.json';
// import RecipeProcess from '@/assets/data/recipe_process.json';

export default {
  namespaced: true,
  state: [],
  getters: {},
  mutations: {
    set(state, payload = {}) {
      Object.keys(payload).forEach(key => {
        Vue.set(state, key, payload[key]);
      });
    }
  },
  actions: {
    init(ctx) {
      [{ key: 'stake', search: '스테이크' }].forEach(({ key, search }) => {
        const commitObj = {};
        commitObj[key] = RecipeDefault.data.filter(args => {
          return _includes(args.RECIPE_NM_KO, search);
        });
        ctx.commit('set', commitObj);
      });
    }
  }
};
