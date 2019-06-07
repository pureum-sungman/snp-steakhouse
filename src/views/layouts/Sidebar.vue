<template>
  <div layout="sidebar">
    <div class="container" role="document">
      <div class="row">
        <div class="col-9">
          <main role="main">
            <router-view name="default" />
          </main>
        </div>
        <!-- .col-9 -->
        <div class="col-3">
          <aside>
            <component
              v-for="(sidebarComponent, i) in sidebarComponents"
              :key="i"
              :is="sidebarComponent"
            />
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
  data() {
    return {
      sidebarComponents: []
    };
  },
  beforeCreate() {
    Promise.all(this.$route.meta.sidebarComponents).then(modules => {
      modules.forEach(module => this.sidebarComponents.push(module.default));
    });
  }
};
</script>

<style lang="scss" scoped></style>
