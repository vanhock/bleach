<template>
  <div class="form-item-general">
    <div class="label">
      <label :for="`input-${name}`">{{ label }}</label>
    </div>
    <div class="description">{{ description }}</div>
    <div class="input">
      <div class="validation-message" v-if="!valid">
        {{ validationMessage }}
      </div>
      <input
        :class="{ valid: changed && valid, invalid: changed && !valid }"
        size="1"
        v-model="inputValue"
        :type="type"
        :id="`input-${name}`"
        :name="name"
        :placeholder="placeholder"
        @keyup="$emit('onchange')"
        v-bind="$props"
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
  justify-content: center;
  $input-width: 230px;
  .input {
    input {
      resize: horizontal;
      width: $input-width;
      padding: 3px 10px;
      border: 0;
      border-bottom: 2px solid;
      border-bottom-color: $color-b5;
      background-color: transparent;
      font-size: 25px;
      color: #fff;
      &:focus {
        border-bottom-color: $color-w2;
        min-width: $input-width;
      }
      &:active {
        width: auto;
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
    color: #fff;
    margin-right: 5px;
    margin-bottom: -2px;
    font-size: 30px;
  }
}
</style>
