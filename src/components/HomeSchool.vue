<template>
  <div id="homeschool">
    <div class="banner">
            <img v-bind:src="banner" alt="">
        </div>
    <PlatformIntroduction></PlatformIntroduction>
    <Characteristic></Characteristic>
    <InfrastructurePlatform></InfrastructurePlatform>
    <FunctionList></FunctionList>
    <FunctionIntroduction></FunctionIntroduction>
  </div>
</template>

<script>
import PlatformIntroduction from "./homeschool/PlatformIntroduction.vue";
import Characteristic from "./homeschool/Characteristic.vue";
import InfrastructurePlatform from "./homeschool/InfrastructurePlatform.vue";
import FunctionList from "./homeschool/FunctionList.vue";
import FunctionIntroduction from "./homeschool/FunctionIntroduction.vue";
import banner from "../static/homeschool_rolls.png";

export default {
  data() {
    return {
      banner: banner
    };
  },
  created() {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  },
  components: {
    PlatformIntroduction: PlatformIntroduction,
    Characteristic: Characteristic,
    InfrastructurePlatform: InfrastructurePlatform,
    FunctionList: FunctionList,
    FunctionIntroduction: FunctionIntroduction
  }
};
</script>

<style scoped>
#homeschool {
  width: 100%;
  max-width: 1980px;
  position: relative;
  margin: 0 auto;
}
.banner {
  width: 100%;
}
.banner > img {
  width: 100%;
}
.head {
  width: 1100px;
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 16rem auto;
  z-index: 99;
}

.head img {
  width: 40%;
}

.title {
  position: absolute;
  width: 800px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 22% auto;
  z-index: 999;
  height: 200px;
  text-align: right;
}
</style>

