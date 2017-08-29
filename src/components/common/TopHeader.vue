<template>
  <!-- <div id="top_header"> -->
  <div v-bind:class="[{top_header_b:topHeaderState}, top_header_a]">
    <div class="content">
      <ul>
        <li >
          <router-link to='home' class="logo" >首页</router-link>
        </li>
        <!--<li class="product" @mouseenter="showList" @mouseleave="closeLsit">产品-->
        <li class="product" v-on:mouseover="changeShow()" >产品
          <!--<div class="product_list" v-if="state" v-bind:class="{a: state, b: state_b}">
                            <span v-bind:class="{span_a: state, span_b: state_b}"></span>
                            <div>
                              <ul>
                                <router-link to='homeschool'>家校通</router-link>
                              </ul>
                            </div>
                          </div>-->
          <!-- <div class="product_list">
                    <span></span>
                    <ul class="list">
                      <li>
                        <router-link class="list" to='SmartBracelet' tag="a">手环</router-link>
                      </li>
                      <li>
                        <router-link class="list" to='HomeSchool' tag="a">家校通</router-link>
                      </li>
                      <li>
                        <router-link class="list" to='ClassCard' tag="a">电子班牌</router-link>
                      </li>
                    </ul>
                  </div> -->
  
        </li>
         <!-- <li class="x" v-on:mouseover="resetShow()">商务合作
          <div class="y">
  
          </div>
        </li>  -->
        <li >
          <router-link to='aboutus' class="logo">关于我们</router-link>
        </li>
        <li>
          <a target="_blank" class="a" href="https://www.lagou.com/gongsi/150659.html">加入我们</a>
        </li>
        <li>
          <a class="a" href="http://manager.zcxiaolian.com/#/login">后台登录</a>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="product_list" v-if="show" v-on:mouseleave="resetShow()">
        <div class="product_content">
          <router-link class="product_name" tag="div" to="classcard">
            <p>
              <img class="svg" src="../../static/banner_pad.svg" alt="">
            </p>
            <p>电子班牌</p>
          </router-link>
          <router-link class="product_name" tag="div" to="homeschool">
            <p>
              <img class="svg" src="../../static/banner_phone.svg" alt="">
            </p>
            <p>&nbsp;家校通</p>
          </router-link>
          <router-link class="product_name" tag="div" to="smartbracelet">
            <p>
              <!-- <object data="banner_band.svg" type="image/svg+xml"></object> -->
              <!-- <iframe src="../../static/banner_band.svg"></iframe> -->

               <img class="banner_band" src="../../static/banner_band.svg" alt=""> 
            </p>
            <p class="banner_band_p">&nbsp;&nbsp;手环</p>
          </router-link>
        </div>
      </div>
    </transition>
  
  </div>
  <!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        state: false,
        topHeaderState: false,
        top_header_a: 'top_header_a'
      }

    },
    components: {
    },
    ready() {
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        var yheight = window.scrollY;
        if (yheight > 60) {
          this.topHeaderState = true;
        } else if (yheight === 0) {
          if(this.show){
            this.toHeaderState = true;
          }else {
            this.topHeaderState = false            
          }
          // this.topHeaderState = false
        }
        // console.log(yheight);
      },
      changeShow() {
        this.show = true;
        this.topHeaderState = true;
      },
      resetShow() {
        this.show = false;
        var yheight = window.scrollY;
        if (yheight > 60) {
          this.topHeaderState = true;
        } else if (yheight === 0) {
          this.topHeaderState = false 
        }
      }
    }
  }
</script>

<style scoped>
  /* .product:hover .product_list {
      width: 1980px;
      height: 160px;
      opacity: 1;
      transform: scale(1, 1);
    }
     */
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  
  .fade-enter,
  .fade-leave-to
  /* .fade-leave-active in <2.1.8 */
  
  {
    opacity: 0
  }
  
  
  
  
  
  /* .product:hover span {
                width: 10px;
                height: 10px;
                top: -5px;
              }
               */
  
  .product_list {
    position: absolute;
    width: 100%;
    /* left: -556px; */
    /* max-width: 1980px; */
    top: 70px;
    z-index: 999;
    background: rgba(2, 1, 37, 0.5);
    height: 100px;
    /* text-align: center; */
  }
  
  .product_content {
    width: 900px;
    display: flex;
    height: 100%;
    flex-direction: row;
    margin: -8px auto; 
    text-align: left;
    
  }
  
  .product_name {
    /* flex: 1; */
    /* width: 10px; */
    margin-right: 100px;
    transition: all 0.5s;
    cursor:pointer;
  }
   .product_name:hover p{
    color: #FFFFFF;
  } 
  .product_name p {
    color:#cbd4da;
    font-size: 12px;
    margin-top: 10px;
    /* text-align: center; */
  }
  .banner_band_p {
    margin-top: 6px!important;
  }
  .svg {
    margin-top: 15px;
    width: 50px;
    /* height: 20px; */
  }
  .banner_band {
    margin-top: 12px;
    width: 35px;
    /* height: 20px; */
  }
  
  
  
  
  
  /* span {
                transition: all 0.5s;
                -webkit-transition: all 0.5s;
                position: absolute;
                top: 0;
                left: 30px;
                transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                display: block;
                width: 0;
                height: 0;
                border-top: 0px solid #e8e8e8;
                border-left: 0px solid #e8e8e8;
                border-radius: 1px;
                background-color: #fff;
              } */
  
  .top_header_a {
    width: 100%;
    height: 70px;
    /* background: red; */
    position: fixed;
    text-align: center;
    z-index: 9999;
    animation: topHeader_a_bg 0.5s alternate;
    -webkit-animation: topHeader_a_bg 0.5s alternate;
    animation-fill-mode: forwards;
    /* box-shadow: 0 2px 3px #888888; */
  }

  
  
  @keyframes topHeader_b_bg {
    from {
       background: rgba(2, 1, 37, 0); 
    }
    to {
        background: rgba(2, 1, 37, 0.8);  
    }
  }
  
  @keyframes topHeader_a_bg {
    from {
       background: rgba(2, 1, 37, 0.3); 
    }
    to {
       background: rgba(2, 1, 37, 0); 
    }
  }
  
  .top_header_b {
    width: 100%;
    height: 70px;
    /* background: rgba(47, 53, 67, 0.95);*/
    animation: topHeader_b_bg 1s alternate;
    -webkit-animation: topHeader_b_bg 1s alternate;
    animation-fill-mode: forwards;
    position: fixed;
    text-align: center;
    z-index: 9999;
    /* box-shadow: 0 2px 3px #888888; */
  }
  
  .logo {
    color: #cbd4da;
  }
  .logo:hover {
    color: #ffffff;
  }
  .a {
    color:#cbd4da;
    font-size: 16px;
  }
  .a:hover {
    color: #ffffff;
  }
  .top_header_a ul li {
    display: flex;
    color: #cbd4da;
    font-size: 16px;
    margin-right: 60px;
    position: relative;
    height: 80px;
    float: left;
  }
  .top_header_a ul li:hover {
    color: #ffffff;
  }
  .top_header_a ul {
    list-style-type: none;
    line-height: 70px;
    white-space: nowrap;
    text-align: left;
    margin-left: 20px;
  }
  
  .top_header_a ul li:nth-child(5n) {
    float: right;
    margin-right: 20px;
    /*margin-left: 250px;*/
  }
  
  .top_header_a li:hover {
    cursor: pointer;
  }
  
  .top_header_b ul li {
    display: flex;
    color: #cbd4da;
    font-size: 16px;
    margin-right: 60px;
    position: relative;
    height: 80px;
    float: left;
  }
  
  .top_header_b ul {
    list-style-type: none;
    line-height: 70px;
    white-space: nowrap;
    text-align: left;
    margin-left: 20px;
  }
  
  .top_header_b ul li:nth-child(6n) {
    float: right;
    margin-right: 20px;
    /*margin-left: 250px;*/
  }
  
  .top_header_b li:hover {
    cursor: pointer;
  }
  
  .content {
    width: 1100px;
    margin: 0 auto;
  }
</style>

