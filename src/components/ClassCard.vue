<template>
    <div id="classcard">
        <div class="banner">
            <img v-bind:src="banner" alt="">
        </div>
        <div class="classcard_title">
            <img src="../static/classcard_title.png" alt="">
        </div>
        <div class="meeting_mode">
            <img class="meeting_mode_img" src="../static/meeting_mode_img.png" alt="">
            <div class="rolls">
                <div class="swiper_container">
                    <swiper class="swiper_slide" :options="swiperOption" ref="mySwiper">
                        <!-- slides -->
                        <!-- <div > -->
                        <swiper-slide class="">
                            <img class="swiper-item" src="../static/rolls_standard_mode.png" alt="">
                        </swiper-slide>
                        <swiper-slide class="">
                            <img src="../static/rolls_exam_mode.png" alt="">
                        </swiper-slide>
                        <swiper-slide class="">
                            <img src="../static/rolls_meeting_mode.png" alt="">
                        </swiper-slide>
                        <swiper-slide class="">
                            <img src="../static/rolls_emergency_mode.png" alt="">
                        </swiper-slide>
                        <swiper-slide class="">
                            <img src="../static/rolls_custom_mode.png" alt="">
                        </swiper-slide>
                        <swiper-slide class="">
                            <img src="../static/interactive_mode.png" alt="">
                        </swiper-slide>
                        <!-- Optional controls -->
                        <!-- <div class="swiper-pagination" slot="pagination"></div>
                                <div class="swiper-pagination" slot="scrollbar"></div>   -->
    
                        <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                        <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                    </swiper>
                </div>
    
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 1 || swiperOption.state === 7">
                            <p class="mode_title"><img src="../static/standard_mode_img.png" alt=""></p>
                            <p class="mode_content">校园班级等信息，即平时的展示状态</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 2">
                            <p class="mode_title"><img src="../static/exam_mode_img.png" alt=""></p>
                            <p class="mode_content">考试科目、时间、考场座位图、考场号、考试注意事项等</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 3">
                            <p class="mode_title"><img src="../static/meeting_mode_img02.png" alt=""></p>
                            <p class="mode_content">会议时间、议程、出席名单</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 4">
                            <p class="mode_title"><img src="../static/emergency_mode_img.png" alt=""></p>
                            <p class="mode_content">显示紧急逃生通道</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 5">
                            <p class="mode_title"><img src="../static/custom_mode_img.png" alt=""></p>
                            <p class="mode_content">自定义图片展示，自定义网页链接展示，自定义后台网页编辑展示</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_title">
                    <transition name="fade">
                        <div v-show="swiperOption.state === 6 || swiperOption.state === 0">
                            <p class="mode_title"><img src="../static/interactive_mode_img.png" alt=""></p>
                            <p class="mode_content">亲情号码一键拨打，消息留言定点传达</p>
                        </div>
                    </transition>
                </div>
                <div class="rolls_slot">
                     <div class="swiper-pagination swiper-slot" slot="pagination"></div> 
                    <!-- <div class="swiper-pagination">
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                        <span class="swiper-pagination-bullet"></span>
                    </div> -->
                       <!-- <div class="swiper-pagination" slot="scrollbar"></div>    -->
                </div>
            </div>
        </div>
        <div class="classcard_introduce">
            <img class="classcard_introduce_bg" src="../static/classcard_introduce_bg.png" alt="">
            <div class="introduce_content">
                <p>智能面板</p>
                <p>多尺寸选择</p>
                <p>防爆钢化玻璃</p>
                <p>全金属超薄外壳</p>
                <p>高清摄像头</p>
                <p>人体智能感应</p>
                <p>配备刷卡口</p>
            </div>
        </div>
        <div class="class_culture">
            <div class="left">
                <div class="culture_build">
                    <p class="class_card_p_title">多媒体展示</p>
                    <p class="p_content">可展示校园文化、校园新闻、通知公告、班级信息、班主任信息、班级文体活动图片，并可根据班级情况，个性化展示。</p>
                </div>
                <div class="culture_build">
                    <p class="class_card_p_title">走班排课</p>
                    <p class="p_content">一人一课表，学生可通过班牌上的信息查看自己上课所在的教师，每位学生都有自己的专属课表，通过电子班牌刷卡考勤到相应的教室上课，教师也可通过班牌的考勤数据统计学生上课数据</p>
                </div>
                <div class="culture_build">
                    <p class="class_card_p_title">教务信息展示</p>
                    <p class="p_content">可导入或对接学校的教务系统，展示班级当日课程表、当前课程信息。</p>
                </div>
            </div>
            <div class="center"><img class="class_culture_img" src="../static/class_culture_img.png" alt=""></div>
            <div class="right">
                <div class="culture_build">
                    <p class="class_card_p_title">德育管理</p>
                    <p class="p_content">可作为学校对学生管理工作的延伸，将管理工作细致深入到班级，宣传通知到人，基于客观数据的综合素质评价分析，学生的各类信息客观呈现，真正实现阳光管理。搭建师生沟通平台，保证各项事务公平、公正、公开处理，实现创新评价方式。</p>
                </div>
                <div class="culture_build">
                    <p class="class_card_p_title">多种模式智能互切</p>
                    <p class="p_content">可根据实际应用场景的变化，班牌显示可切换至：标准模式、会议模式、考试模式、紧急模式、交互模式、自定义模式等。</p>
                </div>
                <div class="culture_build">
                    <p class="class_card_p_title">电子门禁</p>
                    <p class="p_content">采用电子班牌门禁系统来实现学校各种通道控制管理功能及全方位实时监控和管理功能。</p>
                </div>
            </div>
            <!-- <img class="class_culture_img" src="../static/class_culture_img.png" alt="">
            <div class="culture_build">
                <p class="class_card_p_title">班级文化建设</p>
                <p class="p_content">若干年后最珍贵的回忆，班级</p>
                <p class="p_content">信息、班级圈、班级荣誉</p>
            </div>
            <div class="display">
                <p class="class_card_p_title">信息实时呈现</p>
                <p class="p_content">时间天气、通知公告、学生</p>
                <p class="p_content">个人中心</p>
            </div>
            <div class="compatible">
                <p class="class_card_p_title">强大的兼容性</p>
                <p class="p_content">整合校园智慧管理云平台，对接校园</p>
                <p class="p_content">网，进行大数据查询、分析、统计等</p>
            </div> -->
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import banner from "../static/classcard_rolls.png";

export default {
  data() {
    return {
      banner: banner,
      swiperOption: {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        // swiper configs 所有的配置同swiper官方api配置
        autoplay: 3000,
        // direction : 'vertical',
        // effect: "coverflow",
        grabCursor: false,
        setWrapperSize: true,
        // autoHeight: true,
        // paginationType:"bullets",
        pagination: ".swiper-pagination",
        paginationClickable: true,
        prevButton: ".swiper-button-prev",
        nextButton: ".swiper-button-next",
        // scrollbar:'.swiper-scrollbar',
        mousewheelControl: false,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        loop: true,
        // if you need use plugins in the swiper, you can config in here like this
        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        // debugger: true,
        // swiper callbacks
        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        state: 0,
        onSlideChangeEnd: function(swiper) {
          this.state = swiper.activeIndex;
        }
      },
      rollsImg: [
        { index: "1", imgUrl: require("../static/classcard_title_bg.png") }
      ]
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  },
  components: {
    ClassCardRollingAds: ClassCardRollingAds,
    swiper,
    swiperSlide
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.swiper-item {
  width: 100%;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.banner {
  width: 100%;
}
.banner > img {
  width: 100%;
}
#classcard {
  width: 100%;
  max-width: 1980px;
  /* background: red;  */
  position: relative;
  margin: 0 auto;
}

/* .class_card_title {
        position: absolute;
        width: 800px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 25% auto;
        z-index: 999;
        height: 200px;
        text-align: right;
    } */

.title_p1 {
  font-size: 40px;
  color: #ffffff;
  line-height: 12px;
  font-weight: bold;
  margin-bottom: 2.5em;
  font-family: "方正兰亭超细黑简体";
}

.title_p2 {
  margin-bottom: 30px;
  color: #ffffff;
  line-height: 12px;
}

.classcard_title {
  width: 1100px;
  margin: 150px auto;
  /* background: red; */
  text-align: center;
}

.classcard_title img {
  width: 70%;
}

.meeting_mode {
  width: 100%;
  max-width: 1980px;
  position: relative;
  overflow: hidden;
}

.meeting_mode_img {
  /* width: 100%;  */
  max-width: 1980px;
}

.classcard_introduce {
  width: 100%;
  max-width: 1980px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}

.classcard_introduce_bg {
  width: 110%;
  max-width: 1980px;
  min-width: 1350px;
}

.introduce_content {
  width: 900px;
  position: absolute;
  /* background: red;  */
  top: 50px;
  bottom: 0;
  left: 20px;
  right: 0;
  margin: 0 auto;
}

.introduce_content p {
  font-size: 20px;
  color: #222222;
  line-height: 36px;
}
.class_culture {
  width: 1060px;
  margin: 0 auto;
  /* background: red;  */
  position: relative;
  display: flex;
  height: 900px;
}
.left {
  flex: 1;
  padding-top: 200px;
}
.center {
  width: 600px;
  overflow: hidden;
  /* background: blue; */
}
.right {
  flex: 1;
  padding-top: 170px;
  /* background: blue; */
  
}
.class_culture_img {
  margin: 0 auto;
  display: block;
  margin-left: -60px;
  margin-top: 50%;
}

.culture_build {
  /* background: red; */
  margin-bottom: 40px;
}

.class_card_p_title {
  font-size: 24px;
  color: #1c85fa;
  margin-bottom: 20px;
}

.p_content {
  font-size: 14px;
  color: #222222;
  line-height: 24px;
}

.display {
  position: absolute;
  top: 280px;
}

.compatible {
  position: absolute;
  text-align: right;
  right: 0;
  top: 260px;
}

.swiper_container {
  position: absolute;
  width: 262px;
  height: 505px;
  /* width: 5.24rem; */
  /* height: 10rem; */
  top: 60px;
  background: url(../static/classcard_rolls_bg.png);
  background-size: 100% 100%;
  /* transform: scale(0.8,0.8); */
}

.rolls {
  width: 700px;
  margin: 0 auto;
  /* background: blue; */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.classcard_rolls_bg {
  width: 100%;
  /* display: block; */
}

.swiper_slide {
  position: absolute;
  width: 227px !important;
  height: 399px !important;
  top: 16px;
  left: 14px;
  right: 18px;
  border-radius: 5px;
}

.rolls_title {
  position: absolute;
  width: 340px;
  height: 50px;
  top: 150px;
  left: 400px;
  text-align: center;
}

.rolls_slot {
  position: absolute;
  width: 200px;
  height: 50px;
  /* top: 350px; */
  left: 510px;
  text-align: center;
  margin-top: 450px;
  /* background: red; */
}
.swiper-pagination-bullet {
  margin-right: 10px !important;
  width: 10px;
  height: 10px;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ffffff !important;
}
.mode_title {
  /* font-family: "方正兰亭超细黑简体"; */
  /* font-size: 50px; */
  line-height: 30px;
  /* color: #222222; */
  margin-bottom: 35px;
}

.mode_content {
  font-size: 20px;
  color: #222222;
  line-height: 30px;
}
</style>
