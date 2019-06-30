import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {},
  mutations: {
    set(state, { key, value }) {
      Vue.set(state, key, value);
    }
  },
  actions: {
    set(ctx, payload) {
      ctx.commit('set', payload);
    }
  },
  getters: {
    getPlatform: (/* state, getters, rootState, rootGetters */) => (
      width = 768 // 부트스트랩 4 'md' 사이즈 기준 (px)
    ) => {
      return window.innerWidth <= width ? 'Mobile' : 'Dekstop';
    }
  }
});
