<template>
  <div id="app">
    <TopHeader></TopHeader>
    <transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    	</transition>
    <Foot></Foot>
  </div>
</template>

<script>
  import TopHeader from './components/common/TopHeader.vue'
  import Foot from './components/common/Foot.vue'
  
  export default {
    components: {
      'TopHeader': TopHeader,
      'Foot': Foot
    },
    created() {
      // console.log(window.screen.width)
    }
  }
</script>

<style>
  @import './assets/css/base.css';
  #app {
    /* background: blue;   */
    /* height: 100%; */
    width: 100%;
    /* min-width: 1366px;  */

    max-width: 1980px;
    margin: 0 auto;
  }
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
