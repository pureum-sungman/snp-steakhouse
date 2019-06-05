import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";

// 스타일
import './assets/styles/main.scss';

// 모듈
import 'jquery';
import 'popper.js';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
