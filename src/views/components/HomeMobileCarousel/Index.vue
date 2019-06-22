<template>
  <div component="home-mobile-carousel">
    <div class="swiper-container bg-primary" gallery="main">
      <div class="swiper-wrapper">
        <main-about-slider />
        <main-slide
          v-for="elem in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
          :key="elem"
          :title="`Main slide #${elem}`"
        />
      </div>
      <!-- .swiper-wrapper -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- .swiper-container [gallery="main"] -->

    <div class="swiper-container bg-danger" gallery="thumb">
      <div class="swiper-wrapper">
        <thumb-slide
          v-for="elem in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
          :key="elem"
          :title="`Thumb #${elem}`"
        />
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
import MainAboutSlider from './MainAboutSlider';
import MainSlide from './MainSlide';
import ThumbSlide from './ThumbSlide.vue';

export default {
  name: 'ComponentHomeMobileCarousel',
  data() {
    return {
      thumbSwiper: null,
      mainSwiper: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (_isNil(this.thumbSwiper) && _isNil(this.mainSwiper)) {
        this.thumbSwiper = this.initThumbSwiper();
        this.mainSwiper = this.initMainSwiper(this.thumbSwiper);
      }
    });
  },
  methods: {
    initThumbSwiper() {
      return new Swiper(
        // 셀렉터
        '[component="home-mobile-carousel"] .swiper-container[gallery="thumb"]',
        // 옵션
        {
          loop: true,
          freeMode: true,
          slidesPerView: 5,
          loopedSlides: 5,
          watchSlidesVisibility: true,
          watchSlidesProgress: true
        }
      );
    },
    initMainSwiper(thumbSwiper) {
      return new Swiper(
        // 셀렉터
        '[component="home-mobile-carousel"] .swiper-container[gallery="main"]',
        // 옵션
        {
          loop: true,
          loopedSlides: 5,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          thumbs: {
            swiper: thumbSwiper
          }
        }
      );
    }
  },
  components: {
    MainSlide,
    ThumbSlide,
    MainAboutSlider
  }
};
</script>

<style lang="scss" scoped>
@import '~swiper/dist/css/swiper.min.css';

[component='home-mobile-carousel'] {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .swiper-container {
    &[gallery='main'] {
      height: 80%;
    }
    &[gallery='thumb'] {
      height: 20%;
    }
  }
}
</style>
