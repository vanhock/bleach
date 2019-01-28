<template>
  <div class="home" :class="$route.name">
    <img src="/img/logo.png" class="logo" />
    <router-view class="auth-form" :class="$route.name" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
.home {
  .logo {
    margin-top: 70px;
    @media (max-width: 480px) {
      width: 90%;
    }
  }
  &:not(.auth) {
    .logo {
      max-width: 350px;
    }
  }
  .auth-form {
    width: 400px;
    position: relative;
    &:not(.auth) {
      margin: 70px auto 0;
      border-radius: 5px;
      border: 2px solid $color-b3;
      padding: 70px 5% 40px;
    }
    .title {
      margin-top: -93px;
      position: absolute;
      @include galign();
      font-size: 35px;
      text-align: center;
      color: #fff;
      background-color: #000;
      padding: 0 20px;
    }
    .form-item-general {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
    .btn {
      margin-top: 30px;
      font-size: 20px;
    }
  }
}

</style>
