<template>
  <div component="home-mobile-carousel">
    <div class="swiper-container bg-primary" gallery="main">
      <div class="swiper-wrapper">
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
import MainSlide from './MainSlide';
import ThumbSlide from './ThumbSlide.vue';

export default {
  name: 'ComponentHomeMobileCarousel',
  data() {
    return {
      thumbGallerySwiperInstance: null,
      mainGallerySwiperInstance: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (
        _isNil(this.thumbGallerySwiperInstance) &&
        _isNil(this.mainGallerySwiperInstance)
      ) {
        this.thumbGallerySwiperInstance = this.initializeThumbGallerySwiper();
        this.mainGallerySwiperInstance = this.initializeMainGallerySwiper(
          this.thumbGallerySwiperInstance
        );
      }
    });
  },
  methods: {
    initializeThumbGallerySwiper() {
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
    initializeMainGallerySwiper(thumbGallerySwiperInstance) {
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
            swiper: thumbGallerySwiperInstance
          }
        }
      );
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
