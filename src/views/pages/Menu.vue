<template>
  <div page="menu">
    <div class="row no-gutters">
      <div class="col d-flex flex-row flex-wrap">
        <div
          v-for="category in $store.state.recipeCategories"
          :key="category.key"
          @click="e => showModal(e, category)"
          class="card border-0 rounded-0"
          :style="{
            width: '50%',
            height: 'auto',
            minHeight: '50vw',
            backgroundImage: `url(${category.thumbnailUrl})`,
            backgroundPosition: category.thumbnailPosition,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            cursor: 'pointer'
          }"
        >
          <div
            class="card-body"
            :style="{
              backgroundColor: 'rgba(33, 33, 33, 0.35)'
            }"
          >
            <h1 class="card-title text-white">
              {{ category.name }}
            </h1>
            <!-- .card-title -->
          </div>
          <!-- .card-body -->
        </div>
        <!-- .card -->
      </div>
      <!-- .col -->
    </div>
    <!-- .row -->
  </div>
  <!-- [page="menu"] -->
</template>

<script>
export default {
  name: 'PageMenu',
  methods: {
    showModal(e, category) {
      e.preventDefault();
      console.log(category);
    }
  }
};
</script>

<style lang="scss" scoped></style>
