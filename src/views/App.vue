<template>
  <div id="app">
    <vue-extend-layouts path="views/layouts" />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout';

export default {
  name: 'App',
  components: { VueExtendLayouts },
  mounted() {
    Promise.resolve()
      .then(() => this.$store.dispatch('initRecipes'))
      .then(() => {
        this.$store.state.recipes.forEach(recipe => {
          console.log(recipe);
        });
      });
  }
};
</script>
