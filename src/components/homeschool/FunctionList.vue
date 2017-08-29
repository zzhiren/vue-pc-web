<template>
    <div id="function_list">
        <img src="../../static/function_itr.png" alt="">
        <!-- <div class="content">
            <div class="div1">
                <div class="a bg">
                    <span>功能列表</span>
                </div>
                <div class="b">
                    <img src="../../static/function_list01.png" alt="">
                </div>
                <div class="c">
                    <p class="c_title">学生管理</p>
                    <p class="p1">成绩管理、作业管理、在线请假、住宿</p>
                    <p class="p1">生活、每周菜谱、主题投票、问卷调查</p>
                </div>
                <div class="d bg">
                    <p class="p_title d_title">家校互连</p>
                    <p class="p_content d_p">点对点消息管理，通知管理，校长信箱</p>
                </div>
               
            </div>
            <div class="div2">
                <div class="f bg">
                    <p class="p_title f_title">微门户</p>
                    <p class="p_content f_p">学校简洁、校园快讯、荣誉墙、教师风采</p>
                    <p class="p_content f_p">大事记、学生天地、校招报名、校园公告</p>
                </div>
                <div class="g">
                    <p class="g_title">在线资源</p>
                    <p class="g_p">课文点读、汉字学习、电子课本儿童歌曲、</p>
                    <p class="g_p">有声读物</p>
                </div>
            </div>
            <div class="div3">
                 <div class="e">
                    <p class="p_title f_title">班级风采(班级圈)</p>
                </div>
                <div class="h">
                    <p class="p_title h_title">平安校园</p>
                    <p class="p_content h_p">到校离校、电子围栏、学生定位、视频监控</p>
                </div>
                <div>
                    <img src="../../static/function_list02.png" alt="">
                </div>
               
            </div>
        </div> -->
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    #function_list {
        z-index: 99;
        position: relative;
        width: 100%;
        height: 701px;
        margin: 40px auto;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    #function_list img {
        display: block;
        margin: 0 auto;
    }
    .content {
        width: 1104px;
        height: 701px;
        margin: 0 auto;
    }
    .bg {
        background: #70b0f7 !important;
    }
    .div1 {
        width: 375px;
        height: 600px;
        float: left;
    }
    
    .a {
        width: 100%;
        height: 98px;
    }
    
    .a span {
        line-height: 94px;
        font-size: 30px;
        color: #FFFFFF;
        margin-left: 30px;
    }
    
    .b img {
        display: block;
        width: 100%;
    }
    
    .c {
        position: relative;
        width: 100%;
        height: 100px;
        background: white;
        padding-top: 18px;
    }
    
    .c_title {
        font-size: 18px;
        color: #333333;
        line-height: 25px;
        margin-bottom: 10px;
        margin-left: 35px;
    }
    
    .p1 {
        font-size: 16px;
        line-height: 24px;
        color: #858585;
        margin-left: 38px;
    }
    
    .d {
        width: 100%;
        height: 80px;
        background: rgba(59, 58, 67, 0.88);
        padding-top: 24px; 
    }
    
    .d_title {
        color: #FFFFFF;
        margin-left: 35px;
        margin-bottom: 10px;
    }
    
    .d_p {
        line-height: 25px;
        color: #FFFFFF;
        margin-left: 38px;
    }
    
    .e {
        width: 100%;
        height: 73px;
        line-height: 73px;
        background: #70b0f7 !important;
        /* padding-top: 35px; */
    }
    
    .e_title {
        margin-left: 35px;
        margin-bottom: 15px;
    }
    
    .e_p {
        line-height: 12px;
        color: #333333;
        margin-left: 38px;
    }
    
    .div2 {
        width: 370px;
        height: 220px;
        float: left;
        margin-top: 324px;
    }
    
    .f {
        width: 100%;
        height: 101px;
        background: rgba(59, 58, 67, 0.88);
        padding-top: 18px;
    }
    
    .f_title {
        color: #FFFFFF;
        margin-left: 35px;
        margin-bottom: 10px;
    }
    
    .f_p {
        line-height: 25px;
        color: #FFFFFF;
        margin-left: 38px;
    }
    
    .g {
        position: relative;
        width: 100%;
        height: 92px;
        background: #f6f4f4;
        padding-top: 12px;
    }
    
    .g_title {
        font-size: 18px;
        color: #333333;
        line-height: 25px;
        margin-bottom: 6px;
        margin-left: 35px;
    }
    
    .g_p {
        font-size: 16px;
        line-height: 26px;
        color: #858585;
        margin-left: 38px;
    }
    
    .div3 {
        width: 359px;
        height: 431px;
        float: left;
        margin-top: 251px;
    }
    
    .div3 img {
        display: block;
    }
    
    .h {
        width: 100%;
        height: 83px;
        background: #f6f4f4;
        padding-top: 35px;
    }
    
    .h_title {
        margin-left: 35px;
        margin-bottom: 15px;
    }
    
    .h_p {
        line-height: 12px;
        color: #333333;
        margin-left: 38px;
    }
    
    .p_title {
        font-size: 18px;
    }
    
    .p_content {
        font-size: 16px;
    }
    
    .i {
        width: 100%;
        height: 83px;
        padding-top: 15px;
    }
    
    .i_title {
        font-size: 18px;
        color: #ffffff;
        line-height: 25px;
        margin-bottom: 10px;
        margin-left: 35px;
    }
    
    .i_p {
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        margin-left: 38px;
    }
    
    div {
        border-radius: 2px;
    }
</style>

