<template>
  <div class="x-course">
    <img class="banner" src="../static/xcourse-banner.png" alt="">
    <div class="box1">
      <img class="img" src="../static/xcourse_serious.png" alt="">
      <img class="img" src="../static/xcourse-title.png" alt="">
      <img class="img" src="../static/xcourse-no.png" alt="">
    </div>
    <div class="box2">
      <img class="img" src="../static/xcourse-xuanke.png" alt="">
    </div>
    <div class="box1">
      <img class="img" src="../static/xingaokao.png" alt="">
      <img class="img" src="../static/quanxian.png" alt="">
      <img class="img" src="../static/jiaoxuezhiliang.png" alt="">
    </div>
    
  </div>
</template>
<script>
export default {
  created() {
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    document.body.scrollTop = 0;
  }
};
</script>
<style scoped>
.x-course {
  width: 100%;
  position: relative;
  text-align: center;
}
.box1 {
  width: 1100px;
  margin: 0 auto;
  padding-top: 131px;
  padding-bottom: 140px;
}
.box2 {
  width: 100%;
  height: 800px;
  background: rgba(245, 245, 245, 1);
  padding-top: 100px;
  padding-bottom: 100px;
}
.img {
  width: 1100px;
  margin-bottom: 121px;
}
.banner {
  width: 100%;
}
</style>
