<template>
  <div class="radio-button">
    <input
      :id="name"
      class="radio"
      type="radio"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
    />
    <label class="radio-label" :for="name">{{ label }}</label>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { RadioButtonProps } from '../types/props/RadioButtonProps';

const props = withDefaults(defineProps<RadioButtonProps>(), {
  value: undefined,
  modelValue: '',
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};

const isChecked = computed(() => {
  return props.modelValue === props.value;
});
</script>
<style lang="scss" scoped>
.radio-label {
  color: #bbb;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.radio {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.radio + label {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  padding: 20px 50px;
  border-radius: 8px;
  border: 2px solid #2b2b2e;
}

.radio + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #fff;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.radio:checked + label {
  color: #fff;
  background-color: #3596fe;
}

.radio:checked + label::before {
  border-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>
