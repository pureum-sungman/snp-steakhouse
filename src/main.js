import Vue from 'vue';

// 뷰 플러그인
import router from '@/plugins/vue-router';
import store from '@/plugins/vuex';
import '@/plugins/axios';

// 스타일
import './assets/styles/main.scss';

// 노드 모듈
import 'jquery';
import 'popper.js';
import 'bootstrap';

// 뷰 설정
Vue.config.productionTip = false;

// 부트스트랩 4 'sm' 사이즈 기준으로 구분 ( 임시 )
const layout = window.innerWidth <= 576 ? 'Mobile' : 'Desktop';

import(`@/views/layouts/${layout}.vue`).then(module => new Vue({
    router,
    store,
    render: h => h(module.default)
}).$mount('#app'));
