<template>
  <nav
    component="mobile-navbar"
    class="navbar fixed-bottom navbar-dark bg-primary"
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
  name: 'ComponentMobileNavbar',
  data() {
    return {
      routers: [
        {
          key: 'about',
          icon: 'info-circle',
          label: 'About',
          to: { name: 'PageAbout', params: {}, query: {} }
        },
        {
          key: 'menu',
          icon: 'restaurant',
          label: 'Menu',
          to: { name: 'PageMenu', params: {}, query: {} }
        },
        {
          key: 'recipes',
          icon: 'clipboard-notes',
          label: 'Recipes',
          to: { name: 'PageRecipes', params: {}, query: {} }
        },
        {
          key: 'shop',
          icon: 'shop',
          label: 'Shop',
          to: { name: 'PageShop', params: {}, query: {} }
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
