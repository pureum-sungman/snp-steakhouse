import Vue from 'vue';
import axios from 'axios';

// https://github.com/axios/axios
Vue.use({
  install(V) {
    /**
     * 공통 기본 설정
     **/
    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    /**
     * 리퀘스트 인터셉터
     **/
    axios.interceptors.request.use(
      function onSuccess(config) {
        // Promise.then() 전 호출
        return config;
      },
      function onError(error) {
        // Promise.catch() 전 호출
        return Promise.reject(error);
      }
    );

    /**
     * 리스펀스 인터셉터
     **/
    axios.interceptors.response.use(
      function onSuccess(response) {
        // Promise.then() 전 호출
        return response;
      },
      function onError(error) {
        // Promise.catch() 전 호출
        return Promise.reject(error);
      }
    );

    V.prototype.$axios = axios;
  }
});
