<template>
  <div class="input-container">
    <label class="input-label">{{ label }}</label>
    <img
      v-if="icon"
      :src="`/src/assets/icons/${icon}.svg`"
      alt="icon"
      class="input-icon"
    />
    <input
      :class="'custom-input ' + styles"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: { type: [String, Number], required: true },
  label: { type: String },
  styles: { type: String },
  type: { type: String, default: 'text' },
  placeholder: { type: String },
  icon: { type: String },
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
  position: relative;
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

.input-icon {
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 8px;
}

.input-label {
  color: #bbbbbb;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
