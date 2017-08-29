<template>
    <div id="function_itr">
         <div class="content">
            <div class="information_management">
                <p class="first_title">信息管理</p>
                <p class="second_title">学生管理</p>
                <p class="p1">家校互连，共同关注，学习生活，面面俱到</p>
                <br>
                <p class="second_title">成绩管理</p>
                <p class="p1">老师一键导入学生成绩，家长查看学生成绩折线图</p>
            </div>
            <div class="micro_portal">
                <p class="first_title">微门户</p>
                <p class="p1">构建平台特色，丰富宣传模式，提升学校形象</p>
                <p class="p1">以文图形式展示信息，为学校做好宣传</p>
            </div>
            <div class="home_school">
                <p class="first_title">家校互连</p>
                <p class="p1">单发群发，实时便捷，已阅未阅，一目了然</p>
                <br>
                <p class="second_title">点对点消息管理</p>
                <p class="p1">老师与家长、老师与老师可以在微信端发送即时消息互相联络沟通</p>
                <br>
                <p class="second_title">通知管理</p>
                <p class="p1">学校、老师发送通知，家长收到通知推送消息</p>
            </div>
            <div class="oa">
                <p class="first_title">通用办公OA</p>
                <p class="second_title">通用申请</p>
                <p class="p1">通过文本和图片对申报内容进行描述，完成审批流程</p>
                <br>
                <p class="second_title">教师请假</p>
                <p class="p1">可选择请假类型，填写请假时间和请假事由，完成请假流程</p>
            </div>
            <div class="img">
                <img src="../../static/function_introduction.png" alt="">
            </div>
        </div> 
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#function_itr {
    width: 100%;
    height: 1145px;
    margin-top: 80px;
    background: #ffffff;
}
.function_itr {
    display: block;
    margin: 0 auto;
}
.content {
    position: relative;
    width: 1100px;
    height: 100%;
    margin: 0 auto;
}
.information_management {
    position: absolute;
    top: 100px;
    width: 400px;
    height: 200px;
}
.micro_portal {
    position: absolute;
    width: 400px;
    height: 200px;
    text-align: right;
    right: 0;
    top: 400px;
}
.home_school {
    position: absolute;
    width: 500px;
    height: 250px;
    top: 590px;
}
.oa {
    position: absolute;
    width: 500px;
    height: 200px;
    text-align: right;
    right: 0;
    top: 723px;
}
.img {
    position: absolute;
    width: 854px;
    display: block;
    top: 105px;
    left: 50px;
}
.first_title {
    font-size: 30px;
    color: #28375C;
    margin-bottom: 25px;
}
.second_title {
    font-size: 16px;
    color: #333333;
    margin-bottom: 5px;
}
.p1 {
    font-size: 14px;
    color: #808080;
    line-height: 30px;
}
</style>


