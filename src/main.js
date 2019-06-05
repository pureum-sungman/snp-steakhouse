import Vue from "vue";
import App from "./App.vue";
import router from "@/plugins/vue-router";
import store from "@/plugins/vuex";

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
