<template>
  <section>
    <div class="depth">
      <div class="dice">
        <ol class="dice_item">
          <li class="dice_item_number number1">●</li>
          <li class="dice_item_number number2">
            <div class="left-left">●</div>
            <div class="left-center"></div>
            <div class="left-right"></div>
            <div class="center-left"></div>
            <div class="center-center"></div>
            <div class="center-right"></div>
            <div class="right-left"></div>
            <div class="right-center"></div>
            <div class="right-right">●</div>
          </li>
          <li class="dice_item_number number3">
            <div class="left-left">●</div>
            <div class="left-center"></div>
            <div class="left-right"></div>
            <div class="center-left"></div>
            <div class="center-center">●</div>
            <div class="center-right"></div>
            <div class="right-left"></div>
            <div class="right-center"></div>
            <div class="right-right">●</div>
          </li>
          <li class="dice_item_number number4">
            <div class="left-left">●</div>
            <div class="left-center"></div>
            <div class="left-right">●</div>
            <div class="center-left"></div>
            <div class="center-center"></div>
            <div class="center-right"></div>
            <div class="right-left">●</div>
            <div class="right-center"></div>
            <div class="right-right">●</div>
          </li>
          <li class="dice_item_number number5">
            <div class="left-left">●</div>
            <div class="left-center"></div>
            <div class="left-right">●</div>
            <div class="center-left"></div>
            <div class="center-center">●</div>
            <div class="center-right"></div>
            <div class="right-left">●</div>
            <div class="right-center"></div>
            <div class="right-right">●</div>
          </li>
          <li class="dice_item_number number6">
            <div class="left-left">●</div>
            <div class="left-center"></div>
            <div class="left-right">●</div>
            <div class="center-left">●</div>
            <div class="center-center"></div>
            <div class="center-right">●</div>
            <div class="right-left">●</div>
            <div class="right-center"></div>
            <div class="right-right">●</div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Dice"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  background: #111111;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.depth {
  position: absolute;
  top: 50%;
  left: 50%;
  perspective: 400px;
}

.dice {
  transform-style: preserve-3d;
  animation: rotate 10s linear infinite;
  &_item {
    transform: translateY(-75px) translateX(-75px);
    transform-style: preserve-3d;
    &_number {
      position: absolute;
      width: 150px;
      height: 150px;
      background: white;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 1.5rem;
      color: black;
      list-style-type: none;
      flex-wrap: wrap;
      border-radius: 10px;
      border: solid 5px white;
      div {
        width: 33%;
        text-align: center;
      }
    }
  }
}

.number {
  &1 {
    transform: translateZ(75px);
    color: red;
    font-size: 2.5rem;
  }
  &2 {
    transform: translateY(75px) rotateX(270deg);
  }
  &3 {
    transform: translateX(75px) rotateY(90deg);
  }
  &4 {
    transform: translateX(-75px) rotateY(270deg);
  }
  &5 {
    transform: translateY(-75px) rotateX(90deg);
  }
  &6 {
    transform: translateZ(-75px) rotateY(180deg);
  }
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  25% {
    transform: rotateX(0deg) rotateY(360deg);
  }
  50% {
    transform: rotateX(405deg) rotateY(360deg);
  }
  75% {
    transform: rotateX(405deg) rotateY(765deg);
  }
  95% {
    transform: rotateX(720deg) rotateY(765deg);
  }
  100% {
    transform: rotateX(720deg) rotateY(720deg);
  }
}
</style>
