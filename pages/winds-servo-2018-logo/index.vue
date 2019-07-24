<template>
  <section>
    <div class="container">
      <div class="blue-box1"></div>
      <div class="blue-box2"></div>
      <div class="blue-box3"></div>
      <div class="white-line1"></div>
      <div class="white-line2"></div>
      <div class="white-line3"></div>
      <p class="text">Winds Servo 2018</p>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Winds Servo 2018 Logo"
    }
  }
}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Abel|Jua|Montserrat|Nanum+Gothic|PT+Sans+Narrow|Quicksand");

.container {
  margin: 0 200px;
  height: 100vh;
  position: relative;
}

.blue-box {
  &1 {
    width: 450px;
    height: 300px;
    position: absolute;
    top: 200px;
    left: 100px;
    background-color: #00ABF3;
  }
  &2 {
    width: 0;
    height: 0;
    position: absolute;
    top: 150px;
    left: 100px;
    content: "";
    border-top: 50px transparent solid;
    border-right: 450px #00ABF3 solid;
  }
  &3 {
    width: 0;
    height: 0;
    position: absolute;
    top: 500px;
    left: 100px;
    content: "";
    border-bottom: 50px transparent solid;
    border-right: 450px #00ABF3 solid;
  }
}

.white-line {
  &1 {
    width: 450px;
    height: 15px;
    position: absolute;
    top: 350px;
    left: -33px;
    background-color: white;
    -webkit-transform: rotate(60deg);
    transform: rotate(60deg);
  }
  &2 {
    width: 450px;
    height: 15px;
    position: absolute;
    top: 350px;
    left: 73px;
    background-color: white;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  &3 {
    width: 550px;
    height: 15px;
    position: absolute;
    top: 350px;
    left: 140px;
    background-color: white;
    -webkit-transform: rotate(123deg);
    transform: rotate(123deg);
  }
}

.text {
  position: absolute;
  top: 550px;
  left: -100px;
  color: #00ABF3;
  font-family: 'Quicksand', sans-serif;
  font-size: 100px;
  font-weight: 100;
  white-space: nowrap;
}
</style>
