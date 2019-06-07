<template>
  <div id="page-home">
    <section id="recipes">
      <div class="row">
        <div class="col text-center">
          <h1 class="font-cursive display-1">
            Recipes
          </h1>
        </div>
        <!-- .col -->
      </div>
      <!-- .row -->
      <div class="row">
        <div
          v-for="(recipe, index) in recipes"
          :key="index"
          class="col-12 col-md-6 col-lg-4"
        >
          <h1 class="font-cursive">
            {{ recipe.title }}
          </h1>
        </div>
        <!-- .col-12 col-md-6 col-lg-4 -->
      </div>
      <!-- .row -->
    </section>
    <!-- #recipes -->
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      recipes: [{ title: 'A' }, { title: 'B' }, { title: 'C' }]
    };
  },
  mounted() {
    this.$nextTick(() => {});
  },
  methods: {},
  components: {}
};
</script>
