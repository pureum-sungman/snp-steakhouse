import Vue from 'vue';
import Vuex from 'vuex';
import { includes as _includes, unionBy as _unionBy } from 'lodash';
import RecipeDefault from '@/assets/data/recipe_default.json';
// import RecipeIngredient from '@/assets/data/recipe_Ingredient.json';
// import RecipeProcess from '@/assets/data/recipe_process.json';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    recipes: []
  },
  mutations: {
    set(state, payload = {}) {
      Object.keys(payload).forEach(key => {
        Vue.set(state, key, payload[key]);
      });
    }
  },
  actions: {
    initRecipes(ctx) {
      [
        '스테이크',
        '샐러드',
        '수프',
        '파스타',
        '발효초요구르트',
        '민트라임모히또',
        '수정과'
      ].forEach(keyword => {
        ctx.commit('set', {
          recipes: _unionBy(
            ctx.state.recipes,
            RecipeDefault.data.filter(args => {
              return _includes(args.RECIPE_NM_KO, keyword);
            }),
            'RECIPE_ID'
          )
        });
      });
    }
  }
});
