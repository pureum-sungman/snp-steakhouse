<template>
  <div layout="sidebar">
    <div class="container" role="document">
      <div class="row">
        <div class="col-9">
          <main role="main">
            <router-view />
          </main>
        </div>
        <!-- .col-9 -->
        <div class="col-3">
          <aside></aside>
        </div>
        <!-- .col-3 -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container -->
  </div>
  <!-- [layout="sidebar"] -->
</template>

<script>
export default {
  name: 'LayoutSidebar',
  beforeCreate() {
    Promise.all(this.$route.meta.sidebarComponents).then(modules => {
      console.log(modules);
    });
  }
};
</script>

<style lang="scss" scoped></style>
