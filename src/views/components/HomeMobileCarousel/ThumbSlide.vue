<template>
  <div class="swiper-slide">
    <h6 class="text-cursive text-white">
      {{ title }}
    </h6>
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
