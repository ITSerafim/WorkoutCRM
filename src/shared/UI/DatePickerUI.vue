<template>
  <span class="datepicker-toggle">
    <font-awesome-icon
      icon="fa-regular fa-calendar-days"
      class="datepicker-toggle-button"
    />
    <input
      class="datepicker-input"
      autocomplete="off"
      type="date"
      :value="modelValue"
      @input="updateValue"
    />
  </span>
</template>

<script setup lang="ts">
defineProps({
  modelValue: { type: Date, required: true },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.datepicker-toggle {
  display: inline-block;
  position: relative;
  border-radius: 8px;
  background: #3596fe;
  color: #fff;
  padding: 20px;
  &:active {
    filter: drop-shadow(0px 4px 24px rgba(53, 150, 254, 0.48));
  }
}
.datepicker-toggle-button {
  width: 24px;
  height: 24px;
}

.datepicker-input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
}
.datepicker-input::-webkit-calendar-picker-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

</style>
