<template>
  <div class="swiper-slide">
    <h1 class="text-cursive display-1 text-white">
      {{ title }}
    </h1>
  </div>
</template>

<script>
import { isString as _isString } from 'lodash';
export default {
  props: {
    title: {
      type: String,
      default() {
        return '';
      },
      validator(value) {
        return _isString(value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
