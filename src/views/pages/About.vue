<template>
  <div page="about">
    <div class="about">
      <div class="info"></div>
      <div class="section">
        <div class="map"></div>
        <div class="text"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'PageAbout',
  mounted() {
    this.$nextTick(() => {

      $('.section').mouseover(function (e) { 
          $('.section').addClass('on');
          $('.map').addClass('view');
          $('.text').addClass('ii');
      });
      $('.section').mouseout(function (e) { 
          $('.section').removeClass('on');
          $('.map').removeClass('view');
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
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('https://cdn.pixabay.com/photo/2015/03/30/12/37/jellyfish-698521__340.jpg') no-repeat;
    background-size: cover;
  }
  .section{
    position: absolute;
    overflow: hidden;
    bottom: 0;
    right: 0;
    width: 10%;
    height: 20%;
    background-color: green;
    transition: 1.5s all ease-out;
  }
  .section.on{
    width: 50%;
    height: 60%;
  }
 .map{
   position: absolute;
   top: 5%;
   left: 50%;
   width: 90%;
   height: 90%;
   border: 1px solid black;
   transform: translateX(-50%);
   background: blue;
   transition: 1s all ease-out;
 }
 .map.view{
   position: absolute;
   top: 10%;
   left: 50%;
   width: 80%;
   height: 60%;
   border: 1px solid black;
   transform: translateX(-50%);
   background: yellow;
 }
 .text{
   display: none;
   position: absolute;
   bottom: 10%;
   left: 50%;
   width: 80%;
   height: 15%;
   transform: translateX(-50%);
   border: 1px solid black;
 }
 .text.ii{
   display: block;
 }
</style>
