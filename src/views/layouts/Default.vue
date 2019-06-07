<template>
  <div class="container" layout="default" role="document">
    <div class="row">
      <div class="col">
        <main role="main">
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
