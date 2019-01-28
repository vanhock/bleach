<template>
  <div class="home">
    <img src="/img/logo.png" class="logo" />
    <auth />
  </div>
</template>

<script>
import Auth from "../components/Auth";
export default {
  name: "Home",
  components: { Auth }
};
</script>

<style lang="scss" scoped>
.logo {
  margin-top: 70px;
  pointer-events: none;
  @media (max-width: 480px) {
    width: 90%;
  }
}
</style>
