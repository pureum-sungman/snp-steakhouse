import Vue from 'vue';
import App from './App.vue';

// Vue 플러그인
import router from '@/plugins/vue-router';
import store from '@/plugins/vuex';
import '@/plugins/axios';

// 스타일
import './assets/styles/main.scss';

// 노드 모듈
import 'jquery';
import 'popper.js';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
