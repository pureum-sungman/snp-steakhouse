<template>
  <div page="recipe-archive">
    <div class="row recipe">
      <div class="col-2 left">
        <div class="lists">
          <div class="list">qqqqq</div>
          <div class="list">wwwww</div>
          <div class="list">sssss</div>
          <div class="list">aaaaa</div>
        </div>
      </div>
      <div class="col-8 center">
        <!-- 기본 냄비 구역 -->
        <div class="def">
          <!-- 음식 이미지 구역 hidden -->
          <div class="iii">
            <!-- 음식 이미지 -->
            <div class="jjj">
              <!-- 텍스트 구역 -->
              <div class="text">asdasdasdasdasdasdasd</div>
            </div>
          </div>
        </div>
        <!-- 기본 냄비 그림자 -->
        <div class="ss"></div>
      </div>
      <div class="col-2 right">
        <div class="chapters">
          <div class="chapter font-cabin"><span>1.</span> iwiwiwiwi</div>
          <div class="chapter"><span>2.</span> iwiwiwiwi</div>
          <div class="chapter"><span>3.</span> iwiwiwiwi</div>
          <div class="chapter"><span>4.</span> iwiwiwiwi</div>
          <div class="chapter"><span>5.</span> iwiwiwiwi</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageRecipeArchive'
};
</script>

<style lang="scss" scoped>
// menu: https://fonts.google.com/specimen/Cabin+Sketch
//       https://fonts.google.com/specimen/Gloria+Hallelujah

// detail: https://fonts.google.com/specimen/Shadows+Into+Light
// font: https://fonts.google.com/specimen/Courgette

* {
  margin: 0;
  padding: 0;
}

.recipe {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('http://fastandfresco.it/wp-content/uploads/2018/02/fondo_granito.jpg')
    no-repeat;
  background-size: cover;
}
.left {
  margin-left: 20px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.lists {
  font-family: 'Aclonica', sans-serif;
  font-size: 25px;
  color: #fff;
}
.list {
  padding: 5px 0;
}

.right {
  margin-right: 20px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.chapters {
  font-family: 'Courgette', cursive;
  font-size: 30px;
  color: #fff;
}
span {
  font-size: 40px;
}

.center {
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}
.def {
  position: relative;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 85%;
  transform: translate(-50%, -50%);
  background-image: url('http://fastandfresco.it/wp-content/uploads/2018/02/pentola_vuota.png');
  background-size: 500px 500px;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: 20;
}

.ss {
  position: absolute;
  top: 25%;
  left: 20%;
  width: 80%;
  height: 80%;
  background-image: url('http://fastandfresco.it/wp-content/uploads/2018/02/ombra.png');
  background-size: 500px 500px;
  background-position: center center;
  background-repeat: no-repeat;
  z-index: -1;
}
.iii {
  overflow: hidden;
  position: relative;
  top: 50%;
  left: 50%;
  width: 442px;
  height: 442px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.jjj {
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 100%;
  background-image: url('http://fastandfresco.it/wp-content/uploads/2018/02/erbette.jpg');
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
.text {
  position: absolute;
  width: 40%;
  height: 70%;
  border: 1px solid black;
  left: 50%;
  top: 15%;
}

.iii:hover .jjj {
  visibility: visible;
  transition: all 1s;
}
</style>
