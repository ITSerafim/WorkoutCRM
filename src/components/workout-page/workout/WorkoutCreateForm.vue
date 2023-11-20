<template>
  <BaseForm
    form-styles="flex flex-col gap-25"
    :config="config"
    @submit="$emit('create', getWorkoutValues())"
  />
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
        label: 'Название тренировки',
        value: '',
      },
      {
        control: 'textareaText',
        name: 'description',
        label: 'Описание тренировки',
        value: '',
      },
    ],
  },
  {
    id: 2,
    styles: 'adaptive-grid grid col-3 rows-auto gap-25',
    controls: [
      {
        control: 'inputWithoutLabel',
        name: 'cyclesCount',
        label: 'Кол-во кругов',
        value: 0,
      },
      {
        control: 'inputWithoutLabel',
        name: 'cyclesCountTimeout',
        label: 'Время отдыха между кругами',
        value: 0,
      },
      {
        control: 'inputWithoutLabel',
        name: 'exerciseTimeout',
        label: 'Время отдыха между упражнениями',
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
        name: 'dateWorkout',
        label: '',
        value: new Date(),
      },
      {
        control: 'button',
        name: 'submit',
        label: 'Создать тренировку',
      },
    ],
  },
];

function getWorkoutValues() {
  const values: any = { key: 'workoutCreate' };
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
