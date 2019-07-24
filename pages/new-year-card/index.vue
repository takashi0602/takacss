<template>
  <section>
    <div class="card">
      <h1 class="card-title">謹賀新年</h1>
      <div class="card-seal">亥</div>
      <div class="card-boar">
        <div class="card-boar-horn horn-left"></div>
        <div class="card-boar-horn horn-right"></div>
        <div class="card-boar-face"></div>
        <div class="card-boar-mark mark-left"></div>
        <div class="card-boar-mark mark-center"></div>
        <div class="card-boar-mark mark-right"></div>
        <div class="card-boar-eye eye-left"></div>
        <div class="card-boar-eye eye-right"></div>
        <div class="card-boar-nose"></div>
        <div class="card-boar-hole hole-left"></div>
        <div class="card-boar-hole hole-right"></div>
        <div class="card-boar-fang fang-left"></div>
        <div class="card-boar-fang fang-right"></div>
        <div class="card-boar-mouth"></div>
      </div>
      <div class="card-boar-child">
        <div class="card-boar-horn horn-left"></div>
        <div class="card-boar-horn horn-right"></div>
        <div class="card-boar-face"></div>
        <div class="card-boar-mark mark-left"></div>
        <div class="card-boar-mark mark-center"></div>
        <div class="card-boar-mark mark-right"></div>
        <div class="card-boar-eye eye-left"></div>
        <div class="card-boar-eye eye-right"></div>
        <div class="card-boar-nose"></div>
        <div class="card-boar-hole hole-left"></div>
        <div class="card-boar-hole hole-right"></div>
        <div class="card-boar-fang fang-left"></div>
        <div class="card-boar-fang fang-right"></div>
        <div class="card-boar-mouth"></div>
      </div>
      <div class="card-flower-1">
        <div class="card-flower-petal petal-1"></div>
        <div class="card-flower-petal petal-2"></div>
        <div class="card-flower-petal petal-3"></div>
        <div class="card-flower-petal petal-4"></div>
        <div class="card-flower-petal petal-5"></div>
        <div class="card-flower-pollen pollen-1"></div>
        <div class="card-flower-pollen pollen-2"></div>
        <div class="card-flower-pollen pollen-3"></div>
        <div class="card-flower-pollen pollen-4"></div>
        <div class="card-flower-pollen pollen-5"></div>
      </div>
      <div class="card-flower-2">
        <div class="card-flower-petal petal-1"></div>
        <div class="card-flower-petal petal-2"></div>
        <div class="card-flower-petal petal-3"></div>
        <div class="card-flower-petal petal-4"></div>
        <div class="card-flower-petal petal-5"></div>
        <div class="card-flower-pollen pollen-1"></div>
        <div class="card-flower-pollen pollen-2"></div>
        <div class="card-flower-pollen pollen-3"></div>
        <div class="card-flower-pollen pollen-4"></div>
        <div class="card-flower-pollen pollen-5"></div>
      </div>
      <div class="card-flower-3">
        <div class="card-flower-petal petal-1"></div>
        <div class="card-flower-petal petal-2"></div>
        <div class="card-flower-petal petal-3"></div>
        <div class="card-flower-petal petal-4"></div>
        <div class="card-flower-petal petal-5"></div>
        <div class="card-flower-pollen pollen-1"></div>
        <div class="card-flower-pollen pollen-2"></div>
        <div class="card-flower-pollen pollen-3"></div>
        <div class="card-flower-pollen pollen-4"></div>
        <div class="card-flower-pollen pollen-5"></div>
      </div>
      <div class="card-hill hill-1">
        <div class="card-hill-star star-1"></div>
        <div class="card-hill-star star-2"></div>
        <div class="card-hill-star star-3"></div>
      </div>
      <div class="card-hill hill-2">
        <div class="card-hill-circle-1">
          <div class="hill-circle circle-1"></div>
          <div class="hill-circle circle-2"></div>
          <div class="hill-circle circle-3"></div>
          <div class="hill-circle circle-4"></div>
          <div class="hill-circle circle-5"></div>
        </div>
        <div class="card-hill-circle-2">
          <div class="hill-circle circle-1"></div>
          <div class="hill-circle circle-2"></div>
          <div class="hill-circle circle-3"></div>
          <div class="hill-circle circle-4"></div>
          <div class="hill-circle circle-5"></div>
        </div>
        <div class="card-hill-circle-3">
          <div class="hill-circle circle-1"></div>
          <div class="hill-circle circle-2"></div>
          <div class="hill-circle circle-3"></div>
          <div class="hill-circle circle-4"></div>
          <div class="hill-circle circle-5"></div>
        </div>
        <div class="card-hill-circle-4">
          <div class="hill-circle circle-1"></div>
          <div class="hill-circle circle-2"></div>
          <div class="hill-circle circle-3"></div>
          <div class="hill-circle circle-4"></div>
          <div class="hill-circle circle-5"></div>
        </div>
        <div class="card-hill-circle-5">
          <div class="hill-circle circle-1"></div>
          <div class="hill-circle circle-2"></div>
          <div class="hill-circle circle-3"></div>
          <div class="hill-circle circle-4"></div>
          <div class="hill-circle circle-5"></div>
        </div>
      </div>
      <div class="card-hill hill-3">
        <div class="card-hill-border-1">
          <div class="border-1"></div>
          <div class="border-2"></div>
        </div>
        <div class="card-hill-border-2">
          <div class="border-1"></div>
          <div class="border-2"></div>
        </div>
        <div class="card-hill-border-3">
          <div class="border-1"></div>
          <div class="border-2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "New Year Card"
    }
  }
}
</script>

<style lang="scss" scoped>
/* 年賀状 */
.card {
  width: 394px;
  height: 583px;
  border: 1px solid black;
  position: relative;
  background: linear-gradient(45deg, #fdee83, #fefcea);
  /* タイトル */
  &-title {
    margin: 0;
    position: absolute;
    top: 30px;
    right: 30px;
    font-size: 60px;
    letter-spacing: 20px;
    font-family: "HGP行書体", serif;
    writing-mode: vertical-rl;
  }
  /* 印 */
  &-seal {
    width: 40px;
    height: 40px;
    position: absolute;
    bottom: 250px;
    right: 130px;
    text-align: center;
    font-size: 30px;
    font-family: "HGP行書体", serif;
    color: red;
    border: 3px solid red;
    border-radius: 10px
  }
  /* 親イノシシ */
  &-boar {
    position: relative;
    top: 50px;
    left: 50px;
    transform: rotate(-10deg); /* 追加 */
  }
  /* 子イノシシ */
  &-boar-child {
    position: relative;
    top: 180px;
    left: 120px;
    transform: rotate(10deg) scale(.7);
  }
  /* 顔 */
  &-boar-face {
    position: absolute;
    width: 120px;
    height: 100px;
    background: #CD8D53;
    border-radius: 50%;
    border: 3px solid #222;
  }
  /* 角 */
  &-boar-horn {
    position: absolute;
    width: 30px;
    height: 80px;
    background: #CD8D53;
    border-radius: 50%;
    border: 3px solid #222;
  }
  /* 模様 */
  &-boar-mark {
    position: absolute;
    width: 5px;
    height: 20px;
    background: #845435;
    border: 3px solid #222;
  }
  /* 目 */
  &-boar-eye {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #222;
    border-radius: 50%;
  }
  /* 鼻 */
  &-boar-nose {
    position: absolute;
    top: 40px;
    left: 37.5px;
    width: 50px;
    height: 30px;
    background: #F7DFB3;
    border-radius: 50%;
  }
  /* 鼻の穴 */
  &-boar-hole {
    position: absolute;
    width: 5px;
    height: 15px;
    background: #222;
    border-radius: 50%;
  }
  /* 牙 */
  &-boar-fang {
    position: absolute;
    width: 10px;
    height: 15px;
    background: #fff;
    border: 3px solid #222;
    border-radius: 50% 50% 25% 25%;
  }
  /* 口 */
  &-boar-mouth {
    position: absolute;
    top: 70px;
    left: 47px;
    width: 26px;
    height: 13px;
    background: transparent;
    border: 3px solid transparent;
    border-bottom: 3px solid #222;
    border-radius: 0 0 26px 26px;
  }
  /* 花 */
  &-flower-1 {
    position: relative;
    top: 200px;
    left: 70px;
    transform: rotate(-10deg); /* 追加 */
  }
  &-flower-2 {
    position: relative;
    top: 50px;
    left: 160px;
    transform: rotate(10deg) scale(.7);
  }
  &-flower-3 {
    position: relative;
    top: 330px;
    left: 200px;
    transform: rotate(10deg) scale(1.2);
  }
  /* 花びら */
  &-flower-petal {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: linear-gradient(#DF4554, #E16561);
  }
  /* 花粉 */
  &-flower-pollen {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fdee83;
  }
  /* 丘 */
  &-hill{
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    /* 模様~星~ */
    &-star {
      position: relative;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 14px solid #D9AF64;
      &::before, &::after {
        position: absolute;
        content: '';
        top: 0;
        left: -20px;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 14px solid #D9AF64;
      }
      &::before {
        transform: rotate(71deg);
      }
      &::after {
        transform: rotate(-71deg);
      }
    }
  }
  /* 模様~円~ */
  &-hill-circle {
    &-1 {
      position: relative;
    }
    &-2 {
      position: relative;
      top: 26px;
    }
    &-3 {
      position: relative;
      top: 62px;
    }
    &-4 {
      position: relative;
      top: 88px;
    }
    &-5 {
      position: relative;
      top: 114px;
    }
  }
  /* 模様~線~ */
  &-hill-border{
    &-1 {
      position: relative;
      left: -30px;
      top: 200px;
    }
    &-2 {
      position: relative;
      left: 80px;
      top: 180px;
      transform: rotate(10deg);
    }
    &-3 {
      position: relative;
      left: 10px;
      top: 110px;
      transform: rotate(-15deg);
    }
  }
}

/* 左角 */
.horn-left {
  top: -10px;
  left: 10px;
  transform: rotate(-30deg);
}
/* 右角 */
.horn-right {
  top: -10px;
  left: 80px;
  transform: rotate(30deg);
}

/* 左模様 */
.mark-left {
  top: 5px;
  left: 35px;
  border-radius: 25% 0 50% 50%;
}
/* 中央模様 */
.mark-center {
  top: 1px;
  left: 57.5px;
  border-radius: 5% 5% 50% 50%;
}
/* 右模様 */
.mark-right {
  top: 5px;
  left: 80px;
  border-radius: 0 25% 50% 50%;
}

 /* 左目 */
.eye-left {
  top: 40px;
  left: 25px;
}
/* 右目 */
.eye-right {
  top: 40px;
  left: 90px;
}

/* 左鼻の穴 */
.hole-left {
  top: 47.5px;
  left: 50px;
}
/* 右鼻の穴 */
.hole-right {
  top: 47.5px;
  left: 70px;
}

/* 左牙 */
.fang-left {
  top: 60px;
  left: 25px;
  transform: rotate(-40deg);
}
/* 右牙 */
.fang-right {
  top: 60px;
  left: 85px;
  transform: rotate(40deg);
}

.petal{
  &-1 {
    top: 0;
    left: 0;
  }
  &-2 {
    top: 10px;
    left: 15px;
  }
  &-3 {
    top: 25px;
    left: 10px;
  }
  &-4 {
    top: 25px;
    left: -10px;
  }
  &-5 {
    top: 10px;
    left: -15px;
  }
}

.pollen{
  &-1 {
    top: 18px;
    left: 12px;
  }
  &-2 {
    top: 22px;
    left: 18px;
  }
  &-3 {
    top: 29px;
    left: 16px;
  }
  &-4 {
    top: 29px;
    left: 8px;
  }
  &-5 {
    top: 22px;
    left: 6px;
  }
}

.hill{
  /* 左丘 */
  &-1 {
    width: 250px;
    height: 250px;
    background: #fff;
    box-sizing: border-box;
    border-top: 10px solid #D9AF64;
    border-right: 10px solid #D9AF64;
    border-radius: 0 250px 0 0;
  }
  /* 右丘 */
  &-2 {
    right: 0;
    width: 250px;
    height: 250px;
    background: #ffc966;
    border-top: 10px solid #D9AF64;
    border-left: 10px solid #D9AF64;
    border-radius: 250px 0 0 0;
  }
  /* 中央丘 */
  &-3 {
    width: 394px;
    height: 197px;
    background: #D7000F;
    border-top: 10px solid #D9AF64;
    border-left: 10px solid #D9AF64;
    border-right: 10px solid #D9AF64;
    border-radius: 394px 394px 0 0;
  }
}

.star {
  &-1 {
    top: 20px;
    left: 5px;
  }
  &-2 {
    top: 75px;
    left: 15px;
  }
  &-3 {
    top: 10px;
    left: 60px;
  }
}

.hill-circle {
  position: absolute;
  width: 50px;
  height: 50px;
  background: transparent;
  border: 2px solid #D9AF64;
  border-radius: 50%;
}

.circle{
  &-1 {
    top: 45px;
    left: 117px;
  }
  &-2 {
    top: 35px;
    left: 138px;
  }
  &-3 {
    top: 25px;
    left: 165px;
  }
  &-4 {
    top: 15px;
    left: 186px;
  }
  &-5 {
    top: 5px;
    left: 213px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    transform: rotate(45deg);
  }
}

.border{
  &-1 {
    position: absolute;
    bottom: 0;
    left: 150px;
    width: 100px;
    height: 70px;
    border-radius: 50%;
    background: transparent;
    border-top: 5px solid #D9AF64;
    transform: rotate(5deg);
  }
  &-2 {
    position: absolute;
    bottom: 10px;
    left: 80px;
    width: 100px;
    height: 70px;
    border-radius: 50%;
    background: transparent;
    border-top: 5px solid #D9AF64;
    transform: rotate(20deg);
  }
}
</style>
