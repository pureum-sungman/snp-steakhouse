<template>
  <div id="app">
    <vue-extend-layouts path="views/layouts" />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout';
import { debounce as _debounce } from 'lodash';

export default {
  name: 'App',
  components: { VueExtendLayouts },
  mounted() {
    this.$nextTick(() => {
      this.updateIsMobileOnWindowResize(); // 이벤트 바인딩
      window.dispatchEvent(new Event('resize')); // 최초 수동으로 'resize' 이벤트 트리거
    });
  },
  watch: {},
  methods: {
    /**
     * 윈도우 리사이즈 이벤트 핸들러
     * 1. 부트스트랩 4 'md' 사이즈 기준
     * 2. Vuex 'isMobile' 값 업데이트
     **/
    updateIsMobileOnWindowResize() {
      window.addEventListener(
        'resize',
        _debounce(() => {
          this.$store.dispatch('set', {
            key: 'isMobile',
            value: window.innerWidth <= 768
          });
        }, 250)
      );
    }
  }
};
</script>
