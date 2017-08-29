<template>
    <div id="home">
         <HomeRollingAds></HomeRollingAds> 
         <!-- <div class="title">
            <p>臻财科技</p>
            <p>校园智慧管理云平台解决方案的供应商</p>
        </div> -->
        <div class="product_list">
            <div class="product">
                <img class="product_title" src="../static/home_classcard.png" alt="">
                <p class="product_p">是一款集蓝牙、NFC、射频卡技术、多媒体技术为一体的综合管理平台系统。</p>
            </div>
            <div class="product">
                <img class="product_title" src="../static/home_schoolhome.png" alt="">
                <p class="product_p">是基于学校微信公众号，建立一个顺畅、高效的家校沟通平台，促进学校信息化、智慧化信息建设。</p>
            </div>
            <div class="product">
                <img class="product_title" src="../static/home_smart_bracelet.png" alt="">
                <p class="product_p">是一款采集学生进出校门数据和运动数据，协作建立健康档案的学生智能手环。</p>
            </div>
        </div>
        <div class="classcard">
            <img class="classcard_bg" src="../static/classcard_bg.png" alt="">
            <div class="classcard_introduce">
                 <p class="cd_title"><img src="../static/home_title01.png" alt=""></p>
                <!-- <p class="cd_p">电子班牌充分展示学校教育教学特色，校园文化，学</p>
                <p class="cd_p">校荣誉，新闻动态等为学校提供便捷管理信息展示，</p>
                <p class="cd_p">提升学校信息化管理水平。智能硬件融入到智慧化应</p>
                <p class="cd_p">用场景中，助力智慧校园建设。为班级提供个性化信</p>
                <p class="cd_p">息展示窗口，班级信息，荣誉，班务动态呈现，助力</p>
                <p class="cd_p">文明班级建设</p>  -->
                <p class="cd_p">电子班牌是图文并茂的信息展示终端，充分展示学校教育教学特色、校园文化、学校荣誉、新闻动态等，提升学校信息化管理水平。班级个性化信息展示页面，实时呈现班级信息、学生荣誉、班务动态等，为全方位打造校园文化环境提供了一个优质的载体。智能硬件融入到智慧化应用场景中，助力智慧校园建设。</p>
                <img v-if="state" v-on:click="go('classcard')" class="hs_view_details" src="../static/view_details.png" v-on:mouseover="changeShow()">
                <img v-if="!state" v-on:click="go('classcard')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
        </div>
        <div class="homeschool">
            <div class="homeschool_introduce">
                <p class="cd_title" ><img src="../static/home_title02.png" alt=""></p>
                <p class="hs_p">校连家校通是基于学校微信公众号，建立一个顺畅、高效、现代网络信息</p>
                <p class="hs_p">化的信息互动沟通渠道，促进学校信息化、智慧化的建设。</p>
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
                <!-- <p class="cd_p">是学生的电子身份标识，具有门禁、学生考</p>
                <p class="cd_p">勤、定位功能，可对学生进出校门实时监控和</p>
                <p class="cd_p">发送通知；同时具备信息采集、查询功能，协</p>
                <p class="cd_p">作建立学生健康档案，直观分析每个学生个体</p>
                <p class="cd_p">的情况，给学生科学、健康的生活指导。</p> -->
                <p class="cd_p">智能手环是集电子门禁、智能定位、健康检测、信息采集于一体的多功能手环。电子门禁可智能识别学生身份，无障碍通过校门。利用校内蓝牙基站，获取学生校园活动轨迹。科学记录学生步数、心率、卡路里等日常运动数据，进行健康检测。实时精准记录学生数据，并同步到后台。</p>
                <img v-if="state" v-on:click="go('smartbracelet')" class="hs_view_details" src="../static/view_details.png" v-on:mouseover="changeShow()">
                <img v-if="!state" v-on:click="go('smartbracelet')" class="hs_view_details" src="../static/view_details_b.png" v-on:mouseleave="changeShow()">
            </div>
        </div>
    </div>
</template>

<script>
import HomeRollingAds from './common/HomeRollingAds.vue'

    export default {
        data() {
            return {
                state: true
            }
        },
        created() {
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        components: {
            'HomeRollingAds': HomeRollingAds
        },
        methods: {
            go(path) {
                this.$router.push(path)
            },
            changeShow() {
                this.state = !this.state;
            }
        }
    }
</script>

<style scoped>

    #id {
        width: 100%;
        background: red;
        position: relative;
    }
    
    .product_list {
        width: 1100px;
        margin: 0 auto;
        /* height: 300px; */
        /* background: red; */
        display: flex;
        margin-bottom: 145px!important;
    }
    .title {
        width: 1100px;
        height: 100px;
        position: absolute;
        top:40%;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        z-index: 99;
        text-align: center;
    }
    
    .title p {
        font-family: 方正兰亭超细黑; 
         /* font-family: 'FZLTCXHJW--GB1-0';  */
        font-size: 50px;
        color: #FFFFFF;
        margin-bottom: 50px;
        font-weight: 100;
        /* font-family: "Microsoft YaHei"; */
        
    }
    .product {
        /* background: blue; */
        /* height: 100%; */
        margin: 5px;
        flex: 1;
        /* text-align: center;  */
    }
    
    .product_title {
        width: 10em;
        display: block;
        margin: 120px auto 60px;
    }
    
    .product_p {
        color: #858585;
        line-height: 24px;
        font-size: 16px;
        display: block;
        margin: 0 auto;
        width: 270px;
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
    
    .hs_p {
        font-size: 14px;
        line-height: 30px;
        color: #858585;
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
        cursor:pointer;
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