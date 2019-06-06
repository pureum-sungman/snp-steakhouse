import Vue from 'vue';

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

const layout = window.innerWidth <= 576 ? 'Mobile' : 'Desktop';
import(`@/views/layouts/${layout}.vue`)
    .then(App => new Vue({
        router,
        store,
        render: h => h(App.default)
    }).$mount('#app'));
