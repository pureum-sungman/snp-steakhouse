<template>
  <!-- <transition :name="$store.state.pageTransitionEffect"> -->
  <router-view :name="routerName" />
  <!-- </transition> -->
</template>

<script>
export default {
  name: 'ComponentRouterViewWrapper',
  props: {
    routerName: {
      type: String,
      default() {
        return 'default';
      },
      validator(/* value */) {
        return true;
      }
    }
  }
};
</script>
