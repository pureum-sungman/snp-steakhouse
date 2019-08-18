<template>
  <nav
    component="navbar-bottom"
    class="navbar navbar-dark fixed-bottom bg-primary"
    v-responsive="{}"
  >
    <ul class="navbar-nav">
      <router-link
        v-for="router in routers"
        :key="router.key"
        tag="li"
        class="nav-item"
        active-class="router-link-active active"
        :to="router.to"
      >
        <a class="nav-link">
          <unicon :name="router.icon" fill="#fff" />
        </a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'ComponentNavbarBottom',
  data() {
    return {
      routers: [
        {
          key: 'about',
          icon: 'info-circle',
          label: 'About',
          to: { name: 'RouteAbout', params: {}, query: {} }
        },
        {
          key: 'menu',
          icon: 'restaurant',
          label: 'Menu',
          to: { name: 'RouteMenuArchive', params: {}, query: {} }
        },
        {
          key: 'recipes',
          icon: 'clipboard-notes',
          label: 'Recipes',
          to: { name: 'RouteRecipeArchive', params: {}, query: {} }
        },
        {
          key: 'shop',
          icon: 'shop',
          label: 'Shop',
          to: { name: 'RouteShopArchive', params: {}, query: {} }
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.navbar-nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
}
</style>
