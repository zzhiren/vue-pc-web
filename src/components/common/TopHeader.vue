<template>
  <!-- <div id="top_header"> -->
  <div v-bind:class="[{top_header_b:topHeaderState}, top_header_a]">
    <div class="content">
      <ul>
        <li>
          <img class="zclogo" src="../../static/zclogo.png" alt="">
        </li>
        <li >
          <router-link to='home' class="logo" >首页</router-link>
        </li>
        <li class="product" v-on:mouseover="changeShow()" >
          产品
        </li>
        <li >
          <router-link to='aboutus' class="a" tag="span">关于我们</router-link>
        </li>
        <li class="m_right">
          <a target="_blank" class="a" href="https://www.lagou.com/gongsi/150659.html">加入我们</a>
        </li>
        
        <li class="m_right a"><span class="border"></span></li>
        <li>
          <a target="_blank" class="a" href="http://manager.zcxiaolian.com/#/login">后台登录</a>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="product_list" v-if="show" v-on:mouseleave="resetShow()">
        <div class="product_content">
          <router-link class="product_name" tag="div" to="classcard">
            <p class="svg_p">
              <img class="svg" src="../../static/banner_pad.svg" alt="">
            </p>
            <p  class="svg_p">电子班牌</p>
          </router-link>
          <router-link class="product_name" tag="div" to="homeschool">
            <p class="svg_p">
              <img class="svg" src="../../static/banner_phone.svg" alt="">
            </p>
            <p  class="svg_p">家校通</p>
          </router-link>
          <router-link class="product_name" tag="div" to="smartbracelet">
            <p class="svg_p">
               <img class="banner_band" src="../../static/banner_band.svg" alt=""> 
            </p>
            <p class="banner_band_p"> 手环+智能卡</p>
          </router-link>
        </div>
      </div>
    </transition>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      state: false,
      topHeaderState: false,
      top_header_a: "top_header_a"
    };
  },
  components: {},
  ready() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var yheight = window.scrollY;
      if (yheight > 60) {
        this.topHeaderState = true;
      } else if (yheight === 0) {
        if (this.show) {
          this.toHeaderState = true;
        } else {
          this.topHeaderState = false;
        }
      }
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
        this.topHeaderState = false;
      }
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.product_list {
  position: absolute;
  width: 100%;
  top: 70px;
  z-index: 999;
  background: rgba(2, 1, 37, 0.5);
  height: 100px;
}
.svg_p{
  text-align: center;
}
.banner_band_p{
  text-align: center;
  margin-top: 80px!important;
  padding-left: 10px;
}
.product_content {
  width: 400px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  text-align: right;
  /* background: blue; */
  padding-left: 50px;
}

.product_name {
  /* margin-right: 100px; */
  transition: all 0.5s;
  width: 100px;
  cursor: pointer;
  /* background: red; */
  margin: -5px auto;
}
.product_name:hover p {
  color: #ffffff;
}
.product_name p {
  color: #cbd4da;
  font-size: 12px;
  margin-top: 10px;
}
.banner_band_p {
  margin-top: 0 !important;
  margin-left: -14px;
}
.svg {
  width: 50px;
  margin: 0 auto;
  margin-top: 15px!important;
}
.banner_band {
  margin-top: 12px;
  width: 35px;
  margin-bottom: 6px;
}

.top_header_a {
  width: 100%;
  height: 70px;
  position: fixed;
  text-align: center;
  z-index: 9999;
  /* animation: topHeader_a_bg 0.5s alternate; */
  /* -webkit-animation: topHeader_a_bg 0.5s alternate; */
  animation-fill-mode: forwards;
}
.border {
  height: 20px;
  border-right: 2px solid #cbd4da;
  margin-top: 26px;
  margin-left: 0;
}
.m_right{
  margin-right: 20px!important;
}
.m_left{
  margin-left: 20px!important;
}
.zclogo {
  width: 156px;
  height: 37px;
  margin-top: 15px;
  margin-right: 250px;
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
  animation: topHeader_b_bg 1s alternate;
  -webkit-animation: topHeader_b_bg 1s alternate;
  animation-fill-mode: forwards;
  position: fixed;
  text-align: center;
  z-index: 9999;
}

.logo {
  color: #cbd4da;
}
.logo:hover {
  color: #ffffff;
}
.a {
  color: #cbd4da;
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

.top_header_a li:hover {
  cursor: pointer;
}

.top_header_b ul li {
  display: flex;
  color: #cbd4da;
  font-size: 16px;
  margin-right: 60px;
  position: relative;
  /* height: 80px; */
  float: left;
}

.top_header_b ul {
  list-style-type: none;
  line-height: 70px;
  white-space: nowrap;
  text-align: left;
  margin-left: 20px;
}

.top_header_b li:hover {
  cursor: pointer;
}

.content {
  width: 1100px;
  margin: 0 auto;
}
</style>

