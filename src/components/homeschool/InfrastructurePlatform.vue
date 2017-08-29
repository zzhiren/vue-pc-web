<template>
    <div id="platform">
        <p class="main_title">校连家校通基础架构平台</p>
        <div class="img">
            <img src="../../static/platform.png" alt="">
        </div>
        <ul>
            <li>
                <p class="title">家长</p>
                <p class="p1">微信服务器</p>
                <p class="p1">校连微信家校通微信互动平台</p>
            </li>
            <li>
                <p class="title">&nbsp;</p>                
                <p class="p1">应用服务&nbsp;&nbsp;&nbsp;&nbsp;web服务</p>
                <p class="p1">存储服务&nbsp;&nbsp;&nbsp;&nbsp;安全服务</p>
            </li>
            <li>
                <p class="title">老师</p>
                <p class="p1">PC浏览器/微信</p>
                <p class="p1">校连微信家校通信息管理平台</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // items: [
                //     { title: '家长', p1: '', p2: '微信服务器', p3: '', p4: '校连微信家校通微信互动平台' },
                //     { title: '', p1: '应用服务', p2: 'web服务', p3: '存储服务', p4: '安全服务' },
                //     { title: '老师', p1: '', p2: 'PC浏览器/微信', p3: '', p4: '校连微信家校通信息管理平台' }
                // ]
            }
        }
    }
</script>
<style scoped>
    #platform {
        margin: 0 auto;
        width: 1100px;
        height: 600px;
        text-align: center;
    }
    .main_title {
        font-size: 30px;
        margin-top: 60px;
        margin-bottom: 30px;
    }
    .img {
        width: 1100px;
        height: 335px;
    }
    .title {
        margin-bottom: 20px;
    }
    .p1 {
        line-height: 25px;
        font-size: 15px;
        color: #858585;
    }
    
    ul {
        display: inline-block;
        list-style-type: none;
    }
    
    li {
        float: left;
        margin-right: 280px;
        text-align: left;
    }
    
    li:nth-child(2n) {
        margin-left: -20px;
    }
    
    li:nth-child(3n) {
        margin-right: 0;
        text-align: right;
    }
    
    .title {
        font-size: 20px;
    }
</style>
