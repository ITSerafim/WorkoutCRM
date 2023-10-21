<template>
  <form class="workout-form">
    <!-- <InputUI v-model="workout.name" label="Название тренировки" />
    <TextareaUI v-model="workout.description" label="Описание тренировки" /> -->
    <BaseForm :config="config" />
    <div class="workout-form__grid">
      <InputWithoutFloatingUI
        v-model="workout.cyclesCount"
        label="Кол-во кругов"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        v-model="workout.cyclesCountTimeout"
        label="Время отдыха между кругами"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        v-model="workout.exerciseTimeout"
        label="Время отдыха между упражнениями"
      ></InputWithoutFloatingUI>
    </div>
    <div class="modal-footer">
      <DatePickerUI v-model="dateWorkout" />
      <ButtonUI
        type="submit"
        class="login"
        @click.prevent="console.log(config[0].value)"
      >
        Создать тренировку
      </ButtonUI>
    </div>
  </form>
  <!-- $emit('create', { ...workout, dateWorkout }) -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputWithoutFloatingUI from '../../../shared/UI/InputWithoutFloatingUI.vue';
import { Workout } from '../../../models/Workout';
import ButtonUI from '../../../shared/UI/ButtonUI.vue';
import DatePickerUI from '../../../shared/UI/DatePickerUI.vue';
import BaseForm from '../../../shared/components/base-form/BaseForm.vue';

const config = [
  {
    name: 'inputText',
    label: 'Test1',
    value: '',
  },

  {
    name: 'textareaText',
    label: 'Test2',
    value: '',
  },
];

const workout = ref<Workout>({
  name: '',
  description: '',
  dateWorkout: '',
  cyclesCount: 0,
  cyclesCountTimeout: 0,
  exerciseTimeout: 0,
});

const dateWorkout = ref(new Date());
</script>
