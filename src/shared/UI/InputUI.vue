<template>
  <div class="float-label">
    <input
      class="custom-input"
      placeholder=" "
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
    <label class="floating">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: { type: String, required: true },
  label: String,
  type: { type: String, default: 'text' },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>



<style lang="scss" scoped>
.float-label {
  position: relative;
}

.custom-input {
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid #2b2b2e;
  padding: 30px 25px;
  font-size: 12px;
  display: block;
  width: 100%;
  height: 36px;
  box-sizing: border-box;
  color: #bbbbbb;
  &:focus {
    outline: none;
    border: 2px solid #3596fe;
    ~ .floating {
      color: #3596fe;
      top: -8px;
      font-size: 16px;
      background: #1d1d1e;
    }
  }
}

.floating {
  color: #bbbbbb;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  pointer-events: none;
  left: 15px;
  top: 25px;
  padding: 0 5px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.custom-input:not(:placeholder-shown) ~ .floating {
  top: -5px;
}
</style>