<template>
  <transition :name="transitionEffect" mode="out-in">
    <router-view :name="routerName" />
  </transition>
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
  },
  data() {
    return {
      transitionEffect: 'slide-left'
    };
  },
  beforeRouteUpdate(to, from, next) {
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionEffect = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    next();
  }
};
</script>

<style lang="scss" scoped></style>
