<template>
  <div layout="default">
    <div class="container" role="document">
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
  name: 'LayoutDefault'
};
</script>

<style lang="scss" scoped></style>
