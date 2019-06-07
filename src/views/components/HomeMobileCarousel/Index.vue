<template>
  <div component="home-mobile-carousel" class="bg-primary">
    <div class="swiper-container" gallery="main">
      <div class="swiper-wrapper">
        <main-slide />
      </div>
      <!-- .swiper-wrapper -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- .swiper-container [gallery="main"] -->
    <div class="swiper-container" gallery="thumb">
      <div class="swiper-wrapper">
        <thumb-slide />
      </div>
      <!-- .swiper-wrapper -->
    </div>
    <!-- .swiper-container [gallery="thumb"]-->
  </div>
  <!-- [component="home-mobile-carousel"] -->
</template>

<script>
import Swiper from 'swiper';
import { isNil as _isNil } from 'lodash';
import MainSlide from './MainSlide';
import ThumbSlide from './ThumbSlide.vue';

export default {
  name: 'ComponentHomeMobileCarousel',
  data() {
    return {
      swiperInstance: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeSwiper();
    });
  },
  methods: {
    initializeSwiper() {
      if (_isNil(this.swiperInstance)) {
        this.swiperInstance = new Swiper(
          // 셀렉터
          '[component="home-mobile-carousel"] .swiper-container',
          // 옵션
          {}
        );
      }
    }
  },
  components: {
    MainSlide,
    ThumbSlide
  }
};
</script>

<style lang="scss" scoped>
@import '~swiper/dist/css/swiper.min.css';

[component='home-mobile-carousel'],
.swiper-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
