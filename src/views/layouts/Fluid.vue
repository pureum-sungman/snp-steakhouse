<template>
  <div layout="fluid">
    <div class="container-fluid px-0 overflow-x-hidden" role="document">
      <div class="row">
        <div class="col">
          <main role="main">
            <router-view-wrapper router-name="default" />
          </main>
        </div>
        <!-- .col -->
      </div>
      <!-- .row -->
    </div>
    <!-- .container-fluid -->
    <mobile-navbar-bottom v-if="$store.state.isMobile" />
  </div>
  <!-- [layout="fluid"] -->
</template>

<script>
import RouterViewWrapper from '@/views/components/RouterViewWrapper.vue';

export default {
  name: 'LayoutFluid',
  components: {
    RouterViewWrapper,
    MobileNavbarBottom: () => {
      return import('@/views/components/MobileNavbarBottom.vue');
    }
  }
};
</script>

<style lang="scss" scoped></style>
