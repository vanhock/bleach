<template>
  <div class="home" :class="$route.name">
    <router-link
      tag="img"
      :to="{ name: 'auth' }"
      src="./img/logo.png"
      class="logo"
      exact
    />
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
    will-change: width;
    margin-top: 70px;
    transition: width 0.1s linear;
    @media (max-width: 480px) {
      width: 90%;
    }
  }
  &:not(.auth) {
    .logo {
      margin-top: 40px;
      max-width: 300px;
    }
  }
  .auth-form {
    width: 400px;
    position: relative;
    @media (max-width: 480px) {
      width: 325px;
    }
    &:not(.auth) {
      margin: 50px auto 40px;
      border-radius: 5px;
      border: 2px solid $color-b3;
      padding: 70px 5% 40px;
      @media (max-width: 480px) {
        padding: 50px 14px 40px;
      }
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
      @media (max-width: 480px) {
        margin-top: -73px;
      }
    }
    .form-item-general {
      &:not(:last-child) {
        margin-bottom: 15px;
      }
      @media (max-width: 480px) {
        font-size: 19px;
      }
    }
    .btn {
      margin-top: 30px;
      font-size: 20px;
    }
  }
}
</style>
