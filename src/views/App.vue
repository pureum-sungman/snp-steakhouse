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
      this.windowResizeEventHandler();
      window.dispatchEvent(new Event('resize'));

      Promise.resolve()
        .then(() => this.$store.dispatch('initRecipes'))
        .then(() => {
          this.$store.state.recipes.forEach(recipe => {
            console.log(recipe);
          });
        });
    });
  },
  methods: {
    windowResizeEventHandler() {
      // 윈도우 리사이즈 이벤트에 맞춰 Vuex 'isMobile' 값 업데이트
      window.addEventListener(
        'resize',
        _debounce(() => this.$store.dispatch('checkWindowWidth'), 250)
      );
    }
  }
};
</script>
