<template>
  <div page="about">
    <div class="about">
      <div class="map">
        <div class="text"></div>
      </div>
      <div class="section">
        <div class="info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageAbout',
  mounted() {
    this.$nextTick(() => {

      $('.map').mouseover(function (e) { 
          $('.map').addClass('view');
          $('.section').addClass('on');
          $('.text').addClass('ii');
      });
      $('.map').mouseout(function (e) { 
          $('.map').removeClass('view');
          $('.section').removeClass('on');
          $('.text').removeClass('ii');
      });
    });
  }
};
</script>

<style lang="scss" scoped>
  .about{
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .info{
    width: 100%;
    height: 100%;
    background: url('https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521__340.jpg') no-repeat;
    background-size: cover;
  }
  .section{
    position: absolute;
    overflow: hidden;
    top: -60%;
    left: -50%;
    width: 150%;
    height: 200%;
    background-color: green;
    transform: rotate(-40deg);
    transition: 1.5s all ease-out;
  }
  .on{
    top: -90%;
    left: -56%;
  }
  .map{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 80%;
    background-color: yellow;
    transition: 1s all ease-out;
  }
  .text{
    position: absolute;
    bottom: 5%;
    right: 3%;
    width: 35%;
    height: 30%;
    transition: 1.5s all linear;
    border: 1px solid black;
  }
  .view{
    width: 70%;
    height: 100%;
    background-color: red;
  }
  .ii{
    width: 45%;
    height: 40%;
  }
</style>
