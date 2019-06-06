<template>
  <div>
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1 class="my-50">
      반응형 글씨 크기 h1
    </h1>
    <h2>
      반응형 글씨 크기 h2
    </h2>
    <h3>
      반응형 글씨 크기 h3
    </h3>
    <h4>
      반응형 글씨 크기 h4
    </h4>
    <h5>
      반응형 글씨 크기 h5
    </h5>
    <h6>
      반응형 글씨 크기 h6
    </h6>
    <p class="mb-5">
      반응형 글씨 크기 p
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/views/components/HelloWorld.vue';

export default {
  name: 'ViewHome',
  data() {
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.$axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => console.log(response));
    });
  },
  methods: {},
  components: {
    HelloWorld
  }
};
</script>
