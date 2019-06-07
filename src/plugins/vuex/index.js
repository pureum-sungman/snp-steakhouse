import Vue from 'vue';
import Vuex from 'vuex';

import recipes from '@/plugins/vuex/recipes.module';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    recipes
  }
});
