<template>
  <div layout="fluid">
    <div class="container-fluid" role="document">
      <div class="row">
        <div class="col">
          <main role="main">
            <router-view name="default" />
          </main>
        </div>
        <!-- .col -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container-fluid -->
  </div>
  <!-- [layout="fluid"] -->
</template>

<script>
export default {
  name: 'LayoutFluid'
};
</script>

<style lang="scss" scoped></style>
