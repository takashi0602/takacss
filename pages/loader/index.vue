<template>
  <section>
    <div class="loadWrapper">
      <div class="load-anime" :class="'load-anime' + index"  v-for="index in 9" :key="index"></div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Loader"
    }
  }
}
</script>

<style lang="scss" scoped>
.loadWrapper {
  max-width: 90px;
  height: 90px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.load-anime {
  width: 25px;
  height: 25px;
  background: green;
  opacity: 0;
  animation: load-anime 0.8s infinite;
}

@keyframes load-anime {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.load-anime {
  &1 {
    animation-delay: 0s;
  }
  &2 {
    animation-delay: 0.1s;
  }
  &3 {
    animation-delay: 0.2s;
  }
  &4 {
    animation-delay: 0.7s;
  }
  &5 {
    visibility: hidden;
  }
  &6 {
    animation-delay: 0.3s;
  }
  &7 {
    animation-delay: 0.6s;
  }
  &8 {
    animation-delay: 0.5s;
  }
  &9 {
    animation-delay: 0.4s;
  }
}
</style>
