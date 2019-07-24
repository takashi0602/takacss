<template>
  <section>
    <div class="container">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
      <div class="box4"></div>
      <div class="clearBox1"></div>
      <div class="clearBox2"></div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Flower"
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.box {
  &1 {
    position: absolute;
    top: 50vh;
    left: 50vw;
    width: 100px;
    height: 100px;
    background-color: yellow;
    z-index: 0;
  }
  &2 {
    position: absolute;
    top: 50vh;
    right: 50vw;
    width: 100px;
    height: 100px;
    background-color: green;
    z-index: 0;
  }
  &3 {
    position: absolute;
    left: 50vw;
    bottom: 50vh;
    width: 100px;
    height: 100px;
    background-color: blue;
    z-index: 0;
  }
  &4 {
    position: absolute;
    right: 50vw;
    bottom: 50vh;
    width: 100px;
    height: 100px;
    background-color: red;
    z-index: 0;
  }
}


.clearBox {
  &1 {
    position: absolute;
    right: 50vw;
    bottom: 50vh;
    width: 200px;
    height: 200px;
    background-color: white;
    z-index: 1;
    transform-origin: bottom right;
    transform: rotateX(0);
    animation: clear1 4s infinite linear;
  }
  &2 {
    position: absolute;
    top: 50vh;
    left: 50vw;
    width: 200px;
    height: 200px;
    background-color: white;
    z-index: 1;
    transform-origin: top left;
    transform: rotateX(0);
    animation: clear2 4s infinite linear;
  }
}

@keyframes clear1 {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@keyframes clear2 {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
