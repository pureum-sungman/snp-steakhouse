import Vue from 'vue';
import App from '@/views/App.vue'; // 베이스 컴포넌트

// 뷰 플러그인
import router from '@/plugins/vue-router';
import store from '@/plugins/vuex';
import '@/plugins/axios';
import '@/plugins/vue-unicons';
import '@/plugins/vue-responsive-components';

// 스타일
import './assets/styles/index.scss';

// 스크립트
import './assets/scripts/index.js';

// 뷰 설정
Vue.config.productionTip = false;

new Vue({ router, store, render: h => h(App) }).$mount('#app');
