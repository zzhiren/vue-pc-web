<template>
    <div id="smartbracelet">
        <!-- <SBRollingAds></SBRollingAds> -->
        <div class="banner">
            <img v-bind:src="banner" alt="">
        </div>
        <div class="title_img">
            <img class="" src="../static/smartbracelet_title.png" alt="">
            <img class="title_bg" src="../static/suspension_card.png" alt="">
            <div class="introduce">
                <p class="introduce_title">
                    <img src="../static/itis_mj.png" alt="">
                </p>
                <p class="introduce_p">远距离识别、无障碍、记录学生的到校离校时间，家长可随时查看</p>
            </div>
        </div>
        <div class="it_is_smartbracelet">
            <div class="it_is">
                <p class="introduce_title">
                    <img src="../static/itis_play.png" alt="">
                </p>
                <p class="introduce_p">记录每天的运动数据，智能识别走路或跑步</p>
            </div>
            <img src="../static/it_is_img.png" alt="" class="it_is_img">
        </div>
        <div class="it_is_fastpay">
            <!-- <img class="fastpay_bg" src="../static/SmartBracelet_bg1.png" alt=""> -->
            <div class="fastpay">
                <div class="fastpay_introduce">
                    <p class="introduce_title">
                        <img src="../static/itis_fastpay.png" alt="">
                    </p>
                    <p class="introduce_p">可代替一卡通，供学生在校内食堂消费，避免带现金和找零钱的麻烦</p>
                </div>

            <img class="fastpay_img" src="../static/fastpay_img.png" alt="">
                
            </div>
        </div>
        <div class="foryou">
            <p class="for_you"><img src="../static/care_you.png" alt=""></p>
            <!-- <p class="for_you_b"><img src="../static/protect_you.png" alt=""></p> -->
            <img src="../static/for_you_img.png" alt="" class="for_you_img">
            <div class="for_you_div">
                <p class="for_you_p">实时监测记录，科学的规划运动量并能够管理日常运动状态，自动进行睡眠识别，同步追踪睡眠时间，分析睡眠质量。</p>
                <p class="for_you_p">食品级亲肤硅胶材质，精雕细琢的设计，长久佩戴亦有舒适的体验。</p>
            </div>
        </div>
    </div>
</template>

<script>
    // import SBRollingAds from './common/SBRollingAds.vue'
    import banner from "../static/sb_bg.png";
    export default {
        data() {
            return {
                banner: banner,
                banners: [
                    { index: '0', imgUrl: 'http://i3.mifile.cn/a4/bc62a28f-de64-4eee-853b-36772a97f67e' },
                    { index: '1', imgUrl: 'http://i3.mifile.cn/a4/ba4939c9-fc0a-4916-bddc-726fa00f7e9b' },
                    { index: '2', imgUrl: 'http://i3.mifile.cn/a4/9ced2c9e-f685-4918-9b2a-402af2d2039f' },
                    { index: '3', imgUrl: 'http://i3.mifile.cn/a4/f4bee59d-85a5-498f-ae57-a2cabe6aeb5b' }
                ]
            }
        },
        created() {
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        components: {
            // 'SBRollingAds': SBRollingAds
        }
    }
</script>

<style scoped>
    #smartbracelet {
        width: 100%;
        max-width: 1980px;
        position: relative;
        margin: 0 auto;
    }
    .banner {
  width: 100%;
}
.banner > img {
  width: 100%;
}
    .foryou {
        width: 1100px;
        margin: 0 auto;
        position: relative;
    }
    .smartbracelet_title {
        position: absolute;
        top: 25em;
        z-index: 999;
        left: 16em;
    }
    
    
    .title_bg {
        width: 100%;
        min-width: 1350px
    }
    
    .title_img {
        display: block;
        position: relative;
        width: 100%;
        max-width: 1980px;
        margin-top: 150px !important;
        margin: 0 auto;
    }
    
    .title_img img {
        width: 100%;
        min-width: 1345px;
    }
    
    .introduce {
        position: absolute;
        /* top: 35em; */
        top: 300px;
        right: 0;
        bottom: 0;
        left: 0;
        /* margin: 30em auto; */
        height: 100px;
        text-align: right;
        /* background: red; */
        width: 1100px;
    }
    
    .introduce_title {
        font-family: '方正兰亭超细黑简体';
        color: #858585;
        font-weight: normal;
        line-height: 12px;
        font-size: 35px;
    }
    
    .introduce_title img {
        width: 100px!important;
        min-width: 256px!important;
    }
    
    .introduce_p {
        margin-top: 40px;
        font-size: 20px;
        color: #858585;
        line-height: 12px;
    }
    
    .it_is_smartbracelet {
        width: 1100px;
        margin: 0 auto;
    }
    
    .it_is {
        margin-top: 85px;
        margin-left: 130px;
        margin-bottom: 70px;
    }
    
    .it_is_img {
        margin-left: 70px;
        width: 100%;
        z-index: 999;
        position: relative;
    }
    
    .it_is_fastpay {
        width: 100%;
        max-width: 1980px;
        margin: 0 auto;
        margin-top: 200px;
        position: relative;
         height: 941px; 
        overflow: hidden;
        text-align: right;
        background: red;
        background: url(../static/fastpay_background.png) no-repeat center;
    }
    
    .fastpay {
        width: 1100px;
        margin: 0 auto;
        z-index: 999;
        position: relative;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
    
    /* .fastpay_bg {
        width: 100%;
        margin-top: -550px;
        z-index: 9;
    } */
    
    .fastpay_introduce {
        position: relative;
        margin: 0 auto;
        margin-right: 170px!important;
    }
    
    .fastpay_img {
        position: relative;
        width: 759px;
         /* height: 941px;  */
        display: block;
        margin: 100px auto;
        /* background: red; */
    }
    
    .for_you {
        font-size: 30px;
        color: #222222;
        margin-bottom: 25px;
        text-align: left !important;
        margin-left: 80px;
    }
    .for_you_b {
        font-size: 30px;
        color: #222222;
        margin-bottom: 25px;
        text-align: left !important;
        margin-left: 110px;
    }
    
    .for_you span {
        color: #1c85fa;
    }
    
    .for_you_img {
        width: 859px;
        margin-top: 35px!important;
        margin-bottom: 100px!important;
        margin: 0 auto;
        display: block;
    }
    
    .for_you_div {
        position: absolute;
        bottom: -70px;
        left: 25px;
        
    }
    
    .for_you_p {
        font-size: 14px;
        color: #858585;
        text-align: left;
        line-height: 24px;
        /* margin-bottom: 15px; */
        margin-left: 60px;
        width: 504px;
    }
</style>