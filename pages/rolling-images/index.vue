<template>
  <section>
    <div class="container">
      <img src="@/assets/images/rolling-images/melon.png" alt="メロン" class="melon">
      <img src="@/assets/images/rolling-images/watermelon.png" alt="スイカ" class="watermelon">
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Rolling Images"
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  padding-top: 100px;
}

.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  left: 50%;
  transform: translate(-50%);
}

.melon, .watermelon {
  width: 200px;
  position: absolute;
  top: 0;
  border-radius: 50%;
}

.melon {
  transform: scale(1) rotate(0);
  animation: melon infinite 5s;
}

.watermelon {
  transform: scale(0) rotate(180deg);
  animation: watermelon infinite 5s;
}

@keyframes melon {
  0% {
    transform: scale(1) rotate(0);
  }
  25% {
    transform: scale(0) rotate(180deg);
  }
  75% {
    transform: scale(0) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

@keyframes watermelon {
  0% {
    transform: scale(0) rotate(180deg);
  }
  25% {
    transform: scale(0) rotate(180deg);
  }
  50% {
    transform: scale(1) rotate(0);
  }
  75% {
    transform: scale(0) rotate(180deg);
  }
  100% {
    transform: scale(0) rotate(180deg);
  }
}
</style>
