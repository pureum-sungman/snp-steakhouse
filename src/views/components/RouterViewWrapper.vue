<template>
  <!-- <transition :name="$store.state.pageTransitionEffect"> -->
  <router-view :name="routerName" />
  <!-- </transition> -->
</template>

<script>
/**
 * 뷰 라우터 페이지 전환시 트랜지션 효과 적용을 위한 래퍼 컴포넌트 (임시)
 * 다른 용도로는 사용을 지양할 것
 **/
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
