<template>
  <form class="workout-form">
    <BaseForm :config="config" @submit="$emit('create', getValues())" />
  </form>
</template>

<script setup lang="ts">
import BaseForm from '../../../shared/components/base-form/BaseForm.vue';
import { FormGroup } from '../../../shared/types/base-form/FormGroup';
import { generateId } from '../../../shared/utils/generateId';

defineEmits(['create']);

const config: FormGroup[] = [
  {
    id: generateId(),
    styles: 'flex flex-col gap-20',
    controls: [
      {
        control: 'inputText',
        name: 'name',
        label: 'Название типа',
        value: '',
      },
      {
        control: 'textareaText',
        name: 'description',
        label: 'Описание типа',
        value: '',
      },
    ],
  },
  {
    id: generateId(),
    styles: 'flex ai-center jc-space',
    controls: [
      {
        control: 'button',
        name: 'submit',
        label: 'Добавить тип',
      },
    ],
  },
];

function getValues() {
  const values: any = {};
  config.forEach((fg) =>
    fg.controls.forEach((control) => {
      if (control.value) {
        values[control.name] = control.value;
      }
    }),
  );

  return values;
}
</script>
