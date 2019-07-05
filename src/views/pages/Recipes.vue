<template>
  <div page="recipes">
    <div class="row recipe">
      <div class="col-2 left">
        <div class="left_Lists">
          <div class="left_List steak">라면</div>
          <div class="left_List pasta">파스타</div>
          <div class="left_List salad">만두</div>
          <div class="left_List dessert">비빔면</div>
        </div>
      </div>
      <div class="col-8 center">
        <!-- 기본 냄비 구역 -->
        <div class="center_Def">
          <!-- 음식 이미지 구역 hidden -->
          <div class="center_View">
            <!-- 음식 이미지 -->
            <div class="center_Image steak">
              <!-- 텍스트 구역 -->
              <div class="center_Text level1">물을 넣는다</div>
              <div class="center_Text level2">끓인다</div>
              <div class="center_Text level3">스프를 넣는다</div>
              <div class="center_Text level4">면을 넣는다</div>
              <div class="center_Text level5">먹는다</div>
            </div>
            <div class="center_Image pasta">
              <div class="center_Text">a222222222222222222222222</div>
            </div>
            <div class="center_Image salad">
              <div class="center_Text">a333333333333333333333333</div>
            </div>
            <div class="center_Image dessert">
              <div class="center_Text">a444444444444444444444444</div>
            </div>
          </div>
        </div>
        <!-- 기본 냄비 그림자 -->
        <div class="center_Shadow"></div>
      </div>
      <div class="col-2 right">
        <div class="right_Chapters steak">
          <div class="right_Chapter level1"><span>1.</span>물</div>
          <div class="right_Chapter level2"><span>2.</span>기다리기</div>
          <div class="right_Chapter level3"><span>3.</span>스프</div>
          <div class="right_Chapter level4"><span>4.</span>면</div>
          <div class="right_Chapter level5"><span>5.</span>먹기</div>
        </div>
        <div class="right_Chapters pasta">
          <div class="right_Chapter level1"><span>1.</span>1단계</div>
          <div class="right_Chapter level2"><span>2.</span>2단계</div>
          <div class="right_Chapter level3"><span>3.</span>3단계</div>
          <div class="right_Chapter level4"><span>4.</span>4단계</div>
          <div class="right_Chapter level5"><span>5.</span>5단계</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageRecipes',
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        const center = $('.center').addClass('on');
      }, 500);

        const levels = ['.level1', '.level2', '.level3', '.level4', '.level5'];

        levels.forEach( level => {
          const right_Chapter = $('.right_Chapter' + level);
          const center_Text = $('.center_Text' + level);

          $(right_Chapter).click(function (e) { 
            $('.right_Chapter').removeClass('on');
            $('.center_Text').removeClass('view');
            $(right_Chapter).addClass('on');
            $(center_Text).addClass('view');
            
            });
        });

      const lists = ['.steak', '.pasta', '.salad', '.dessert'];

      lists.forEach( list => {

        const left_List = $('.left_List'+ list);
        const center_Image = $('.center_Image'+ list);
        const rigth_Chapters = $('.right_Chapters'+ list);

        left_List.click(function (e) { 
          $('.center_Text').removeClass('view'); 
          $('.left_List').removeClass('on');
          $('.center_Image').removeClass('view');
          $('.right_Chapters').removeClass('on');
          left_List.addClass('on');
          center_Image.addClass('view');
          rigth_Chapters.addClass('on');

        });
      });

    });
  }
};

</script>

<style lang="scss" scoped>

// menu: https://fonts.google.com/specimen/Cabin+Sketch
//       https://fonts.google.com/specimen/Gloria+Hallelujah

// detail: https://fonts.google.com/specimen/Shadows+Into+Light
// font: https://fonts.google.com/specimen/Courgette

*{margin: 0; padding: 0;}

.recipe{
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('http://fastandfresco.it/wp-content/uploads/2018/02/fondo_granito.jpg') no-repeat;
  background-size: cover;
}
.left{
  margin-left: 20px;
  position: absolute;
  left:0;
  top:50%;
  transform: translateY(-50%);
}
.left_Lists{
  font-family: 'Aclonica', sans-serif;
  font-size: 25px;
  color: #fff;
}
.left_List{
  padding: 5px 0;
}

.right{
  margin-right: 20px;
  position: absolute;
  right:0;
  top:50%;
  transform: translateY(-50%);
}
.right_Chapters{
  display: none;
  font-family: 'Courgette', cursive;
  font-size: 30px;
  color: #fff;
}
span{
  font-size: 40px;
}
.center{
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(100%);
  transition: all 1s;
  
}
.center.on{
  transform: translate(-50%, -50%);
}
.center_Def{
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 85%;
  transform: translate(-50%, -50%);
  background-image: url("http://fastandfresco.it/wp-content/uploads/2018/02/pentola_vuota.png");
  background-size: 500px 500px;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 20;
}

.center_Shadow{
  position: absolute;
  top: 25%;
  left: 20%;
  width: 80%;
  height: 80%;
  background-image: url("http://fastandfresco.it/wp-content/uploads/2018/02/ombra.png");
  background-size: 500px 500px;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
}
.center_View{
  overflow: hidden;
  position: relative;
  top: 50%;
  left: 50%;
  width: 442px;
  height: 442px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.center_Image{
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 1s;
  transform: scale(0);
}
.center_Image.view{
  visibility: visible;
}
.center_Image.steak{
  transform: scale(1);
  background-image: url("http://fastandfresco.it/wp-content/uploads/2018/02/erbette.jpg");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.center_Text{
  position: absolute;
  width: 40%;
  height: 70%;
  border: 1px solid black;
  left: 51%;
  top: 16%;
  transform:translateY(-100%);
  transition: all 1s;
}
.center_Text.view{
  transform:translateY(0%);
}
.right_Chapters.on{
  display: block;
}
</style>
