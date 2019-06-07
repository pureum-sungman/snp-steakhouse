<template>
  <div page="home">
    <home-mobile-carousel v-show="$store.state.isMobile" />
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  components: {
    HomeMobileCarousel: () => import('@/views/components/HomeMobileCarousel.vue') // prettier-ignore
  }
};
</script>
