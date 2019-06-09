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
import { isNil as _isNil } from 'lodash';
import RouterViewWrapper from '@/views/components/RouterViewWrapper.vue';

export default {
  name: 'LayoutSidebar',
  data() {
    return {
      sidebarComponents: []
    };
  },
  beforeCreate() {
    // 현재 라우트 메타의 'sidebarComponents' 배열 기준으로 사이드바 컴포넌트 레이지 로딩
    if (_isNil(this.$route.meta.sidebarComponents)) return;
    if (this.$route.meta.sidebarComponents.length > 0) return;
    Promise.all(this.$route.meta.sidebarComponents).then(modules => {
      modules.forEach(module => this.sidebarComponents.push(module.default));
    });
  },
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
