<template>
  <section>
    <div class="container">
      <div class="star star1" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star2" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star3" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star4" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star5" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star6" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star7" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star8" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star9" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="star star10" :style="`background:url(${star}) no-repeat center;`"></div>
      <div class="cloud cloud1" :style="`background:url(${cloud1}) no-repeat center;`"></div>
      <div class="cloud cloud2" :style="`background:url(${cloud2}) no-repeat center;`"></div>
      <div class="cloud cloud3" :style="`background:url(${cloud1}) no-repeat center;`"></div>
      <div class="cloud cloud4" :style="`background:url(${cloud2}) no-repeat center;`"></div>
      <div class="cloud cloud5" :style="`background:url(${cloud1}) no-repeat center;`"></div>
      <div class="cloud cloud6" :style="`background:url(${cloud2}) no-repeat center;`"></div>
      <div class="cloud cloud7" :style="`background:url(${cloud1}) no-repeat center;`"></div>
    </div>
  </section>
</template>

<script>
import star from "@/assets/images/sky/star.png"
import cloud1 from "@/assets/images/sky/cloud1.png"
import cloud2 from "@/assets/images/sky/cloud2.png"

export default {
  head() {
    return {
      title: "Sky"
    }
  },
  data () {
    return {
      star: star,
      cloud1: cloud1,
      cloud2: cloud2
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  overflow: hidden;
}

@keyframes bg-color {
  0% {
    background-color: #000040;
  }
  25% {
    background-color: #009eee;
  }
  50% {
    background-color: #00c3ff;
  }
  75% {
    background-color: #D67E4F;
  }
  100% {
    background-color: #000040;
  }
}

.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #000040;
  animation: bg-color 20s infinite;
}

.star {
  position:absolute;
  width:100px;
  height:100px;
  animation: star 20s infinite;
  &1 {
    top:20px;
    left:5%;
  }
  &2 {
    top:170px;
    left:15%;
  }
  &3 {
    top:500px;
    left:30%;
  }
  &4 {
    top:420px;
    left:45%;
  }
  &5 {
    top:270px;
    left:70%;
  }
  &6 {
    top:80px;
    left:60%;
  }
  &7 {
    top:300px;
    left:75%;
  }
  &8 {
    top:160px;
    left:80%;
  }
  &9 {
    top:600px;
    left:90%;
  }
  &10 {
    top:260px;
    left:94%;
  }
}

@keyframes star {
  0% {
    filter:alpha(opacity=100);
    -moz-opacity: 1;
    opacity: 1;
  }
  15% {
    filter:alpha(opacity=20);
    -moz-opacity: 0.2;
    opacity: 0.2;
  }
  25% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
  75% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
  85% {
    filter:alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
  }
  100% {
    filter:alpha(opacity=100);
    -moz-opacity: 1;
    opacity: 1;
  }
}

.cloud {
  position:absolute;
  width:150px;
  height:100px;
  animation: cloud 20s infinite;
  &1 {
    top:200px;
    left:5%;
  }
  &2 {
    top:400px;
    left:24%;
  }
  &3 {
    top:120px;
    left:38%;
  }
  &4 {
    top:300px;
    left:59%;
  }
  &5 {
    top:50px;
    left:75%;
  }
  &6 {
    top:480px;
    left:82%;
  }
  &7 {
    top:220px;
    left:90%;
  }
}

@keyframes cloud {
  0% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
  15% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
  25% {
    filter:alpha(opacity=100);
    -moz-opacity: 1;
    opacity: 1;
  }
  65% {
    filter:alpha(opacity=1);
    -moz-opacity: 1;
    opacity: 1;
  }
  85% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
  100% {
    filter:alpha(opacity=0);
    -moz-opacity: 0;
    opacity: 0;
  }
}
</style>
