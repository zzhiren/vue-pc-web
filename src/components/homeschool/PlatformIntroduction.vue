<template>
    <div id="content">
        <div class="mac">
            <img src="../../static/macbook.png" alt="">
        </div>
        <div class="introduce">
            <img src="../../static/ito_platform.png" alt="">
            <!-- <span class="lan_cn">INTRODUCE</span> -->
            <div class="p">
                <p>家校通是基于学校微信公众号建立一个顺畅、高</p>
                <!--<br>-->
                <p>效、现代网络信息化的信息互动沟通渠道，促进学校信息智慧化管理与建设。</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
#content {
    width: 1100px;
    height: 380px;
    margin: 170px auto;
    position: relative;
    background: #ffffff; 
}

.mac {
    position: absolute;
    width: 542px;
    /*height: 220px;*/
    /* top: 160px; */
    right: 20px;
}
.introduce {
    position: absolute;
    width: 620px;
    height: 200px;
    left: 20px;
    /* top: 220px; */
}

.introduce img {
    width: 213px;
}
.lan_cn {
    font-style: italic;
    font-size: 20px;
}

.p {
    margin-top: 150px;
    text-align: left;
    line-height: 30px;
    font-size: 14px;
    font-family: Microsoft YaHei;
}

img {
    display: block;
    width: 100%;
}
</style>


