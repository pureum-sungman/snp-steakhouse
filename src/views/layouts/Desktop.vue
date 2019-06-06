<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <div class="my-5 py-5">
      <h1>
        DESKTOP LAYOUT
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDesktop'
};
</script>


<style lang="scss" scoped></style>
