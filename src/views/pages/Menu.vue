<template>
  <div page="menu">
    <div class="Fmenu">
      <div class="menus">
        <div class="menu steak">
          <div class="image"></div>
        </div>
        <div class="menu pastas">
          <div class="image"></div>
        </div>
        <div class="menu SandP">
          <span class="detail L i1"></span>
          <span class="detail R i2"></span>
        </div>
        <div class="menu salads">
          <div class="detail R image"></div>
          <span class="detail L i3"></span>
        </div>
        <div class="menu desserts">
          <div class="detail L image"></div>
          <span class="detail R i4"></span>
        </div>
        <div class="menu drink">
          <div class="detail R image"></div>
          <span class="detail L i5"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMenu'
};
</script>

<style lang="scss" scoped>
  .L{left: 0;} .R{right: 0;}
  .menus{
    position: relative;
    max-width: 440px;
    height: 100vh;
    background: url('https://i.pinimg.com/736x/c1/d2/3c/c1d23cc78ba5492e7a64db3210efb685--chalkboard-fonts-kitchen-chalkboard.jpg') no-repeat;
    background-size: contain;
  }
  .menu{
    position: absolute;
    width: 200px;
    height: 100px;
    border: 1px solid black;
  }
  .steak{
    top: 30%;
    left: 4%;
    background: red;
  }
  .SandP{
    top: 50%;
    left: 4%;
    background: orangered;
  }
  .pastas{
    top: 70%;
    left: 4%;
    background: yellow;
  }
  .salads{
    top: 30%;
    right: 4%;
    background: green;
  }
  .desserts{
    top: 50%;
    right: 4%;
    background: blue;
  }
  .drink{
    top: 70%;
    right: 4%;
    background: purple;
  }
  .detail{
    position: absolute;
    border: 1px solid black;
    width: 50%;
    height: 100%;
  }
  
</style>

