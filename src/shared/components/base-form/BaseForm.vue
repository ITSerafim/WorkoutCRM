<template>
  <form :class="formStyles">
    <template v-for="formGroup of config" :key="formGroup.id">
      <section :class="formGroup.styles">
        <template v-for="(control, idx) of formGroup.controls" :key="idx">
          <component
            :is="controls[control.control]"
            v-model="control.value"
            :withIcon="control.withIcon"
            :iconName="control.iconName"
            :controlStyles="control.controlStyles"
            :path="control.linkPath"
            :label="control.label"
            @callback="$emit('submit')"
          >
          </component>
        </template>
      </section>
    </template>
  </form>
</template>

<script setup lang="ts">
import { Controls } from '../../types/base-form/Controls';
import { BaseFormProps } from '../../types/base-form/BaseFormProps';
import InputFormControl from './controls/InputFormControl.vue';
import TextareaFormControl from './controls/TextareaFormControl.vue';
import InputWithoutLabelControl from './controls/InputWithoutLabelControl.vue';
import ButtonControl from './controls/ButtonControl.vue';
import DatePickerControl from './controls/DatePickerControl.vue';
import CheckboxControl from './controls/CheckboxControl.vue';
import LinkControl from './controls/LinkControl.vue';

const controls: Controls = {
  inputText: InputFormControl,
  inputWithoutLabel: InputWithoutLabelControl,
  textareaText: TextareaFormControl,
  button: ButtonControl,
  datePicker: DatePickerControl,
  checkbox: CheckboxControl,
  link: LinkControl,
};

defineProps<BaseFormProps>();

defineEmits(['submit']);
</script>
