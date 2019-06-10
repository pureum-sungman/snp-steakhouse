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
            <div :class="slide.img">
            </div>
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
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                {{slide_text.btn}}
              </button>
            </div>
          </div>
        </div>
        <!-- .col-12 col-md-6 col-lg-4 -->
      </div>
      <!-- .row -->
    </section>
    <!-- #recipes -->
    <modal />
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      slides: [{ class:'intro slide1', img:'bg1' }, { class:'intro slide2', img:'bg2' }, 
      { class:'intro slide3', img:'bg3' }, { class:'intro slide4', img:'bg4' }, { class:'intro slide5', img:'bg5' }],
      slides_text: [{ class:'content slide1', text:'texts bg1_text', title:'bg_text1 sss ssss ss ssss ssss sssss ssssssss ssssssssssss', btn:'text1' }, { class:'content slide2', text:'texts bg2_text', title:'bg_text2', btn:'text2' }, 
      { class:'content slide3', text:'texts bg3_text', title:'bg_text3', btn:'text3' }, { class:'content slide4', text:'texts bg4_text', title:'bg_text4', btn:'text4' }, { class:'content slide5', text:'texts bg5_text', title:'bg_text5', btn:'text5' }]
    };
  },
  mounted() {
    this.$nextTick(() => {

      function sss(){
        console.log("sss11");
        const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];

        slides.forEach(slide => {

          const slide_Bg = document.querySelector('.slide_Bg .' + slide); 
          const slide_Text = document.querySelector('.slide_Text .'+ slide);

          slide_Text.addEventListener('mouseover', function (){
            slide_Text.classList.add('on');
            slide_Bg.classList.add('view');
          });

          slide_Text.addEventListener('mouseout', function (){
            slide_Text.classList.remove('on');
            slide_Bg.classList.remove('view');
          });
          
        });
      }

      sss();
    });
    
  },
  methods: {},
  components: {
    Modal: ()=> import('@/views/components/Modal.vue')
  }
};
</script>

<style lang="scss" scoped>
    .slide_Bg{
      position: relative;
      width: 100%;
    }
    .intro{
      position: absolute;
      display: block;
      height: 100vh;
      border: 1px solid black;
    }
    .slide1{left: 0%; width: 20%;}.slide2{left: 20%; width: 20%;}
    .slide3{left: 40%; width: 20%;}.slide4{left: 60%; width: 20%;}.slide5{left: 80%; width: 20%;}

    .bg1{background-color: red; height: 100vh;}.bg2{background-color: yellow; height: 100vh;}
    .bg3{background-color: green; height: 100vh;}.bg4{background-color: blue; height: 100vh;}.bg5{background-color: purple; height: 100vh;}

    .slide1.view{width:100%; transform:translateX(0%); z-index: 20;}.slide2.view{width:100%; transform:translateX(-20%); z-index: 20;}
    .slide3.view{width:100%; transform:translateX(-40%); z-index: 20;}.slide4.view{width:100%; transform:translateX(-60%); z-index: 20;}.slide5.view{width:100%; transform:translateX(-80%); z-index: 20;}
    .slide_Text{
      position: relative;
      width: 100%;
    }
    .content{
      position: absolute;
      display: block;
      height: 100vh;
      background-color: transparent;
    }
    .text1{left: 0%; width: 20%;}.text2{left: 20%; width: 20%;}
    .text3{left: 40%; width: 20%;}.text4{left: 60%; width: 20%;}.text5{left: 80%; width: 20%;}

    .texts{
      position: absolute;
      left: 50%;
      width: 100%;
      height: 100%;
      transform: translateX(-50%);
      word-break: normal;
      z-index: 30;
      border: 1px solid black;
    }
    .T_title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .btn{
      position: absolute;
      top: 80%;
      left: 50%;
      transform:translateX(-50%);
    }

</style>

