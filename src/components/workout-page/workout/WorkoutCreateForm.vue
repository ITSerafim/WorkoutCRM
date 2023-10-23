<template>
  <form class="workout-form">
    <BaseForm :config="config" @submit="() => console.log('test')" />
  </form>
  <!-- $emit('create', { ...workout, dateWorkout }) -->
</template>

<script setup lang="ts">
import BaseForm from '../../../shared/components/base-form/BaseForm.vue';
import { Config } from '../../../shared/types/base-form/Config';

const config: Config<unknown>[] = [
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
  {
    control: 'button',
    name: 'submit',
    label: 'Создать тренировку',
    value: '',
  },
  {
    control: 'datePicker',
    name: '',
    label: '',
    value: new Date(),
  },
];
</script>
