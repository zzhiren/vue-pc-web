<template>
    <div id="classcard">
        <ClassCardRollingAds></ClassCardRollingAds>
        <!-- <div class="title">
            <p class="title_p1">电子班牌</p>
            <p class="title_p2">是智慧校园信息互动展示平台</p>
            <p class="title_p2">学校、师生和家长之间互动的媒介</p>
        </div> -->
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
            <img class="class_culture_img" src="../static/class_culture_img.png" alt="">
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
            </div>
        </div>
    </div>
</template>

<script>
    import ClassCardRollingAds from './common/ClassCardRollingAds.vue'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        data() {
            return {

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
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
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
                    onSlideChangeEnd: function (swiper) {
                        this.state = swiper.activeIndex;
                        console.log(this.state)
                    },
                },
                rollsImg: [
                    { index: '1', imgUrl: require('../static/classcard_title_bg.png') }
                ]
            }
        },
        created() {
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        components: {
            'ClassCardRollingAds': ClassCardRollingAds,
            swiper,
            swiperSlide
        }
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 1s
    }
    
    .swiper-item {
        width: 100%;
    }
    
    .fade-enter,
    .fade-leave-to
    /* .fade-leave-active in <2.1.8 */
    
    {
        opacity: 0
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
        color: #FFFFFF;
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
        margin: 200px auto;
        /* background: red;  */
        position: relative;
    }
    
    .class_culture_img {
        margin: 0 auto;
        display: block;
    }
    
    .culture_build {
        position: absolute;
        top: 0;
    }
    
    .class_card_p_title {
        font-size: 24px;
        color: #1C85FA;
        margin-bottom: 40px;
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
    .swiper-pagination-bullet{
        margin-right: 10px!important;
        width: 10px;
        height: 10px;
    }
   .swiper-pagination-bullet-active {
        opacity: 1;
        background: #ffffff!important;
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
