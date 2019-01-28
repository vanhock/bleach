<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Philosopher:700&subset=cyrillic");
@import "./assets/normalize.scss";
@import "./assets/base.scss";
body {
  background-color: #000;
  color: #fff;
  letter-spacing: 1px;
}
#app {
  font-family: "Philosopher", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  display: block;
  margin: 0 auto;
  pointer-events: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
