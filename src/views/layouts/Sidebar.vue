<template>
  <div layout="sidebar">
    <div class="container" role="document">
      <div class="row">
        <div class="col-9">
          <main role="main">
            <router-view />
          </main>
        </div>
        <div class="col-3">
          <aside>
            <component
              v-for="(sidebarComponent, i) in sidebarComponents"
              :key="i"
              :is="sidebarComponent"
            />
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _isNil from 'lodash/isNil';

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
  }
};
</script>

<style lang="scss" scoped></style>
