<template>
  <div page="home">
    <home-section-recipes />
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'PageHome',
  components: {
    HomeSectionRecipes: () => import('@/views/components/HomeSectionRecipes.vue') // prettier-ignore
  }
};
</script>
