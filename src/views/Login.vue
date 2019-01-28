<template>
  <div class="login">
    <div class="title">Login</div>
    <form-input name="email" :value="f.email" label="Email:" :disabled="true" />
    <form-input name="password" type="password" label="Password:" />
    <button class="btn next">
      Fight!
    </button>
  </div>
</template>

<script>
import FormInput from "../components/FormInput";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  components: { FormInput },
  computed: {
    ...mapGetters({
      f: "currentForm"
    })
  },
  mounted() {
    if (!this.checkEmailFilled()) {
      this.$router.push({ name: "auth" });
    }
  },
  beforeRouteUpdate(from, to, next) {
    if (!this.checkEmailFilled()) {
      next(false);
      this.$router.push({ name: "auth" });
    } else {
      next(true);
    }
  },
  methods: {
    checkEmailFilled() {
      return this.f && Object.entries(this.f).length;
    }
  }
};
</script>

<style lang="scss" scoped></style>
