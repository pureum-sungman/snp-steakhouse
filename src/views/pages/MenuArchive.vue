<template>
  <div page="menu-archive">
    <div class="bg">
      <div class="menu">
        <div class="menu_view">
          <div class="lists ho1">
            <h3>LIST1</h3>
            <div class="list">
              <span>List1 span1</span>
              <span>List1 span2</span>
              <span>List1 span3</span>
              <span>List1 span4</span>
            </div>
          </div>
          <div class="lists ho2">
            <h3>LIST2</h3>
            <div class="list">
              <span>List2 span1</span>
              <span>List2 span2</span>
              <span>List2 span3</span>
              <span>List2 span4</span>
            </div>
          </div>
          <div class="lists ho3">
            <h3>LIST3</h3>
            <div class="list">
              <span>List3 span1</span>
              <span>List3 span2</span>
              <span>List3 span3</span>
              <span>List3 span4</span>
            </div>
          </div>
          <div class="lists ho4">
            <h3>LIST4</h3>
            <div class="list">
              <span>List4 span1</span>
              <span>List4 span2</span>
              <span>List4 span3</span>
              <span>List4 span4</span>
            </div>
          </div>
          <div class="lists ho5">
            <h3>LIST5</h3>
            <div class="list">
              <span>List5 span1</span>
              <span>List5 span2</span>
              <span>List5 span3</span>
              <span>List5 span4</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail ho-default on"></div>
      <div class="detail ho"></div>
      <div class="detail ho1"></div>
      <div class="detail ho2"></div>
    </div>
  </div>
  <!-- [page="menu"] -->
</template>

<script>
export default {
  name: 'PageMenuArchive',
  mounted() {
    this.$nextTick(() => {
      const menuLists = ['.ho1', '.ho2', '.ho3', '.ho4', '.ho5'];

      menuLists.forEach(menuList => {
        const view = document.querySelector('.menu_view');
        const check = document.querySelectorAll('.lists');
        const menu = document.querySelector('.lists' + menuList);
        const check_d = document.querySelectorAll('.detail');
        const detail = document.querySelector('.detail' + menuList);
        const list = menu.querySelector('.list');

        menu.addEventListener('click', function() {
          check.forEach(key => {
            key.classList.remove('on');
            key.querySelector('.list').classList.remove('on');
          });
          this.classList.add('on');
          list.classList.add('on');
          check_d.forEach(key => {
            key.classList.remove('view');
          });
          detail.classList.add('view');
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.bg {
  overflow: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('../../assets/images/MenuBg2.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
}
.menu {
  display: block;
  position: absolute;
  top: 0%;
  left: 4%;
  width: 30%;
  height: 90%;
  border: 3px solid #fff;
  color: #fff;
  background: url('../../assets/images/Menu2.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
.lists {
  padding-top: 5%;
  padding-left: 20%;
  white-space: pre-line;
}
.list {
  display: none;
  padding-left: 5%;
}
.list.on {
  display: block;
}
span {
  display: block;
  padding: 5px;
}

.detail {
  position: absolute;
  top: 10%;
  left: 35%;
  width: 70%;
  height: 80%;

  transform: translateX(100%);
  transition: all 1s;
}
.view {
  z-index: 10;
  transform: translateX(0%);
}
.detail.ho1 {
  background: url('../../assets/images/MenuDetail.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
.detail.ho2 {
  background: url('../../assets/images/MenuDetail2.png') no-repeat;
  background-size: contain;
  background-position: center center;
}
</style>
