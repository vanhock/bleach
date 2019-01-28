<template>
  <div class="auth">
    <form-input
      ref="email"
      name="email"
      placeholder="example@mail.com"
      @onchange="updateEmailValid"
      label="Email:"
    />
    <button class="btn next" :disabled="!emailValid">Продолжить!</button>
  </div>
</template>

<script>
import FormInput from "../components/FormInput";
export default {
  name: "Auth",
  components: { FormInput },
  mounted() {
    this.$nextTick(() => {
      document.getElementById("input-email").focus();
    });
  },
  data: () => ({
    emailValid: false
  }),
  methods: {
    updateEmailValid() {
      this.emailValid = this.$refs.email && this.$refs.email.valid;
    }
  }
};
</script>

<style lang="scss" scoped>
.auth {
  width: 350px;
  margin: 70px auto 0;
  .next {
    margin-top: 30px;
    font-size: 20px;
  }
}
</style>
