<template>
  <div page="menu">
    <!-- 백그라운드 -->
    <div class="background">
      <!-- 리스트구역 -->
      <div class="menuView">
        <div class="menuList">
          <!-- 대 메뉴 -->
          <div class="lists steaks on">
            <h3>STEAK</h3>
            <!-- 소 메뉴 -->
            <div class="list steak">
              <div class="list_Menu steak1">steak1</div>
              <div class="list_Menu steak2">steak2</div>
              <div class="list_Menu steak3">steak3</div>
              <div class="list_Menu steak4">steak4</div>
            </div>
          </div>
          <div class="lists pastas">
            <h3>PASTA</h3>
            <div class="list pasta">
              <div class="list_Menu pasta1">pasta1</div>
              <div class="list_Menu pasta2">pasta2</div>
              <div class="list_Menu pasta3">pasta3</div>
              <div class="list_Menu pasta4">pasta4</div>
            </div>
          </div>
          <div class="lists salads">
            <h3>SALAD</h3>
            <div class="list salad">
              <div class="list_Menu salad1">salad1</div>
              <div class="list_Menu salad2">salad2</div>
              <div class="list_Menu salad3">salad3</div>
              <div class="list_Menu salad4">salad4</div>
            </div>
          </div>
          <div class="lists desserts">
            <h3>DESSERT</h3>
            <div class="list dessert">
              <div class="list_Menu dessert1">dessert1</div>
              <div class="list_Menu dessert2">dessert2</div>
              <div class="list_Menu dessert3">dessert3</div>
              <div class="list_Menu dessert4">dessert4</div>
            </div>
          </div>
          <div class="lists drinks">
            <h3>DRINKS</h3>
            <div class="list drink">
              <div class="list_Menu drink1">drink1</div>
              <div class="list_Menu drink2">drink2</div>
              <div class="list_Menu drink3">drink3</div>
              <div class="list_Menu drink4">drink4</div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <div class="detail steaks">
          <div class="detail_view"></div>
        </div>
        <div class="detail pastas">
          <div class="detail_view"></div>
        </div>
        <div class="detail salads">
          <div class="detail_view"></div>
        </div>
        <div class="detail desserts">
          <div class="detail_view"></div>
        </div>
        <div class="detail drinks">
          <div class="detail_view"></div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'PageMenu',
  mounted() {
    this.$nextTick(() => {
      
        const menuLists = ['.steaks', '.pastas', '.salads', '.desserts', '.drinks'];

        menuLists.forEach( menuList => {

          const lists = $('.lists' + menuList);
          const list_Menu = $('.list_Menu');
          const detail = $('.detail' + menuList);
          const lists_On_Check = $('.lists');
          const list_On_Check = $('.list');
          const list_Menu_view_Check = $('.list_Menu');
          const detail_View_Check = $('.detail');
          const detail_view = $('.detail_view');

        // 대메뉴 클릭 시 
          $(lists).click(function (e) { 
            // 모든 온 클래스 삭제
            $(lists_On_Check).removeClass('on');
            $(list_On_Check).removeClass('on');
            $(detail_View_Check).removeClass('view');
            // 클릭 된 클래스 온
            $(this).addClass('on');
            $(this).children('.list').addClass('on');
            $(detail).addClass('view');

          // 소메뉴 클릭 시
            $(list_Menu).click(function (e){

              // 모든 뷰 클랙스 삭제
              $(detail_view).removeClass().addClass('detail_view');
              $(list_Menu_view_Check).removeClass('view');

              // 클릭 된 클래스 뷰
              $(this).addClass('view');
              const cName = this.className.split(' ');
              $(detail_view).addClass(cName[1]);

            });
          });
        
        });
    });
  }
}

</script>

<style lang="scss" scoped>
*{padding: 0; margin:0;}
  .background{
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('../../assets/images/MenuBg2.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .menuView{
    position: absolute;
    top: 0%;
    width: 35%;
    height: 100%;
    color: #fff;
    background: url('../../assets/images/Menu3.png') no-repeat;
    background-size: cover;
    background-position: center center;
  }
  .lists{
    padding-top: 5%;
    padding-left: 20%;
   white-space: pre-line; 
  }
  .list{
    display: none;
    padding-left: 5%;
  }
  .list.on{
    display: block;
  }
  .list > div{
    display: block;
    padding: 5px;
  }
  
  .details{
    position: absolute;
    right: 0;
    width: 65%;
    height: 100%;
  }
  .detail{
    overflow: hidden;
    position: absolute;
    top: 10%;
    left: 20%;
    width: 500px;
    height: 500px;
    transform: translateX(100%);
    transition: all 2s;
  }
.view{
  z-index: 10;
  transform: translateX(0%);
}
.detail.steaks{
    background: url('../../assets/images/steak.png') no-repeat;
    background-size: contain;
    background-position: center center;
}
.detail.pastas{
    background: url('../../assets/images/pasta.png') no-repeat;
    background-size: contain;
    background-position: center center;
}
.detail.salads{
    background: url('../../assets/images/salad.png') no-repeat;
    background-size: contain;
    background-position: center center;
}
.detail.desserts{
    background: url('../../assets/images/dessert.png') no-repeat;
    background-size: contain;
    background-position: center center;
}
.detail.drinks{
    background: url('../../assets/images/drink.png') no-repeat;
    background-size: contain;
    background-position: center center;
}
.detail_view{
  position: absolute;
  top: 3%;
  left: 3%;
  width: 95%;
  height: 95%;
  overflow: hidden;
  border-radius: 50%;
}
.detail_view.pasta1{background: url('../../assets/images/pasta1.png') no-repeat; background-size: contain; background-position: center center;}
.detail_view.pasta2{background: url('../../assets/images/pasta2.jpg') no-repeat; background-size: contain; background-position: center center;}
.detail_view.salad1{background: url('../../assets/images/salad1.jpg') no-repeat; background-size: contain; background-position: center center;}
.detail_view.salad2{background: url('../../assets/images/salad2.jpg') no-repeat; background-size: contain; background-position: center center;}
.detail_view.salad3{background: url('../../assets/images/salad3.jpg') no-repeat; background-size: contain; background-position: center center;}
.detail_view.salad4{background: url('../../assets/images/salad4.jpg') no-repeat; background-size: contain; background-position: center center;}

</style>

