<template>
    <div id="home">
         <!-- <HomeRollingAds></HomeRollingAds> -->
         <div class="banner">
            <img v-bind:src="banner" alt="">
        </div>
         
        <div class="product_list">
            <div class="product">
                <img class="product_title" src="../static/home_classcard.png" alt="">
                <p class="product_p">是一款集蓝牙、NFC、射频卡、多媒体技术为一体的综合管理平台系统。</p>
            </div>
            <div class="product">
                <img class="product_title" src="../static/home_schoolhome.png" alt="">
                <p class="product_p">是基于学校微信公众号，建立一个顺畅、高效的家校沟通平台，促进学校信息化、智慧化信息建设。</p>
            </div>
            <div class="product">
                <img class="product_title" src="../static/home_smart_bracelet.png" alt="">
                <p class="product_p">一款由学生佩戴的电子智能手环，集蓝牙运动计步器、电子门禁、智能定位、健康检测、信息采集于一体的多功能手环。</p>
            </div>
            <div class="product">
                <img class="product_title" src="../static/smart_card.png" alt="">
                <p class="product_p">在校园一卡通的基础上添加了更多的功能，是学生的电子身份标识。</p>
            </div>
        </div>
        <div class="video">
             <video-player  class="vjs-custom-skin"
                            ref="videoPlayer"
                            :options="playerOptions"
                            :playsinline="true"
                            @play="onPlayerPlay($event)"
                            @pause="onPlayerPause($event)"
                            @ended="onPlayerEnded($event)"
                            @loadeddata="onPlayerLoadeddata($event)"
                            @waiting="onPlayerWaiting($event)"
                            @playing="onPlayerPlaying($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @canplay="onPlayerCanplay($event)"
                            @canplaythrough="onPlayerCanplaythrough($event)"
                            @ready="playerReadied"
                            @statechanged="playerStateChanged($event)">
            </video-player>
         </div>
        <div class="classcard">
            <img class="classcard_bg" src="../static/classcard_bg.png" alt="">
            <div class="classcard_introduce">
                 <p class="cd_title"><img src="../static/home_title01.png" alt=""></p>
                <p class="cd_p">电子班牌是以班级为单位，具有对外展示和班级文化建设功能，充分展示学校教育教学特色、校园文化、学校荣誉、新闻动态，实时呈现班级信息、学生荣誉、班务动态等，为全方位打造校园文化特色环境提供了一个优质的载体，提升学校信息化管理水平。将智能硬件融入到智慧化应用场景中，助力智慧校园建设。</p>
                <img v-if="state" v-on:click="go('classcard')" class="hs_view_details" src="../static/view_details.png" v-on:mouseover="changeShow()">
                <img v-if="!state" v-on:click="go('classcard')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
        </div>
        <div class="homeschool">
            <div class="homeschool_introduce">
                <p class="cd_title" ><img src="../static/home_title02.png" alt=""></p>
                <p class="hs_p">微门户微信端，基于学校微信公众号，连接家长，教师，学生，家校互连，学生管理，成绩管理，使到校离校一目了然，建立了一个顺畅、高效的家校沟通平台。</p>
                <!-- <p class="hs_p">化的信息互动沟通渠道，促进学校信息化、智慧化的建设。</p> -->
                <div class="cd_content">
                    <p class="content_title">对于学校</p>
                    <p class="cd_p cd_content_p">让管理更便捷，加强品牌的建设与宣传</p>
                    <p class="content_title">对于老师</p>
                    <p class="cd_p cd_content_p">让沟通更畅通，特性功能减轻工作负担</p>
                    <p class="content_title">对于家长</p>
                    <p class="cd_p cd_content_p">让信息更全面，实时动态获取孩子表现</p>
                    <p class="content_title">对于学生</p>
                    <p class="cd_p cd_content_p">让关注更客观，多渠道多层次助力成长</p>
                </div>
                <img v-if="state" v-on:click="go('homeschool')" class="hs_view_details" src="../static/view_details.png" v-on:mouseover="changeShow()">
                <img v-if="!state" v-on:click="go('homeschool')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
            <img class="hs_phone" src="../static/homeschool_phone.png" alt="">
        </div>
        <div class="smartbracelet">
            <img class="smart_bracelet_img" src="../static/smart_bracelet_img.png" alt="">
            <div class="classcard_introduce">
                <p class="cd_title"><img src="../static/home_title03.png" alt=""></p>
                <p class="cd_p">电子门禁可智能识别学生身份，无障碍通过校门；利用校内蓝牙基站，获取学生校园活动轨迹；科学记录学生步数、心率、卡路里等日常运动数据，进行健康检测；实时精准记录学生数据，并同步到后台。</p>
                <!-- <p class="cd_p cd_content_p">电子门禁可智能识别学生身份，无障碍通过校门。</p>
                <p class="cd_p cd_content_p">利用校内蓝牙基站，获取学生校园活动轨迹。</p>
                <p class="cd_p cd_content_p">科学记录学生步数、心率、卡路里等日常运动数据，进行健康检测。</p>
                <p class="cd_p cd_content_p">实时精准记录学生数据，并同步到后台。</p> -->
                <img v-if="state" v-on:click="go('smartbracelet')" class="hs_view_details" src="../static/view_details.png" v-on:mouseover="changeShow()">
                <img v-if="!state" v-on:click="go('smartbracelet')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
        </div>
        <div class="homeschool">
            <div class="homeschool_introduce">
                <p class="cd_title" ><img src="../static/zhinengka_title.png" alt=""></p>
                <p class="hs_p">将低功耗蓝牙SoC，纽扣电池封闭于标准的PVC卡片中，简化了智能手环中的运动（计步）、健康（心率）、显示等功能，但仍然可作为学生的电子身份标识，并能与现有一卡通系统对接。</p>
                <img v-if="!state" v-on:click="go('homeschool')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
            <img class="shoubiao" src="../static/zhinengka.png" alt="">
        </div>
    </div>
</template>

<script>
import "../css/custom-theme.css";
import banner from "../static/home_rolls.png";

export default {
  data() {
    return {
      banner: banner,
      state: true,
      // videojs options
      playerOptions: {
        // height: "360",
        autoplay: false,
        muted: false,
        language: "zh-CN",
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [
          {
            type: "video/mp4",
            // mp4
            src: "http://smartu.oss-cn-hangzhou.aliyuncs.com/media/shouhuan.mp4"
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }
        ]
        // poster:
        //   "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg"
      }
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  },
  components: {
    // HomeRollingAds: HomeRollingAds
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    changeShow() {
      this.state = !this.state;
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    }
  }
};
</script>

<style scoped>
#id {
  width: 100%;
  position: relative;
}
.banner {
  width: 100%;
}
.banner > img {
  width: 100%;
}
.video {
  width: 800px;
  margin: 0 auto;
  /* height: 618.75px; */
  /* margin-top: 14px; */
  margin-bottom: 120px;
}
.product_list {
  width: 1100px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 80px !important;
}
.title {
  width: 1100px;
  height: 100px;
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 99;
  text-align: center;
}

.title p {
  font-family: 方正兰亭超细黑;
  font-size: 50px;
  color: #ffffff;
  margin-bottom: 50px;
  font-weight: 100;
}
.product {
  /* margin-right: 5px; */
  flex: 1;
  /* background: red; */
}
.product_list :last-child{
  /* margin-right: 0; */
}
.product_title {
  width: 140px;
  display: block;
  margin: 120px auto 60px;
}

.product_p {
  color: #858585;
  line-height: 24px;
  font-size: 16px;
  display: block;
  margin: 0 auto;
  width: 210px;
  text-align: justify;
}

.classcard {
  width: 1100px;
  height: 690px;
  /* margin-top: 145px !important; */
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}

.classcard_bg {
  width: 420px;
  display: block;
}

.classcard_introduce {
  position: absolute;
  z-index: 9900;
  top: 95px;
  right: 0;
  text-align: right;
  width: 400px;
}

.cd_title {
  font-family: "FZLTXIHJW";
  /* font-family: "FZLTCXHJW";   */
  font-size: 50px;
  color: #222222;
  font-weight: 200;
  margin-bottom: 40px;
}

.cd_p {
  font-size: 14px;
  color: #858585;
  line-height: 30px;
  text-indent: 2em;
  text-align: justify;
}

.view_details {
  margin-top: 65px;
}

.homeschool {
  width: 1100px;
  height: 620px;
  position: relative;
  margin-top: 0 !important;
  margin: 0 auto;
  /* background: red;  */
}

.homeschool_introduce {
  position: absolute;
}
.shoubiao {
  width: 300px;
  position: absolute;
  right: 30px;
  /* bottom: -20px; */
  top: -60px;
}
.hs_p {
  font-size: 14px;
  line-height: 30px;
  color: #858585;
  width: 448px;
}

.cd_content {
  margin-top: 40px;
}

.content_title {
  color: #222222;
  font-size: 18px;
}

.cd_content_p {
  margin-bottom: 20px;
  text-indent: 0;
}

.hs_view_details {
  margin-top: 30px;
  cursor: pointer;
}

.hs_phone {
  position: absolute;
  right: -30px;
  /* bottom: -20px; */
  width: 700px;
  top: 80px;
}
.smartbracelet {
  width: 1100px;
  height: 560px;
  position: relative;
  /* background: red; */
  margin: 145px auto;
}
.smart_bracelet_img {
  margin-top: 20px;
}
</style>