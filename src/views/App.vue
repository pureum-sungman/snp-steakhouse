<template>
  <div id="app">
    <vue-extend-layouts path="views/layouts" />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout';
import {
  debounce as _debounce
  //  get as _get,
  //   isNil as _isNil
} from 'lodash';

export default {
  name: 'App',
  components: { VueExtendLayouts },
  mounted() {
    this.$nextTick(() => {
      this.windowResizeEventHandler();
      window.dispatchEvent(new Event('resize'));
    });
  },
  watch: {
    // $route(to, from) { this.updatePageTransitionEffect(to, from); }
  },
  methods: {
    // updatePageTransitionEffect(to, from) {
    //   // 뷰 라우터 'navbarIndex' 메타 값 기준으로 페이지 전환 효과 업데이트
    //   const toIndex = _get(to, ['meta', 'navbarIndex'], null);
    //   const fromIndex = _get(from, ['meta', 'navbarIndex'], null);
    //   if (!_isNil(toIndex) && !_isNil(fromIndex)) {
    //     this.$store.dispatch('set', {
    //       pageTransitionEffect: toIndex > fromIndex ? 'slide-left' : 'slide-right' // prettier-ignore
    //     });
    //   }
    // },
    windowResizeEventHandler() {
      // 윈도우 리사이즈 이벤트에 맞춰 Vuex 'isMobile' 값 업데이트
      window.addEventListener(
        'resize',
        _debounce(() => {
          this.$store.dispatch('set', {
            isMobile: window.innerWidth <= 768
          });
        }, 250)
      );
    }
  }
};
</script>
