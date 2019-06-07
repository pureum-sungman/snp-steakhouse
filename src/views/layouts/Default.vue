<template>
  <div class="container" layout="default" role="document">
    <div class="row">
      <div class="col">
        <main role="main">
          <h1>
            default layout
          </h1>
          <router-view />
        </main>
      </div>
      <!-- .col -->
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'LayoutDefault'
};
</script>

<style lang="scss" scoped></style>
