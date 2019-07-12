<template>
  <div page="home">
      <!-- .row -->
      <div class="row">
        <div class="header on">
          <div class="logo">S&P</div>
          <div class="nav">
            <div class="nav_Lists">
              <div class="nav_List">HOME</div>
              <div class="nav_List">ABOUT</div>
              <div class="nav_List">MENU</div>
              <div class="nav_List">RECIPES</div>
              <div class="nav_List">SHOP</div>
            </div>
          </div>
        </div>
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
            </div>
          </div>
        </div>
        <div class="content_View">
          <div class="contents">CONTENT</div>
          <div class="content_Lists">
            <div class="content_List">
              <div class="content_Name">MENU</div>
              <div class="content_Image"></div>
            </div>
            <div class="content_List">
              <div class="content_Name">RECIPES</div>
              <div class="content_Image"></div>
            </div>
            <div class="content_List">
              <div class="content_Name">SHOP</div>
              <div class="content_Image"></div>
            </div>
          </div>
        </div>
        <div class="gallery_View">
          <div class="gallerys">GALLERY</div>
          <div class="gallery_List">
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
            <div class="gallery_Image"></div>
          </div>
        </div>
        <div class="footer_view">
          <div class="maps">
            <div class="map"></div>
            <div class="map_Info"></div>
          </div>
          <div class="footer">
            <div class="footer_Subject"></div>
          </div>
        </div>
        <!-- .col-12 col-md-6 col-lg-4 -->
      </div>
      <!-- .row -->
  </div>
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
      const nav_bar = $('.header');
      
      $(window).scroll(function(){
        var heigth = $(document).scrollTop();
        if(heigth >= 80){
          $(nav_bar).removeClass('on');
          }else{
          $(nav_bar).addClass('on');
        }
      })

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
    });
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
  .header{
    position: fixed;
    width: 100vw;
    z-index: 100;
  }
  .header.on{
    height: 80px;
    background: rgba($color: black, $alpha: 0.7);
  }
  
  .logo{
    position: absolute;
    left: 3%;
    width: 13%;
    height: 80px;
    font-size: 20px;
    text-align: center;
    border: 1px solid #fff;
    z-index: 50;
  }
  .nav{
    position: absolute;
    top: 0%;
    width: 100vw;
    height: 80px;
    color: #fff;
    z-index: 30;
  }
  .nav_Lists{
    position: relative;
    left: 28%;
    width: 60%;
    text-align: right;
  }
  .nav_List{
    padding-top: 20px;
    display: inline-block;
    width: 15%;
    height: 100%;
    font-size: 20px;
    text-align: center;
  }



    .slide_Bg{
      position: relative;
      width: 100vw;
    }
    .intro{
      position: absolute;
      display: block;
      height: 100vh;
      transition: all 0.5s;
    }
    .slide1{left: 0%; width: 20%;}.slide2{left: 20%; width: 20%;}
    .slide3{left: 40%; width: 20%;}.slide4{left: 60%; width: 20%;}.slide5{left: 80%; width: 20%;}

    .bg1{
      background: red;
      height: 100%;}
     .bg2{
       background: orangered; 
       height: 100vh;
       }
    .bg3{
      background: yellow; 
      height: 100vh;
      }
      .bg4{background: green; 
      height: 100vh;
      }
      .bg5{background: blue; 
      height: 100vh;
      }

    .slide1.view{width:100%; transform:translateX(0%); z-index: 20;}.slide2.view{width:100%; transform:translateX(-20%); z-index: 20;}
    .slide3.view{width:100%; transform:translateX(-40%); z-index: 20;}.slide4.view{width:100%; transform:translateX(-60%); z-index: 20;}.slide5.view{width:100%; transform:translateX(-80%); z-index: 20;}
    .slide_Text{
      position: relative;
      width: 100vw;
      height: 100vh;
      color: #fff;
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
    

  .content_View{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #000;
  }
  .contents{
    position: absolute;
    width:100%;
    height: 15%;
    text-align: center;
    color: #fff;
    }

  .content_Lists{
    position: absolute;
    top: 50%;
    width: 100%;
    height: 60%;
    border: 1px solid #fff;
    background: blue;
    transform: translateY(-50%);
    text-align: center;
  }
  .content_List{
    margin-left: 15px; 
    display: inline-block;
    width: 30%;
    height: 100%;
    border: 1px solid #fff;
    text-align: center;
    color: #fff;
  }
  .content_Name{
    width: 100%;
    height: 15%;
    border: 1px solid #fff;
  }
  .content_Image{
    margin: 10px 0;
    width: 100%;
    height: 80%;
    border: 1px solid #fff;
  }
  .content_List:nth-child(1) > .content_Image{background: red}
  .content_List:nth-child(2) > .content_Image{background: orangered}
  .content_List:nth-child(3) > .content_Image{background: yellow}

.gallery_View{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #fff;
    color: #000;
  }
.gallerys{
  position: absolute;
  width:100%;
  height: 15%;
  text-align: center;
  color: #000;
  border: 1px solid black;
}
.gallery_List{
  position: absolute;
  top: 15%;
  width:100%;
  height: 85%;
  background: blue;
  border: 1px solid black;
  text-align: center;
}
.gallery_Image{
  margin-top: 15px;
  display: inline-block;
  width: 20%;
  height: 45%;
  border: 1px solid black;
  
}




  .footer_view{
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #000;
  }
  .maps{
    position: absolute;
    width: 100%;
    height: 75%;
    border: 1px solid #fff;
    background: orange;
  }
  .map{
    width: 50%;
    height: 70%;
    border: 1px solid #fff;
    background: orange;
    transform: translate(50%, 10%);
  }
  .map_Info{
    width: 50%;
    height: 10%;
    border: 1px solid #fff;
    transform: translate(50%, 100%);
  }
  .footer{
    position: absolute;
    top: 75%;
    width: 100%;
    height: 25%;
    border: 1px solid #fff;
    background: green;
  }
  .footer_Subject{

  }




</style>

