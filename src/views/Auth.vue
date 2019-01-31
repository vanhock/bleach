<template>
  <div>
    <form-input
      ref="email"
      name="email"
      :value="f.email"
      placeholder="example@mail.com"
      @onchange="updateFormValid"
      label="Email:"
    />
    <button class="btn next" :disabled="formInvalid" @click="nextStep">
      Next!
    </button>
  </div>
</template>

<script>
import FormInput from "../components/FormInput";
import AuthMixin from "../mixins/AuthMixin";
export default {
  name: "Auth",
  components: { FormInput },
  mixins: [AuthMixin],
  mounted() {
    this.$nextTick(() => {
      document.getElementById("input-email").focus();
    });
  },
  methods: {
    nextStep() {
      this.$store
        .dispatch("checkEmail", {
          name: "email",
          value: this.$refs.email.inputValue
        })
        .then(exist => {
          if (exist) {
            this.$router.push({ name: "login" });
          } else {
            this.$router.push({ name: "registration" });
          }
        });
    }
  }
};
</script>

<style lang="scss">
.auth {
  margin: 70px auto 0;
  .form-item-general {
    .label {
      width: auto;
    }
    .input input {
      padding: 3px 10px;
    }
  }
}
</style>
