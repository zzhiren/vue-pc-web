<template>
    <div id="about_us">
        <AboutUSRollingAds></AboutUSRollingAds>
        <div class="content">
            <img class="content_bg" src="../static/fastpay_bg.png" alt="">
            <div class="introduce">
                <p class="p_title"><img src="../static/who_am_i.png" alt=""></p>
                <!-- <p class="p_content p_content_b">臻财是校园智慧管理云平台解决方案的供应商。</p>
                <p class="p_content p_content_b">近年来，臻财专注智慧校园管理软硬件产品的自主研发、设计、生产，开创了校园智慧管理云平台时代，先后创造性地上线了家校通、智能手环、智能手环等产品，公司具备雄厚的研发能力及丰富的教育资源，以科技创新为主导，“教育+大数据智能网”为发展方向，扎实推进校园信息化建设。多维度采集学生信息，大数据精准分析、定点推送，为数十万学生和家长提供出色的个性化服务。</p>
                <p class="p_content p_content_b">如今，越来越多的学校选择臻财校园智慧管理整体解决方案及应用服务。</p>
                <p class="p_content">2015、2016年，臻财连续两年业绩上涨30%。</p> -->

                 <p class="p_content p_content_b">臻财是校园智慧管理云平台解决方案的供应商。</p>
                <p class="p_content p_content_b">近年来，臻财专注智慧校园管理软硬件产品的自主研发、设计、生产，开创了校园智慧管理云平台时代，</p>
                <p class="p_content p_content_b">先后创造性地上线了家校通、智能手环、智能手环等产品，公司具备雄厚的研发能力及丰富的教育资源，</p>
                <p class="p_content p_content_b">多维度采集学生信息，大数据精准分析、定点推送，为数十万学生和家长提供出色的个性化服务。</p>
                <p class="p_content p_content_b">如今，越来越多的学校选择臻财校园智慧管理整体解决方案及应用服务。</p>
                <p class="p_content">2015、2016年，臻财连续两年业绩上涨30%。</p> 
    
                <p class="p_title"><img class="our_power" src="../static/our_power.png" alt=""></p>
                <div class="competitive_edge">
                    <div class="one">
                        <img src="../static/one.png" alt="">&nbsp;完整的解决方案及配套的软硬件研发生产</div>
                    <div class="one">
                        <img src="../static/two.png" alt="">&nbsp;提供满足客户需求的个性化定制服务</div>
                    <div class="one">
                        <img src="../static/three.png" alt="">&nbsp;快速高效的售后技术服务支撑</div>
                </div>
            </div>
            <div class="idea">
                    <img src="../static/idea.png" alt="">
                </div>
            <img class="dev_history" src="../static/dev_history.png" alt="">
            <div class="partener">
                <p class="partener_p"><img src="../static/our_partener.png" alt=""></p>
                <div class="partener_list">
                    <div class="partener_name">
                        <img src="../static/soyea.png" alt="">
                    </div>
                    <div class="partener_name">
                        <img src="../static/enjoyor.png" alt="">
                    </div>
                    <div class="partener_name">
                        <img src="../static/ruijia.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutUSRollingAds from './common/AboutUSRollingAds.vue'

    export default {
        created() {
            document.documentElement.scrollTop = 0;
            window.pageYOffset = 0;
            document.body.scrollTop = 0;
        },
        components: {
            'AboutUSRollingAds': AboutUSRollingAds
        }
    }
</script>

<style scoped>
    #about_us {
        width: 100%;
        max-width: 1980px;
        position: relative;
        margin: 0 auto;
    }
    
    /* .title {
        width: 100%;
        height: 100px;
        min-width: 1100px;
        position: absolute;
        top: 9%;
        z-index: 99;
        text-align: center;
    }
    
    .title p {
        font-family: '方正兰亭超细黑简体';
        font-size: 50px;
        color: #FFFFFF;
        margin-bottom: 50px;
        font-weight: 200;
    } */
    
    .content {
        width: 100%;
        /* height: 1500px; */
        max-width: 1980px;
        overflow: hidden;
        position: relative;
    }
    
    .content_bg {
        width: 100%;
        max-width: 1980px;
        min-width: 1350px;
    }
    
    .introduce {
        position: absolute;
        width: 1100px;
        height: 100px;
        /* background: red; */
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 200px auto;
        z-index: 99;
    }
    
    .p_title {
        text-align: center;
        margin-bottom: 65px;
    }
    .p_title img {
        width: 244px;
    }
    .our_power {
        width: 379px!important;
    }
    .p_content {
        font-size: 16px;
        color: #222222;
        line-height: 30px;
        margin-bottom: 150px!important;
        text-indent: 2em;
        width: 900px;
         margin: 0 auto; 
         text-align: center;
    }
    .p_content_b {
        margin-bottom: 0!important;
    }
    
    .competitive_edge {
        display: flex;
        text-align: center;
        /* width: 950px; */
        margin: 0 auto;
    }
    
    .one {
        display: flex;
        flex: 1;
        font-size: 16px;
        justify-content:center;
        color: #222222;
    }
    .idea {
        position: relative;
        margin: 0 auto;
        text-align: center;
        padding-top: 280px;
    }
    
    .dev_history {
        display: block;
        margin-top: 200px;
        width: 100%;
        max-width: 1980px;
        min-width: 1350px;
    }
    
    .partener {
        /* background: red; */
        text-align: center;
    }
    
    .partener_p {
        font-size: 50px;
        color: #1C85FA;
        font-weight: bold;
        margin-top: 100px;
        margin-bottom: 65px;
        font-family: "方正兰亭超细黑简体";
    }
    .partener_p img {
        width: 213px;
    }
    .partener_list {
        display: flex;
        width: 1000px; 
        margin: 0 auto;
        margin-bottom: 180px;
    }
    
    .partener_name {
        flex: 1;
    }
    
    .partener_name img {
        width: 200px;
    }

</style>