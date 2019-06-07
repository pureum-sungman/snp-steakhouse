<template>
  <div class="container" layout="sidebar" role="document">
    <div class="row">
      <div class="col-8">
        <main role="main">
          <router-view />
        </main>
      </div>
      <!-- .col-8 -->
      <div class="col-4">
        <aside>
          <div
            v-for="(component, index) in $route.meta.sidebarComponents"
            :key="index"
          ></div>
        </aside>
      </div>
      <!-- .col-4 -->
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
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
