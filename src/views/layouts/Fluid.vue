<template>
  <div layout="fluid">
    <div class="container-fluid" role="document">
      <div class="row">
        <div class="col">
          <main role="main">
            <router-view />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutFluid'
};
</script>

<style lang="scss" scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
  overflow-x: hidden;
}
</style>
