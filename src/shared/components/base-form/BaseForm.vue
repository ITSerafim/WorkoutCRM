<template>
  <div v-for="(control, idx) of config" :key="idx">
    <component
      :is="controlsMap[control.name]"
      v-model="control.value"
      :label="control.label"
    ></component>
  </div>
</template>

<script setup lang="ts">
import InputFormControl from './controls/InputFormControl.vue';
import TextareaFormControl from './controls/TextareaFormControl.vue';

const controlsMap: { [key: string]: any } = {
  inputText: InputFormControl,
  textareaText: TextareaFormControl,
};

interface BaseFormProps {
  config: any;
}

defineProps<BaseFormProps>();
</script>
