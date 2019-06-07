<template>
  <div class="container-fluid" layout="fluid" role="document">
    <div class="row">
      <div class="col-12">
        <main role="main">
          <h1>
            fluid layout
          </h1>
          <router-view />
        </main>
      </div>
      <!-- .col-12 -->
    </div>
    <!-- .row -->
  </div>
  <!-- .container-fluid -->
</template>

<script>
export default {
  name: 'LayoutFluid'
};
</script>

<style lang="scss" scoped></style>
