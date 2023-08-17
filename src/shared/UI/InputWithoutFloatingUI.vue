<template>
  <div class="input-container">
    <label class="input-label">{{ label }}</label>
    <input
      class="custom-input"
      placeholder=" "
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, default: 'text' },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.custom-input {
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid #2b2b2e;
  padding: 15px 35px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:focus {
    outline: none;
    border: 2px solid #3596fe;
  }
}

.input-label {
  color: #bbbbbb;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
