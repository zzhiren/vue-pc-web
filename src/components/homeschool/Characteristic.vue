//家校通特点
<template>
    <div id="characteristic">
        <ul class="ul_a">
            <li class="li_a" v-for="item in imgUrl" :key="item.index" >
                <ul>
                    <li><img v-bind:src="item.imgUrl" alt=""></li>
                    <li class="title">{{ item.title }}</li>
                    <li class="p"><p>{{ item.p1 }}<br>{{ item.p2 }}</p></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script scoped>
export default {
    data () {
        return {
            imgUrl:[
                {imgUrl:require('../../static/school.png'), title: '对于学校', p1: '让管理更便捷', p2: '加强品牌的建设与宣传'},
                {imgUrl:require('../../static/teacher.png'), title: '对于老师', p1: '让沟通更通畅', p2: '特性功能减轻工作负担'},
                {imgUrl:require('../../static/parent.png'), title: '对于家长', p1: '让信息更全面', p2: '实时动态获取孩子表现'},
                {imgUrl:require('../../static/student.png'), title: '对于学生', p1: '让关注更客观', p2: '多渠道多层次助力成长'},
            ]
        }
    }
}
</script>
<style scoped>
p {
    line-height: 25px;
}
#characteristic {
    width: 1100px;
    width: 100%;
    height: 350px;
    margin: 0 auto;
    text-align: center;
    background-color: #fdfdfd;
}
.title {
    font-size: 22px;
    margin-top: 30px;
    color: #333333;
}
.p {
    margin-top: 15px;
    font-size: 16px;
    color: #808080;
}
.ul_a {
    display: inline-block;
    margin-top: 40px;
    width: 100%;
    white-space: nowrap;
    /*text-align: center;*/
}
.li_a {
    display: inline-block;
    margin-right: 100px;
}
.li_a:nth-child(4n){
    margin-right: 0;
}
</style>

