import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
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
    // a: (/* state, getters, rootState, rootGetters */) => () => { return 0; }
  }
});

export default store;
