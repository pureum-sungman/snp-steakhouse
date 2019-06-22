<template>
  <div layout="fluid">
    <div
      class="container-fluid px-0"
      role="document"
      :style="{
        overflowX: 'hidden'
      }"
    >
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
      // 반응형 컴포넌트는 레이지 로딩을 위해 함수 형식으로 가져올 것
      return import('@/views/components/MobileNavbarBottom.vue');
    }
  }
};
</script>

<style lang="scss" scoped></style>
