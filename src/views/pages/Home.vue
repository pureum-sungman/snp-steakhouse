<template>
  <div page="home">
    <section id="recipes">
      <div class="row">
        <div class="col text-center">
          <h1 class="font-cursive display-1">
            Recipes
          </h1>
        </div>
        <!-- .col -->
      </div>
      <!-- .row -->
      <div class="row">
        <div class="slide_Bg">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            :class="slide.class"
          >
            <div :class="slide.img"></div>
          </div>
        </div>
        <div class="slide_Text">
          <div
            v-for="(slide_text, index) in slides_text"
            :key="index"
            :class="slide_text.class"
          >
            <div :class="slide_text.text">
              <div class="T_title">
                {{ slide_text.title }}
              </div>
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                {{ slide_text.btn }}
              </button>
            </div>
          </div>
        </div>
        <!-- .col-12 col-md-6 col-lg-4 -->
      </div>
      <!-- .row -->
    </section>
    <!-- #recipes -->
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      slides: [
        { class: 'intro slide1', img: 'bg1' },
        { class: 'intro slide2', img: 'bg2' },
        { class: 'intro slide3', img: 'bg3' },
        { class: 'intro slide4', img: 'bg4' },
        { class: 'intro slide5', img: 'bg5' }
      ],
      slides_text: [
        {
          class: 'content slide1',
          text: 'texts bg1_text',
          title: 'bg_text1 sss ssss ss ssss ssss sssss ssssssss ssssssssssss',
          btn: 'text1'
        },
        {
          class: 'content slide2',
          text: 'texts bg2_text',
          title: 'bg_text2',
          btn: 'text2'
        },
        {
          class: 'content slide3',
          text: 'texts bg3_text',
          title: 'bg_text3',
          btn: 'text3'
        },
        {
          class: 'content slide4',
          text: 'texts bg4_text',
          title: 'bg_text4',
          btn: 'text4'
        },
        {
          class: 'content slide5',
          text: 'texts bg5_text',
          title: 'bg_text5',
          btn: 'text5'
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      function sss() {
        const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

        slides.forEach(slide => {
          const slide_Bg = document.querySelector('.slide_Bg .' + slide);
          const slide_Text = document.querySelector('.slide_Text .' + slide);

          slide_Text.addEventListener('mouseover', function() {
            slide_Text.classList.add('on');
            slide_Bg.classList.add('view');
          });

          slide_Text.addEventListener('mouseout', function() {
            slide_Text.classList.remove('on');
            slide_Bg.classList.remove('view');
          });
        });
      }

      sss();
    });
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
.slide_Bg {
  position: relative;
  width: 100%;
}
.intro {
  position: absolute;
  display: block;
  height: 100vh;
  border: 1px solid black;
  transition: all 0.5s;
}
.slide1 {
  left: 0%;
  width: 20%;
}
.slide2 {
  left: 20%;
  width: 20%;
}
.slide3 {
  left: 40%;
  width: 20%;
}
.slide4 {
  left: 60%;
  width: 20%;
}
.slide5 {
  left: 80%;
  width: 20%;
}

.bg1 {
  background: url('https://previews.123rf.com/images/alexraths/alexraths1602/alexraths160200020/51757932-%EB%B0%94%EB%B2%A0%ED%81%90%EC%9D%98-%EC%84%9D%ED%83%84-%EC%9C%84%EC%97%90-%EA%B5%AC%EC%9A%B4-%EC%87%A0%EA%B3%A0%EA%B8%B0-%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC.jpg')
    no-repeat;
  background-size: cover;
  height: 100%;
}
.bg2 {
  background: url('http://benalman.com/code/projects/jquery-bbq/examples/fragment-basic/bbq.jpg')
    no-repeat;
  background-size: cover;
  height: 100vh;
}
.bg3 {
  background: url('https://steptohealth.co.kr/wp-content/uploads/2018/06/Chicken-Wings-in-BBQ-Sauce-Recipe.jpg')
    no-repeat;
  background-size: cover;
  height: 100vh;
}
.bg4 {
  background: url('https://www.newmarketbbq.com/wp-content/uploads/2018/05/BBQ-YouTube-Channel-Art-V2-1.png')
    no-repeat;
  background-size: cover;
  height: 100vh;
}
.bg5 {
  background: url('https://static1.squarespace.com/static/587bf21537c5818cdac554b9/t/5aec9ed503ce640a614ac85e/1525456625710/BBQ2.JPG?format=2500w')
    no-repeat;
  background-size: cover;
  height: 100vh;
}

.slide1.view {
  width: 100%;
  transform: translateX(0%);
  z-index: 20;
}
.slide2.view {
  width: 100%;
  transform: translateX(-20%);
  z-index: 20;
}
.slide3.view {
  width: 100%;
  transform: translateX(-40%);
  z-index: 20;
}
.slide4.view {
  width: 100%;
  transform: translateX(-60%);
  z-index: 20;
}
.slide5.view {
  width: 100%;
  transform: translateX(-80%);
  z-index: 20;
}
.slide_Text {
  position: relative;
  width: 100%;
  color: #fff;
}
.content {
  position: absolute;
  display: block;
  height: 100vh;
  background-color: transparent;
}
.text1 {
  left: 0%;
  width: 20%;
}
.text2 {
  left: 20%;
  width: 20%;
}
.text3 {
  left: 40%;
  width: 20%;
}
.text4 {
  left: 60%;
  width: 20%;
}
.text5 {
  left: 80%;
  width: 20%;
}

.texts {
  position: absolute;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  word-break: normal;
  z-index: 30;
  border: 1px solid black;
}
.T_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
