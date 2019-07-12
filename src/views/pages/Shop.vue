<template>
  <div page="shop">
    <div class="row">
      <div class="lists col-3">
        <div class="list">
          <div class="list_Image steak"></div>
          <div class="list_Name">steak</div>
        </div>
        <div class="list">
          <div class="list_Image pasta"></div>
          <div class="list_Name">pasta</div>
        </div>
        <div class="list">
          <div class="list_Image salad"></div>
          <div class="list_Name">salad</div>
        </div>
        <div class="list">
          <div class="list_Image dessert"></div>
          <div class="list_Name">dessert</div>
        </div>
        <div class="list">
          <div class="list_Image drinks"></div>
          <div class="list_Name">drinks</div>
        </div>
      </div>
      <div class="shop col-9">
        <div class="search on">
          <div class="qqq on"></div>
        </div>
        <div class="mainView on">
          <div class="view steak"></div>
          <div class="view"></div>
          <div class="view"></div>
          <div class="view"></div>
          <div class="view"></div>
          <div class="view"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageShop',
  mounted() {
    this.$nextTick(() => {

      $('.list').click(function (e) { 
          const listClasses = this.className.split(' ').filter(elem => elem !== 'list');
          $('.view').removeClass().addClass('view');
          $('.view').addClass(listClasses);
      });
    });
  }
};
</script>
<style lang="scss" scoped>
*{padding: 0; margin: 0;}

.lists{
  // overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: purple;
  text-align: center;
}
.list{
  position: relative;
  margin: 10px;
  display: inline-block;
  width: 40%;
  height: 25%;
  border: 1px solid black;
  background: purple;
  transform: translateY(10%);
}
.list:hover{
  border: 1px solid #1f8cf3;
  background-color: #1f8cf3;
  //0.3 마우스오버 0.6 마우스클릭
  opacity: 0.6;
}
.list_Image{
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
}
 .list_Name{
   position: absolute;
   padding-top: 3px;
   left: 50%;
   bottom: 0%;
   transform: translateX(-50%);
 }
.shop{
  position: relative;
  width: 100vw;
  height: 100vh;
  text-align: center;
}
.search{
  position: absolute;
  width: 100%;
  height: 100%;
  background: orange;
}
.search.on{height: 10%;}
.qqq{
  top: 40%;
  left: 50%;
  width: 90%;
  height: 10%;
  position: absolute;
  border: 1px solid black;
  transform: translateX(-50%);
  background: orangered;
}
.qqq.on{
  top: 50%;
  width: 95%;
  height: 50%;
  transform: translate(-50%, -50%);
}
.mainView{
  position: absolute;
  display: none;
  top: 10%;
  width: 100%;
  height: 90%;
  background: green;
}
.mainView.on{display: block;}
.view{
  margin: 20px;
  display: inline-block;
  width: 25%;
  height: 40%;
  border: 1px solid black;
  background: blue;
}
.list_Image.steak{
  background: url('../../assets/images/shop_steak2_3.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
.list_Image.pasta{
  background: url('../../assets/images/shop_pasta1_2.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
.list_Image.salad{
  background: url('../../assets/images/shop_salad3.jpg') no-repeat;
  background-size: contain;
  background-position: center center;
}
.list_Image.dessert{
  background: url('../../assets/images/shop_dessert4_2.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
.drinks{
  background: blue;
}

</style>

