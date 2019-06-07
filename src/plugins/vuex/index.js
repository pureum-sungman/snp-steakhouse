import Vue from 'vue';
import Vuex from 'vuex';

import menu from '@/plugins/vuex/menu.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu
  }
});
