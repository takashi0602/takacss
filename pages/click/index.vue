<template>
  <section>
    <div class="container">
      <div class="star1"></div>
      <div class="star2"></div>
      <div class="rocket1"></div>
      <div class="rocket2"></div>
      <div class="text">Click</div>
      <div class="click click1"></div>
      <div class="click click2"></div>
      <div class="click click3"></div>
      <div class="click click4"></div>
      <div class="click click5">●</div>
      <div class="click click6"></div>
      <div class="click click7"></div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Click"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background-color: #e74c3c;
  animation: bg-color 10s infinite;
  overflow: hidden;
}

@keyframes bg-color {
  0% { background-color: #e74c3c; }
  20% { background-color: #f1c40f; }
  40% { background-color: #1abc9c; }
  60% { background-color: #3498db; }
  80% { background-color: #9b59b6; }
  100% { background-color: #e74c3c; }
}

.container {
  position: relative;
}

.star {
  &1 {
    background:url("../../assets/images/click/star.png") no-repeat center center;
    position:absolute;
    top:0;
    left:0;
    width:200px;
    height:200px;
    animation:spin1 3s linear infinite;
  }
  &2 {
    background:url("../../assets/images/click/star.png") no-repeat center center;
    position:absolute;
    top:0;
    right:0;
    width:200px;
    height:200px;
    animation:spin2 3s linear infinite;
  }
}

.rocket {
  &1{
    background:url("../../assets/images/click/rocket1.png") no-repeat 150px center;
    position:absolute;
    top:0;
    left:0;
    width:200px;
    height:200px;
    padding-top:150px;
    animation:spin2 3s linear infinite;
  }
  &2{
    background:url("../../assets/images/click/rocket2.png") no-repeat 150px center;
    position:absolute;
    top:0;
    right:0;
    width:200px;
    height:200px;
    animation:spin1 3s linear infinite;
  }
}

@keyframes spin1 {
  from {
    transform:rotate(0deg);
  }
  to {
    transform:rotate(360deg);
  }
}

@keyframes spin2 {
  from {
    transform:rotate(360deg);
  }
  to {
    transform:rotate(0deg);
  }
}

.text {
  text-align: center;
  font-size: 45px;
}

.click {
  width: 100px;
  height: 100px;
  line-height: 100px;
  margin: 30px auto;
  border-radius: 50%;
  transition: all 0.2s;
  cursor: pointer;
  color: #fff;
  &1 {
    background: red;
    &:active {
      background: pink;
    }
  }
  &2 {
    background: green;
    &:active {
      width: 150px;
      height: 150px;
    }
  }
  &3 {
    background: blue;
    &:active {
      width: 50px;
      height: 50px;
    }
  }
  &4 {
    background: yellow;
    &:active {
      box-shadow: 0 0 0 10px white, 0 0 0 20px yellow;
    }
  }
  &5 {
    background: purple;
    &:active {
      transform: rotateZ(360deg);
    }
  }
  &6 {
    background: brown;
    &:active {
      transform: rotateX(360deg);
    }
  }
  &7 {
    background: gray;
    margin-bottom: 0;
    &:active {
      transform: rotateY(360deg);
    }
  }
}
</style>
