<template>
  <div layout="fluid">
    <div class="container-fluid" role="document">
      <div class="row">
        <div class="col-12">
          <main role="main">
            <router-view />
          </main>
        </div>
        <!-- .col-12 -->
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
