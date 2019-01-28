<template>
  <div class="form-item-general">
    <div class="label">
      <label :for="`input-${name}`">{{ label }}</label>
    </div>
    <div class="input">
      <div class="validation-message" v-if="!valid">
        {{ validationMessage }}
      </div>
      <input
        :class="{ valid: changed && valid, invalid: changed && !valid }"
        v-model="inputValue"
        :type="type"
        :id="`input-${name}`"
        :name="name"
        :placeholder="placeholder"
        @keyup="$emit('onchange')"
        v-bind="$props"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script>
/** Mixins: **/
import InputMixin from "../mixins/InputMixin.vue";
import InputValidationMixin from "../mixins/InputValidationMixin.js";
import InputMaskMixin from "../mixins/InputMaskMixin.js";

export default {
  name: "InputGeneral",
  mixins: [InputMixin, InputValidationMixin, InputMaskMixin],
  data: () => ({
    /** from InputMixin **/
    componentType: "general"
  }),
  props: {
    /** from InputMixin **/
  }
};
</script>

<style lang="scss" scoped>
.form-item-general {
  display: flex;
  align-items: flex-end;
  font-size: 25px;
  @include clearfix();
  .input {
    width: 100%;
    float: left;
    input {
      width: calc(100% - 20px);
      padding: 3px 10px;
      border: 0;
      border-bottom: 2px solid;
      border-bottom-color: $color-b5;
      background-color: transparent;
      color: #fff;
      &:focus {
        border-bottom-color: $color-w2;
      }
      &.valid {
        border-bottom-color: $color-green;
      }
      &.invalid {
        border-bottom-color: $color-w1;
      }
    }
  }
  .label {
    display: flex;
    align-items: flex-end;
    text-align: left;
    color: #fff;
    margin-right: 5px;
    margin-bottom: 3px;
    float: left;
  }
}
</style>
