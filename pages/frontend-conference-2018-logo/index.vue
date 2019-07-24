<template>
  <section>
    <div class="l-bgWrap">
      <div class="title-area">
        <h1 class="title1">FRONTEND</h1>
        <h1 class="title2">CONFERENCE</h1>
        <h1 class="title3">2018</h1>
        <div class="l-border"></div>
        <div class="r-border1"></div>
        <div class="r-border2"></div>
        <div class="l-circle1"></div>
        <div class="l-circle2"></div>
        <div class="r-circle1"></div>
        <div class="r-circle2"></div>
        <div class="r-circle3"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "FRONTEND CONFERENCE 2018 LOGO",
      link: [
        { href: "https://fonts.googleapis.com/css?family=Limelight", rel: "stylesheet"}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.l-bgWrap {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg,#7171c7,#de6d62);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: 50%;
  overflow: scroll;
}

.title-area {
  margin: 0 auto;
  padding-top: 220px;
  text-align: center;
  position: relative;
}

.title {
  &1 {
    color: white;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-family: 'Limelight', cursive;
    letter-spacing: 5px;
    animation: title 1.5s infinite linear;
    opacity: 1;
  }
  &2 {
    color: white;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-family: 'Limelight', cursive;
    letter-spacing: 5px;
    animation: title 1.5s 0.5s infinite linear;
  }
  &3 {
    color: white;
    margin: 0;
    padding: 0;
    font-size: 60px;
    font-family: 'Limelight', cursive;
    letter-spacing: 5px;
    animation: title 1.5s 1s infinite linear;
  }
}

@keyframes title {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.l-border {
  display: inline-block;
  position: absolute;
  top: 50px;
  left: 32.5%;
  width: 2px;
  height: 350px;
  background-color: white;
  transform: rotate(50deg);
  animation: l-border 5s infinite;
}

@keyframes l-border {
  0% {
    transform: rotate(50deg);
  }
  50% {
    transform: rotate(410deg);
  }
  100% {
    transform: rotate(50deg);
  }
}

.r-border {
  &1 {
    display: inline-block;
    position: absolute;
    top: 280px;
    right: 35%;
    width: 2px;
    height: 330px;
    background-color: white;
    transform: rotate(55deg);
    animation: r-border1 5s infinite;
  }
  &2 {
    display: inline-block;
    position: absolute;
    top: 275px;
    right: 29%;
    width: 2px;
    height: 160px;
    background-color: white;
    transform: rotate(125deg);
    animation: r-border2 1s infinite linear;
  }
}

@keyframes r-border1 {
  0% {
    transform: rotate(55deg);
  }
  33% {
    transform: rotate(415deg);
  }
  67% {
    transform: rotate(55deg);
  }
  100% {
    transform: rotate(415deg);
  }
}

@keyframes r-border2 {
  0% {
    transform: rotate(125deg);
  }
  100% {
    transform: rotate(485deg);
  }
}

.l-circle {
  &1 {
    position: absolute;
    top: 250px;
    left: 24%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid white;
    transform: translate(0, 0);
    animation: l-circle1 5s infinite;
  }
  &2 {
    position: absolute;
    top: 120px;
    left: 35.5%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    transform: scale(1);
    opacity: 1;
    animation: l-circle2 2s infinite;
  }
}

@keyframes l-circle1 {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(-150px, 150px);
  }
  67% {
    transform: translate(150px, 150px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes l-circle2 {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(3);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.r-circle {
  &1 {
    position: absolute;
    top: 270px;
    right: 28%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: white;
    transform: rotateY(0) ;
    animation: r-circle1 1s infinite;
  }
  &2 {
    position: absolute;
    top: 450px;
    right: 40.5%;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: white;
    transform-origin: bottom right;
    transform: rotate(0);
    animation: r-circle2 2s infinite linear;
  }
  &3 {
    position: absolute;
    top: 380px;
    right: 22%;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid white;
    animation: r-circle3 1.5s infinite linear;
  }
}

@keyframes r-circle1 {
  0% {
    transform: rotateY(0);
  }
  50% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(0);
  }
}

@keyframes r-circle2 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes r-circle3 {
  0% {
    border-radius: 50%;
  }
  25% {
    border-radius: 90% 10% 90% 10%;
  }
  50% {
    border-radius: 50%;
  }
  75% {
    border-radius: 10% 90% 10% 90%;
  }
  100% {
    border-radius: 50%;
  }
}
</style>
