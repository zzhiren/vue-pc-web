<template>
  <div class="service-center">
    <img src="../static/service_img1.png" alt="">
    <div class="box">
      <img src="../static/servicecenter01.png" alt="">
      <img src="../static/servicecenter02.png" alt="">
      <img src="../static/servicecenter03.png" alt="">
      <img src="../static/servicecenter04.png" alt="">
      <img src="../static/servicecenter05.png" alt="">
      <img src="../static/servicecenter06.png" alt="">
      <img src="../static/servicecenter07.png" alt="">
      <img src="../static/servicecenter08.png" alt="">
      <img src="../static/servicecenter09.png" alt="">
      <img src="../static/servicecenter10.png" alt="">
      <img src="../static/servicecenter11.png" alt="">
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
.service-center {
  width: 100%;
}
img {
  width: 100%;
}
.box{
  width: 1100px;
  margin: 73px auto;
}
</style>
