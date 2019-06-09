<template>
  <nav
    component="mobile-navbar-bottom"
    class="navbar fixed-bottom navbar-light bg-light"
  >
    <ul
      class="
        navbar-nav
        d-flex flex-row justify-content-around align-items-center
        w-100
        "
    >
      <router-link
        v-for="router in routers"
        :key="router.key"
        tag="li"
        class="nav-item"
        active-class="router-link-active active"
        :to="router.to"
      >
        <a class="nav-link">
          <unicon :name="router.icon" />
          {{ router.label }}
        </a>
      </router-link>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'ComponentMobileNavbarBottom',
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
<style lang="scss" scoped></style>
