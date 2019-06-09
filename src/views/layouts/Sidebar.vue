<template>
  <div layout="sidebar">
    <div class="container" role="document">
      <div class="row">
        <div class="col-9">
          <main role="main">
            <router-view-wrapper router-name="default" />
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
    <mobile-navbar-bottom v-if="$store.state.isMobile" />
  </div>
  <!-- [layout="sidebar"] -->
</template>

<script>
import RouterViewWrapper from '@/views/components/RouterViewWrapper.vue';

export default {
  name: 'LayoutSidebar',
  data() {
    return {
      sidebarComponents: []
    };
  },
  beforeCreate() {
    if (this.$route.meta.sidebarComponents.length > 0) {
      Promise.all(this.$route.meta.sidebarComponents).then(modules => {
        modules.forEach(module => this.sidebarComponents.push(module.default));
      });
    }
  },
  components: {
    RouterViewWrapper,
    MobileNavbarBottom: () => {
      return import('@/views/components/MobileNavbarBottom.vue');
    }
  }
};
</script>

<style lang="scss" scoped></style>
