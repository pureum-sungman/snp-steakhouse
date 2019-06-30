<template>
  <div platform="mobile" layout="default">
    <div class="container" role="document">
      <div class="row">
        <div class="col">
          <main role="main">
            <router-view />
          </main>
        </div>
      </div>
    </div>
    <mobile-navbar />
  </div>
</template>

<script>
export default {
  name: 'LayoutMobileDefault',
  components: {
    MobileNavbar: () => import('@/views/components/MobileNavbar.vue')
  }
};
</script>

<style lang="scss" scoped></style>
