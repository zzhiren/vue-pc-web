<template>
    <div id="RollingAds">
        <swiper class="swoper_content" :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in banners" v-bind:key="item.index">
                <img class="rolls_img" v-bind:src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
        </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: 'carrousel',
        data() {
            return {
                swiperOption: {
                    // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: false,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    //    direction : 'vertical',
                    //    effect:"coverflow",
                    grabCursor: true,
                    setWrapperSize: false,
                    // autoHeight: true,
                    // paginationType:"bullets",
                    pagination: '.swiper-pagination',
                    paginationClickable: false,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    // scrollbar:'.swiper-scrollbar',
                    mousewheelControl: false,
                    observeParents: false,
                    autoplayDisableOnInteraction: false,
                    // if you need use plugins in the swiper, you can config in here like this
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    // debugger: true,
                    // swiper callbacks
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    // onTransitionStart(swiper){
                    //   console.log(swiper)
                    // },
                    // more Swiper configs and callbacks...
                    // ...
                },
                banners: [
                    // { index: '0', imgUrl: 'http://i3.mifile.cn/a4/bc62a28f-de64-4eee-853b-36772a97f67e' }
                    // { index: '1', imgUrl: 'http://i3.mifile.cn/a4/ba4939c9-fc0a-4916-bddc-726fa00f7e9b' },
                    // { index: '2', imgUrl: 'http://i3.mifile.cn/a4/9ced2c9e-f685-4918-9b2a-402af2d2039f' },
                    // { index: '3', imgUrl: 'http://i3.mifile.cn/a4/f4bee59d-85a5-498f-ae57-a2cabe6aeb5b' },
                    // { index: '4', imgUrl: 'http://i3.mifile.cn/a4/98fc8a58-c35c-475e-89cb-b8fe1659817f' }
                    { index: '5', imgUrl: require('../../static/homeschool_rolls.png') }
                ]
                // props: [
                //     'rollsImg'
                // ]
                
            }
        },
        ready() {
            console.log(this.props.rollsImg)
        },
        components: {
            swiper,
            swiperSlide
        },
        // you can find current swiper instance object like this, while the notNextTick property value must be true
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style scoped>
    #RollingAds {
        width: 100%;
        max-width: 1980px;
         min-width: 600px; 
        /* background: red; */
        margin: 0 auto;
    }
    
    .rolls_img {
        width: 100% !important;
    }
    .swoper_content {
        margin: 0 !important;
        /* background: green; */
        width: 100% !important;
    }
</style>
