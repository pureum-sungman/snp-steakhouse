<template>
  <div page="home">
    <!-- 
      Carosuel: BEGIN 
      1. Vuex의 현재 'isMobile' 값에 따라서 디스플레이 여부 결정
    -->
    <!-- <home-mobile-carousel v-if="!$store.state.isMobile" /> -->
    <home-mobile-carousel v-if="true" />
    <!-- Carosuel: END -->
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  components: {
    HomeMobileCarousel: () => import('@/views/components/HomeMobileCarousel/Index.vue') // prettier-ignore
  }
};
</script>
