<template>
    <div id="footer">
         <img class="footer_bg" src="../../static/footer_bg.png" alt=""> 
        <div class="content">
            <ul>
                <ul class="ul_a">
                    <li class="li_a">臻财科技</li>
                    <li class="li_b"><a target="_blank" href="https://www.lagou.com/gongsi/150659.html" class="li_d">招贤纳士</a></li>
                    <li class="li_b"><router-link to='aboutus' class="li_d">关于我们</router-link></li>
                    <li class="li_b">反馈问题</li>
                    <ul class="ul_c">
                        <li class="li_c">浙ICP备16000246号-2  copyright@2017杭州臻财科技有限公司版权所有</li>
                        <li class="li_c"></li>
                    </ul>
                        
                </ul>
                <ul class="ul_a">
                    <li class="li_a">联系我们</li>
                    <li class="li_b">地址: 杭州市滨江区火炬大道581号三维大厦C座504</li>
                    <li class="li_b">电话: 0571-86811981</li>
                    <li class="li_b">邮箱: xl@zcxiaolian.com</li>
                </ul>
            </ul>
            <div class="ercode">
                <img src="../../static/ercode.png" alt="">
                <br>
                <br>
                <span>扫一扫关注我们</span>
            </div>
        </div>
    </div>
</template>
<style scoped>
#footer {
    width: 100%;
    height: 350px; 
     /* background-image: url('../../static/footer_bg.png');  */
    /*background-color: #1a262e;*/
    background-repeat: no-repeat;
    background-position: 50%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}
.footer_bg {
    position: absolute;
    width: 100%; 
    min-width: 1366px;
    max-width: 1980px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.content {
    width: 800px;
    /* height: 500px; */
    margin: 0 auto;
    display: block;
    position: relative;
}

.ul_a {
    float: left;
    margin-right: 100px;
    color: white;
    margin-top: 60px;
}

.li_a {
    font-size: 20px;
    color: white;
    margin-bottom: 40px;
}

.li_b {
    font-size: 16px;
    color: #a3a3a3;
    margin-bottom: 15px;
}
.li_d {
    font-size: 16px;
    color: #a3a3a3;
    margin-bottom: 15px;
}
.li_d:hover {
    color: #3cebfb;
    
}
.ul_c {
     margin-top: 60px; 
    /* margin-bottom: 30px!important; */
}
.li_c {
    font-size: 14px;
    color: #a3a3a3;
    margin-top: 15px;
    width: 100px;
    white-space: nowrap;
}

/*ul {
    display: inline-block;
    white-space: nowrap;
}

li {
    float: left;
    margin-right: 75px;
    white-space: nowrap;
}*/


/*.ul_a {
    font-size: 22px;
    color: white;
    margin-top: 60px;
    margin-bottom: 40px;
}

.ul_b {
    font-size: 18px;
    color: #a3a3a3;
    margin-bottom: 8px;
}

.ul_c {
    font-size: 18px;
    color: #a3a3a3;
    margin-top: 100px;
}
.ul_c li p {
    line-height: 35px;
    font-size: 20px;
}*/

.ercode {
    position: absolute;
    right: 40px;
    top: 80px;
    font-size: 20px;
    color: white;
    text-align: center;
}
.ercode img {
    width: 100px;
}
.location {
    color: #3cebfb;
}
</style>
