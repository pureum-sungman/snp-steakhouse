<template>
  <div layout="fluid">
    <div class="container-fluid" role="document">
      <div class="row">
        <div class="col">
          <main role="main">
            <router-view />
          </main>
          <navbar-bottom v-show="window.innerWidth < 768" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFluid',
  data() {
    return {};
  },
  watch: {
    window
  },
  components: {
    NavbarBottom: () => ({
      component: import('@/views/components/NavbarBottom.vue'),
      loading: null,
      error: null,
      delay: 200, // Milliseconds. Default value: 200
      timeout: 10000 // Milliseconds. Default value: Inifinity
    })
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
  overflow-x: hidden;
}
</style>
