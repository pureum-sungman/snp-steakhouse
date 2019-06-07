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
          <aside>
            <div
              v-for="(component, index) in $route.meta.sidebarComponents"
              :key="index"
            ></div>
          </aside>
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
    console.log(this.$route.meta.sidebarComponents);
  },
  created() {
    console.log(this.$route.meta.sidebarComponents);
  },
  beforeMount() {
    console.log(this.$route.meta.sidebarComponents);
  },
  mounted() {
    // this.$nextTick(() => {
    //   console.log(this.$route.meta.sidebarComponents);
    // });
  }
};
</script>

<style lang="scss" scoped></style>
