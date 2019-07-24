<template>
  <section>
    <div class="p-clock">
      <div class="p-clock_container">
        <div class="p-clock_circle1">
          <div class="p-clock_number n1">1</div>
          <div class="p-clock_number n2">2</div>
          <div class="p-clock_number n3">3</div>
          <div class="p-clock_number n4">4</div>
          <div class="p-clock_number n5">5</div>
          <div class="p-clock_number n6">6</div>
          <div class="p-clock_number n7">7</div>
          <div class="p-clock_number n8">8</div>
          <div class="p-clock_number n9">9</div>
          <div class="p-clock_number n10">10</div>
          <div class="p-clock_number n11">11</div>
          <div class="p-clock_number n12">12</div>
          <div class="p-clock_secondHand"></div>
          <div class="p-clock_minuteHand"></div>
          <div class="p-clock_hourHand"></div>
          <div class="p-clock_circle2"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Clock"
    }
  }
}
</script>

<style lang="scss" scoped>
.p-clock {
  font-weight: bold;
  font-size: 20px;
  background-color: #fafad2;
  width: 100vw;
  &_container {
    margin: 0 auto;
    width: 100%;
    height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    @media (min-width: 768px) {
      max-width: 768px;
    }
  }
  &_circle1 {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 20px solid #9acd32;
  }
  &_number {
    position: absolute;
  }
  .n1 {
    top: 20px;
    right: 70px;
  }
  .n2 {
    top: 70px;
    right: 25px;
  }
  .n3 {
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
  .n4 {
    bottom: 70px;
    right: 25px;
  }
  .n5 {
    bottom: 20px;
    right: 70px;
  }
  .n6 {
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
  .n7 {
    bottom: 20px;
    left: 70px;
  }
  .n8 {
    bottom: 70px;
    left: 25px;
  }
  .n9 {
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
  .n10 {
    top: 70px;
    left: 25px;
  }
  .n11 {
    top: 20px;
    left: 70px;
  }
  .n12 {
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
  }
  &_secondHand {
    position: absolute;
    width: 50%;
    height: 5px;
    background-color: #f00;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(270deg);
    animation: rotate 60s linear infinite;
  }
  &_minuteHand {
    position: absolute;
    width: 40%;
    height: 5px;
    background-color: #000;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(270deg);
    animation: rotate 3600s linear infinite;
  }
  &_hourHand {
    position: absolute;
    width: 25%;
    height: 5px;
    background-color: #000;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
    transform: rotate(270deg);
    animation: rotate 86400s linear infinite;
  }
  &_circle2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 3px solid #000;
    background-color: #f00;
  }
}

@keyframes rotate {
  form {
    transform: rotate(270deg);
  }
  to {
    transform: rotate(630deg);
  }
}
</style>
