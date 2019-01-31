<template>
  <div class="login">
    <div class="title">Login</div>
    <form-input name="email" :value="f.email" label="Email:" :disabled="true" />
    <form-input
      name="password"
      type="password"
      label="Password:"
      @onchange="updateFormValid"
    />
    <button class="btn next" :disabled="formInvalid">
      Fight!
    </button>
  </div>
</template>

<script>
import FormInput from "../components/FormInput";
import AuthMixin from "../mixins/AuthMixin.js";
export default {
  name: "Login",
  components: { FormInput },
  mixins: [AuthMixin],
  mounted() {
    this.$nextTick(() => {
      document.getElementById("input-password").focus();
    });
  }
};
</script>

<style lang="scss" scoped></style>
