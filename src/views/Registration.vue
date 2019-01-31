<template>
  <div class="registration">
    <div class="title">Registration</div>
    <form-input name="email" :value="f.email" label="Email:" :disabled="true" />
    <form-input name="login" label="Login:" @onchange="updateFormValid" />
    <form-input
      ref="password"
      name="password"
      type="password"
      label="Password:"
      @onchange="updateFormValid"
    />
    <form-input
      name="password-repeat"
      type="password"
      :validation-rule="passwordValidationRule"
      label="Retype password:"
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
  name: "Registration",
  components: { FormInput },
  mixins: [AuthMixin],
  data: () => ({
    passwordValid: null
  }),
  computed: {
    passwordValidationRule() {
      return this.formUpdated && this.$refs.password.inputValue.length
        ? this.$refs.password && this.$refs.password.inputValue + "\\b"
        : "^$|\\s+";
    }
  },
  mounted() {
    this.updateFormValid();
    this.$nextTick(() => {
      document.getElementById("input-login").focus();
    });
  }
};
</script>

<style lang="scss">
.registration {
  .next {
    will-change: transform;
    &:not([disabled]) {
      transform: scale(1.24);
      transition: transform 0.1s linear;
    }
  }
}
</style>
