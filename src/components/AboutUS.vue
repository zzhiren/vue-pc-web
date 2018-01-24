<template>
    <div id="about_us">
        <div class="banner">
            <img v-bind:src="banner" alt="">
        </div>
        <div class="swipers">
          <p class="p_title"><img src="../static/qiyeshow.png" alt=""></p>
          <swiper :options="activitSiteSwiper" ref="mySwiper">
            <swiper-slide class="swiper-img" v-for="(item,index) in showPhotos" v-bind:key="index">
              <img v-bind:src="item" alt="" >
            </swiper-slide>
				  </swiper>
        </div>
        <div class="content">
            <img class="content_bg" src="../static/fastpay_bg.png" alt="">
            <div class="introduce">
                <p class="p_title"><img src="../static/who_am_i.png" alt=""></p>
                 <p class="p_content p_content_b">杭州臻财科技有限公司注册于2015年，坐落在杭州钱塘江边上。注册资金2000万元，是一家专注于学校信息化、智慧化建设领域的系统集成、应用软件的研发及运行维护的科技型企业。现公司已研发出拥有自有知识产权的电子班牌、家校通、智能手环、错题集等一系列智慧化校园的产品。公司不断调整、优化产品结构和技术体系，注重技术与用户需求结合，注重产品知识积累和人才培训，注重产品实用性和产品服务。</p>
                 <p class="p_content p_content_b">公司拥有一支年轻、敏锐、朝气蓬勃、志向远大的团队。在疾驰而来的移动互联网时代，我们秉承专业、敬业、激情、创新的发展理念，坚持以客户为本、以信用为先的服务准则，用心解决用户最迫切、最实际的需求，以优质的产品、先进的技术为用户提供完美的服务。</p>
                <p class="p_title"><img class="our_power" src="../static/our_power.png" alt=""></p>
                <div class="competitive_edge">
                    <div class="one">
                        <img src="../static/one.png" alt="">&nbsp;完整的解决方案及配套的软硬件研发生产</div>
                    <div class="one">
                        <img src="../static/two.png" alt="">&nbsp;提供满足客户需求的个性化定制服务</div>
                    <div class="one">
                        <img src="../static/three.png" alt="">&nbsp;快速高效的售后技术服务支撑</div>
                </div>
            </div>
            <div class="idea">
              <img src="../static/idea.png" alt="">
            </div>
            <div> 
            <img class="dev_history" src="../static/dev_history.png" alt="">
            </div>
            <div class="partener">
                <p class="partener_p"><img src="../static/our_partener.png" alt=""></p>
                <div class="partener_list">
                    <div class="partener_name">
                        <img src="../static/soyea.png" alt="">
                    </div>
                    <!-- <div class="partener_name">
                        <img src="../static/enjoyor.png" alt="">
                    </div> -->
                    <div class="partener_name">
                        <img src="../static/ruijia.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import banner from "../static/aboutus_rolls.png";
import showphoto01 from "../static/showphoto1.png";
import showphoto02 from "../static/showphoto2.png";
import showphoto03 from "../static/showphoto3.png";
import showphoto04 from "../static/showphoto4.png";
import showphoto05 from "../static/showphoto5.png";
import showphoto06 from "../static/showphoto6.png";
import showphoto07 from "../static/showphoto7.png";
import showphoto08 from "../static/showphoto8.png";

export default {
  data() {
    return {
      banner: banner,
      showPhotos:[showphoto01,showphoto02,showphoto03,showphoto04,showphoto05,showphoto06,showphoto07,showphoto08],
      activitSiteSwiper: {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: 3000,
        mousewheelControl : true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 2,
          slideShadows: true
        }
      }
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  },
  components: {
    // AboutUSRollingAds: AboutUSRollingAds
  }
};
</script>

<style scoped>
#about_us {
  width: 100%;
  max-width: 1980px;
  position: relative;
  margin: 0 auto;
  height: 100%;
}
.swipers-title {
  font-size: 40px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.swipers {
  width: 1300px;
  margin: 100px auto;
}
.swiper-img {
  width: 350px;
  height: 200px;
}
.swiper-img > img {
  /* width: 100%; */
  width: 350px;
  height: 200px;
}
.banner {
  width: 100%;
}
.banner > img {
  width: 100%;
}
.content {
  width: 100%;
  /* height: 1500px; */
  max-width: 1980px;
  overflow: hidden;
  position: relative;
  position: relative;
}

.content_bg {
  display: block;
  position: absolute;
  width: 1100px;
  max-width: 1980px;
  min-width: 1350px;
}

.introduce {
  position: relative;
  width: 1100px;
  /* height: 100px; */
  /* background: red; */

  margin: 80px auto;
  z-index: 99;
}

.p_title {
  text-align: center;
  margin-top: 65px;
  margin-bottom: 60px;
}
.p_title img {
  width: 244px;
}
.our_power {
  width: 379px !important;
}
.p_content {
  font-size: 16px;
  color: #222222;
  line-height: 30px;
  margin-bottom: 150px !important;
  text-indent: 2em;
  width: 900px;
  margin: 0 auto;
  /* text-align: center; */
}
.p_content_b {
  margin-bottom: 0 !important;
}

.competitive_edge {
  display: flex;
  text-align: center;
  /* width: 950px; */
  margin: 0 auto;
}

.one {
  display: flex;
  flex: 1;
  font-size: 16px;
  justify-content: center;
  color: #222222;
}
.idea {
  position: relative;
  margin: 0 auto;
  text-align: center;
  /* padding-top: 60px; */
}
.dev_history {
  display: block;
  margin-top: 200px;
  width: 100%;
  max-width: 1980px;
  min-width: 1350px;
}

.partener {
  /* background: red; */
  text-align: center;
}

.partener_p {
  font-size: 50px;
  color: #1c85fa;
  font-weight: bold;
  margin-top: 100px;
  margin-bottom: 65px;
  font-family: "方正兰亭超细黑简体";
}
.partener_p img {
  width: 213px;
}
.partener_list {
  display: flex;
  width: 600px;
  margin: 0 auto;
  margin-bottom: 180px;
}

.partener_name {
  flex: 1;
}

.partener_name img {
  width: 200px;
}
</style>