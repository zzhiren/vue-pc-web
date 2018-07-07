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
            <div class="dev_history">
                <p class="online_title">上线学校</p>
                <div class="online_school">
                  <div class="school_list">
                    <p class="list_title">
                      浙江
                    </p>
                    <div class="school_name">
                      <p>杭州市澎博小学</p>
                      <p>乐清市白象中学</p>
                      <p>杭州市丁兰实验中学</p>
                      <p>温州市瓯海区景山小学</p>
                      <p>温州市白鹿外国语学校</p>
                      <p>温溪镇第一中学</p>
                      <p>瑞安市第二实验小学</p>
                    </div>
                  </div>
                  <div class="school_list">
                    <p class="list_title">
                      安徽
                    </p>
                    <div class="school_name">
                      <p>东至县第二中学初中部</p>
                      <p>贵池区实验小学</p>
                      <p>池州市第十六中学</p>
                      <p>东至县大渡口中心小学</p>
                      <p>石台县七里中心学校</p>
                      <p>九华山中心学校</p>
                    </div>
                  </div>
                  <div class="school_list">
                    <p class="list_title">
                      福建
                    </p>
                    <div class="school_name">
                      <p>德化城东实验小学</p>
                      <p>德化职业技术学校</p>
                      <p>政和县南门小学</p>
                      <p>政和县政和一中</p>
                    </div>
                  </div>
                  <div class="school_list">
                    <p class="list_title">
                      河南
                    </p>
                    <div class="school_name">
                      <p>固始县回民小学</p>
                      <p>固始县北关小学</p>
                      <p>固始县第一小学</p>
                      <p>固始县第七小学</p>
                      <p>固始县实验小学</p>
                      <p>固始县天福实验小学</p>
                    </div>
                  </div>
                </div>
            </div>
            <div class="memo">
              <p class="title">参展记事</p>
              <div class="memo_list">
                <div class="memo_item">
                  <img class="memo_bg" src="../static/memo_bg.png" alt="">
                  <p class="memo_title">云栖大会—杭州</p>
                  <div class="memo_content">在六合云会场中，臻财科技展区备受关注，工作人员为参观者演示、讲解产品吸引一批批参观者驻足聆听，发布会上具体介绍了公司的理念、产品的架构以及用户解决方案。</div>
                </div>
                <div class="memo_item">
                  <p class="memo_title">互联网大会—乌镇</p>
                  <div class="memo_content">由西湖电子集团、数源科技、久融控股、臻财科技联合打造的云生态智慧社区解决方案，在乌镇互联网国际会展中心，B4-1F-12展位参展。智慧社区涵盖：智慧教育、智慧出行、智慧家庭、智联门控等几大领取。“云上生态，智慧物联”是我们合作的初心和实现的目标。</div>
                </div>
                <div class="memo_item">
                  <p class="memo_title">第73届中国教育装备展—广州</p>
                  <div class="memo_content">臻财科技校园智慧管理云平台走进中国教育装备展。臻财校连提供从硬件到软件的一站式服务，打造以“家校互通”为中心的“智慧校园’生态圈。“智慧校园”由多套软硬件构成，包括校园云平台，智能校园卡，智能手环。</div>
                </div>
                <div class="memo_item">
                  <p class="memo_title">第74届中国教育装备展—成都</p>
                  <div class="memo_content">臻财科技作为校园智慧管理云平台风向标再次来到中国教育装备展。在会场2号特展馆2B018展位展示臻财2018最新产品—智慧校园云平台解决方案。重点针对不同学年段教育的市场需求，致力于打造智慧校园生态圈，一站式助力校园信息化建设。</div>
                </div>
              </div>
            </div>
            <div class="partener">
                <!-- <p class="partener_p"><img src="../static/our_partener.png" alt=""></p> -->
                <p class="title">合作伙伴</p>
                <div class="partener_list">
                    <div class="partener_name">
                      <div class="partener_logo partener_logo1">
                        <img class="logo1" src="../static/soyea.png" alt="">
                      </div>
                      公司是一家以数字电子信息、通信产品为主业的高科技上市公司，于1999年5月在深交所挂牌上市，主要经营高清液晶电视、数字电视机顶盒、信息软件、物联网、车联网、新能源、房地产、软件园区建设等产业产品和业务.
                    </div>
                    <div class="partener_name">
                      <div class="partener_logo partener_logo2">
                        <img class="logo2" src="../static/xuechuang.png" alt="">
                      </div>
                      学创教育是一家诞生于互联网+教育时代背景下的创新企业，联合国内外知名信息技术及教育专家，开发出具有高效、易用、互动性强、个性化定制等特点的数字教育整体解决方案。
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
      showPhotos: [
        showphoto01,
        showphoto02,
        showphoto03,
        showphoto04,
        showphoto05,
        showphoto06,
        showphoto07,
        showphoto08
      ],
      activitSiteSwiper: {
        effect: "coverflow",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: 3000,
        mousewheelControl: true,
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
  margin: 0 auto;
  top:0;
  bottom: 0;
  left:0;
  right: 0;
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
  max-width: 1980px;
  height: 650px;
  background: url(../static/dev_history_bg.png) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  padding-top: 120px;
  box-sizing: border-box;
  margin-top: 60px;

}
.online_title {
  color: #ffffff;
  text-align: center;
  font-size: 50px;
  letter-spacing: 4px;
  font-family: "微软雅黑";
  font-weight: 200;
}
.online_school {
  height: 100%;
  width: 1100px;
  /* background: #1c85fa; */
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  box-sizing: border-box;
  /* padding-left: 60px;
  padding-right: 60px; */
}
.school_list {
  width: 190px;
  height: 300px;
  /* background: red; */
  background-image: url(../static/school_list_bg.png);
  background-size: 100% 100%;
  font-family: "微软雅黑";
  text-align: center;
  color:#161616;
}
.list_title {
  text-align: center;
  color: #1C85FA;
  letter-spacing: 4px;
  height: 27px;
  line-height: 27px;
  font-size: 14px;
}
.school_name {
  width: auto;
  font-size: 14px;
  display: inline-block;
  margin: 28px auto;
  line-height: 30px;
  text-align: left;
}
.school_name:nth-child(3) {
  width: 120px !important;
  background: red;
}
.memo {
  /* width: 1980px; */
  /* background: red; */
  height: auto;
  padding-top: 120px;
  box-sizing: border-box;
  position: relative;
  /* background-image: url(../static/memo_bg.png); */
  background-repeat: no-repeat;
  background-position:-190px 320px;
}
.title {
  color: #1c85fa;
  text-align: center;
  font-size: 50px;
  letter-spacing: 4px;
  font-family: "微软雅黑";
  font-weight: 200;
}
.memo_list{
  width: 1100px;
  height: 400px;
  display: flex;
  margin:100px auto;
  justify-content: space-around;
  /* background-image: url(../static/memo_bg.png);
  background-repeat: no-repeat;
  background-position:-480px -50px; */

}
.memo_item{
  /* background: green; */
  box-sizing: border-box;
  text-align: justify;
}
.memo_bg{
  position: absolute;
  left: -490px;
  top: -50px;
}
.memo_item:nth-child(1){
  width: 200px;
  padding-top: 120px;
  padding-left: 20px;
  padding-right: 30px;
  position: relative;
}
.memo_item:nth-child(2){
  width: 200px;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 30px;
}
.memo_item:nth-child(3){
  width: 280px;
  padding-top: 120px;
  padding-left: 20px;
  padding-right: 40px;
}
.memo_item:nth-child(4){
  width: 280px;
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 40px;

}
.memo_title{
  color: #1C85FA;
}
.memo_content{
  margin-top: 10px;
  color:#666666;
  font-size: 12px;
  line-height: 26px;
}
.partener {
  text-align: center;
  padding-top: 120px;
}
.partener_list {
  display: flex;
  /* height: 400px; */
  width: 1100px;
  /* background: red; */
  margin: 40px auto;
  justify-content: space-around;
  padding: 40px 80px 40px 80px;
  box-sizing: border-box;
}
.partener_name {
  position: relative;
  padding: 50px 20px 30px 20px;
  text-align: justify;
  color: #999999;
  font-size: 16px;
  width: 340px;
  height: auto;
  background: rgba(255, 255, 255, 1);
  border-radius: 20px;
  box-shadow: 0px 2px 30px rgba(28, 133, 250, 0.2);
}
.partener_logo {
  position: absolute;
  /* width: 250px; */
  height: 40px;
  box-shadow: 0px 2px 30px rgba(28, 133, 250, 0.2);
  top: 0;
  left: 0;
  right: 0;
  margin:0 auto;
  transform: translateY(-50%);
  border-radius: 100px;
  z-index: 99;
  background: white;
}
.partener_logo1{
  width: 250px!important;
}
.partener_logo2{
  width: 180px!important;
}
.logo1{
  width: 150px;
  margin: 0 auto;
  align-items: center;
  display: block;
  transform: translateY(25%);
}
.logo2{
  width: 100px;
  margin: 0 auto;
  align-items: center;
  display: block;
  transform: translateY(25%);
}
</style>