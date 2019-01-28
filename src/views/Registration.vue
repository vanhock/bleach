<template>
  <div class="registration">
    <div class="title">Registration</div>
    <form-input name="email" :value="f.email" label="Email:" :disabled="true" />
    <form-input name="password" type="password" label="Password:" />
    <form-input name="password-repeat" type="password" label="Retype password:" />
  </div>
</template>

<script>
import FormInput from "../components/FormInput";
import { mapGetters } from "vuex";
export default {
  name: "Registration",
  components: { FormInput },
  computed: {
    ...mapGetters({
      f: "currentForm"
    })
  }
};
</script>

<style scoped></style>
