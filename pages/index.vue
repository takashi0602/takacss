<template>
  <div class="container">
    <h1 class="title">TAKACSS</h1>
    <p>TAKACSSはCSSアニメーションが好きな私がこれまで作成したCSSアニメーションなどを紹介するサイトです。</p>
    <ul>
      <li>
        <router-link to="/click">Click</router-link>
      </li>
      <li>
        <router-link to="/sky">Sky</router-link>
      </li>
      <li>
        <router-link to="/dice">Dice</router-link>
      </li>
      <li>
        <router-link to="/loader">Loader</router-link>
      </li>
      <li>
        <router-link to="/clock">Clock</router-link>
      </li>
      <li>
        <router-link to="/winds-servo-2018-logo">Winds Servo 2018 Logo</router-link>
      </li>
      <li>
        <router-link to="/concert">Concert</router-link>
      </li>
      <li>
        <router-link to="/flower">Flower</router-link>
      </li>
      <li>
        <router-link to="/frontend-conference-2018-logo">FRONTEND CONFERENCE 2018 LOGO</router-link>
      </li>
      <li>
        <router-link to="/new-year-card">New Year Card</router-link>
      </li>
      <li>
        <router-link to="sound-game">Sound Game ~ KAERU NO UTA ~</router-link>
      </li>
      <li>
        <router-link to="/rolling-images">Rolling Images</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
}
</style>
