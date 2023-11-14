<template>
  <div class="checkbox">
    <input
      id="checkbox"
      class="checkbox-control"
      type="checkbox"
      :value="modelValue"
      @input="updateValue"
    />
    <label for="checkbox" class="label">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { CheckboxProps } from '../types/props/CheckboxProps';

defineProps<CheckboxProps>();

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.checkbox {
  display: flex;
}

.label {
  color: #bbb;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.checkbox-control {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.checkbox-control + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
}
.checkbox-control + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 4px;
  border: 2px solid #2b2b2e;
  background-color: transparent;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.checkbox-control:checked + label::before {
  border-color: #2b2b2e;
  background-color: #2b2b2e;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

.checkbox-control:not(:disabled):not(:checked) + label:hover::before {
  border-color: #59595e;
}
.checkbox-control:not(:disabled):active + label::before {
  background-color: #59595e;
  border-color: #2b2b2e;
}
.checkbox-control:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgb(89, 89, 94, 0.25);
}
.checkbox-control:focus:not(:checked) + label::before {
  border-color: #2b2b2e;
}
.checkbox-control:disabled + label::before {
  background-color: #e9ecef;
}
</style>
