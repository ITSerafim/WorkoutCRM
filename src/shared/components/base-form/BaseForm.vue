<template>
  <div v-for="(control, idx) of config" :key="idx">
    <component
      :is="controls[control.control]"
      v-model="control.value"
      :label="control.label"
      @callback="$emit('submit')"
    ></component>
  </div>
</template>

<script setup lang="ts">
import InputFormControl from './controls/InputFormControl.vue';
import TextareaFormControl from './controls/TextareaFormControl.vue';
import InputWithoutLabelControl from './controls/InputWithoutLabelControl.vue';
import ButtonControl from './controls/ButtonControl.vue';
import DatePickerControl from './controls/DatePickerControl.vue';
import { Controls } from '../../types/base-form/Controls';
import { BaseFormProps } from '../../types/base-form/BaseFormProps';

const controls: Controls = {
  inputText: InputFormControl,
  inputWithoutLabel: InputWithoutLabelControl,
  textareaText: TextareaFormControl,
  button: ButtonControl,
  datePicker: DatePickerControl,
};

defineProps<BaseFormProps>();

defineEmits(['submit']);
</script>
