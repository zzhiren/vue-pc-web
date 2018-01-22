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
import TopHeader from "./components/common/TopHeader.vue";
import Foot from "./components/common/Foot.vue";

export default {
  components: {
    TopHeader: TopHeader,
    Foot: Foot
  },
  created() {
    // console.log(window.screen.width)
  }
};
</script>

<style>
@import "./assets/css/base.css";
#app {
  /* background: blue;   */
  /* height: 100%; */
  width: 100%;
  /* min-width: 1366px;  */

  max-width: 1980px;
  margin: 0 auto;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
.vjs-tech {
  width: 800px !important;
  position: relative !important;
  /* height: 618.75px!important; */
}
.vjs-text-track-display {
  position: relative !important;
}

.video-player {
  /* height: 100% !important; */
}
.vjs-modal-dialog-description {
  display: none !important;
}
.vjs-control-text {
  height: 0 !important;
}
body::-webkit-scrollbar {
  width: 5px;
  height: 16px;
  background-color: white;
  opacity: 1;
}
body::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px white; */
  /* border-radius: 10px; */
  background-color: rgba(0, 0, 0, 0.8);
  display: block;
}
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
  background-color: rgba(150, 150, 150, 0.9);
  /* background-color: rgba(150, 150, 150, 0.9); */

}
body::-webkit-scrollbar-thumb:hover{
  background-color: #0088f5;
}

</style>
