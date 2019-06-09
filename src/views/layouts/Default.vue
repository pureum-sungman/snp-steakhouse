<template>
  <div layout="default">
    <div class="container" role="document">
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
    <!-- .container -->
    <mobile-navbar-bottom v-if="$store.state.isMobile" />
  </div>
  <!-- [layout="default"] -->
</template>

<script>
import RouterViewWrapper from '@/views/components/RouterViewWrapper.vue';

export default {
  name: 'LayoutDefault',
  components: {
    RouterViewWrapper,
    MobileNavbarBottom: () => {
      return import('@/views/components/MobileNavbarBottom.vue');
    }
  }
};
</script>

<style lang="scss" scoped></style>
