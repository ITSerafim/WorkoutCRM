<template>
  <form>
    <BaseForm :config="config" @submit="$emit('create', getValues())" />
  </form>
</template>

<script setup lang="ts">
import BaseForm from '../../../shared/components/base-form/BaseForm.vue';
import { FormGroup } from '../../../shared/types/base-form/FormGroup';

defineEmits(['create']);

const config: FormGroup[] = [
  {
    id: 1,
    styles: 'flex flex-col gap-20',
    controls: [
      {
        control: 'inputText',
        name: 'name',
        label: 'Название упражнения',
        value: '',
      },
      {
        control: 'textareaText',
        name: 'description',
        label: 'Описание упражнения',
        value: '',
      },
    ],
  },
  {
    id: 2,
    styles: 'workout-form__grid',
    controls: [
      {
        control: 'inputWithoutLabel',
        name: 'repeatsCount',
        label: 'Кол-во повтореений',
        value: 0,
      },
      {
        control: 'inputWithoutLabel',
        name: 'setsCount',
        label: 'Кол-во подходов',
        value: 0,
      },
      {
        control: 'inputWithoutLabel',
        name: 'repeatTimeout',
        label: 'Время отдыха между повторениями',
        value: 0,
      },
      {
        control: 'inputWithoutLabel',
        name: 'setTimeout',
        label: 'Время отдыха между подходами',
        value: 0,
      },
    ],
  },
  {
    id: 3,
    styles: 'flex ai-center jc-space',
    controls: [
      {
        control: 'datePicker',
        name: 'dateExercise',
        label: '',
        value: new Date(),
      },
      {
        control: 'button',
        name: 'submit',
        label: 'Добавить упражнение',
      },
    ],
  },
];

function getValues() {
  const values: any = { key: 'exerciseCreate' };
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
