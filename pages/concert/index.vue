<template>
  <section>
    <div class="redStick01"></div>
    <div class="redStick02"></div>
    <div class="redStick03"></div>
    <div class="redStick04"></div>
    <div class="redStick05"></div>
    <div class="redStick06"></div>
    <div class="redStick07"></div>
    <div class="redStick08"></div>
    <div class="blueStick01"></div>
    <div class="blueStick02"></div>
    <div class="blueStick03"></div>
    <div class="blueStick04"></div>
    <div class="blueStick05"></div>
    <div class="blueStick06"></div>
    <div class="blueStick07"></div>
    <div class="blueStick08"></div>
    <img src="@/assets/images/concert/odorupen.gif" class="penguin">
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Concert"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #111111;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.redStick {
  &01 {
    position: absolute;
    left: 20%;
    bottom: -250px;
    width: 5px;
    height: 200px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 2s ease-in infinite;
  }
  &02 {
    position: absolute;
    left: 10%;
    bottom: -150px;
    width: 5px;
    height: 100px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 3.5s ease-in infinite;
  }
  &03 {
    position: absolute;
    left: 25%;
    bottom: -200px;
    width: 5px;
    height: 150px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 2.5s ease-in infinite;
  }
  &04 {
    position: absolute;
    left: 30%;
    bottom: -125px;
    width: 5px;
    height: 75px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 3s ease-in infinite;
  }
  &05 {
    position: absolute;
    left: 5%;
    bottom: -350px;
    width: 5px;
    height: 250px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 2.3s ease-in infinite;
  }
  &06 {
    position: absolute;
    left: 15%;
    bottom: -130px;
    width: 5px;
    height: 80px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 2.6s ease-in 0.5s infinite;
  }
  &07 {
    position: absolute;
    left: 22.5%;
    bottom: -180px;
    width: 5px;
    height: 130px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 3.2s ease-in 1s infinite;
  }
  &08 {
    position: absolute;
    left: 12.5%;
    bottom: -225px;
    width: 5px;
    height: 175px;
    background-color: #F94548;
    transform-origin: 0;
    animation: Stick 2.2s ease-in 1.5s infinite;
  }
}

.blueStick {
  &01 {
    position: absolute;
    right: 20%;
    bottom: -250px;
    width: 5px;
    height: 200px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 2s ease-in infinite;
  }
  &02 {
    position: absolute;
    right: 10%;
    bottom: -150px;
    width: 5px;
    height: 100px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 3.5s ease-in infinite;
  }
  &03 {
    position: absolute;
    right: 25%;
    bottom: -200px;
    width: 5px;
    height: 150px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 2.5s ease-in infinite;
  }
  &04 {
    position: absolute;
    right: 30%;
    bottom: -125px;
    width: 5px;
    height: 75px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 3s ease-in infinite;
  }
  &05 {
    position: absolute;
    right: 5%;
    bottom: -350px;
    width: 5px;
    height: 250px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 2.3s ease-in infinite;
  }
  &06 {
    position: absolute;
    right: 15%;
    bottom: -130px;
    width: 5px;
    height: 80px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 2.6s ease-in 0.5s infinite;
  }
  &07 {
    position: absolute;
    right: 22.5%;
    bottom: -180px;
    width: 5px;
    height: 130px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 3.2s ease-in 1s infinite;
  }
  &08 {
    position: absolute;
    right: 12.5%;
    bottom: -225px;
    width: 5px;
    height: 175px;
    background-color: #46FCF9;
    transform-origin: 0;
    animation: Stick 2.2s ease-in 1.5s infinite;
  }
}

@keyframes Stick {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-150vh);
  }
}

@mixin desktop() {
  @media (min-width: 420px) {
    @content;
  }
}

.penguin {
  width: 150px;
  height: 150px;
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  background-size: contain;
  @include desktop() {
    width: 300px;
    height: 300px;
  }
}
</style>
