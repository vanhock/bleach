import { mapGetters } from "vuex";
export default {
  mounted() {
    if (!this.checkEmailFilled()) {
      this.$router.push({ name: "auth" });
    }
    this.updateFormValid();
  },
  data: () => ({
    formInvalid: false,
    formUpdated: 0
  }),
  computed: {
    ...mapGetters({
      f: "currentForm"
    })
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
    },
    updateFormValid() {
      if (!this.$children.length) {
        return;
      }
      this.formUpdated++;
      this.formInvalid = this.$children.some(child => {
        return child.componentType === "general" && !child.valid;
      });
    }
  }
};
