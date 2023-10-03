<template>
  <form class="workout-form">
    <InputUI v-model="workout.name" label="Название тренировки" />
    <TextareaUI v-model="workout.description" label="Описание тренировки" />
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
        @click.prevent="$emit('create', { ...workout, dateWorkout })"
      >
        Создать тренировку
      </ButtonUI>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import TextareaUI from '../../../shared/UI/TextareaUI.vue';
import InputWithoutFloatingUI from '../../../shared/UI/InputWithoutFloatingUI.vue';
import { Workout } from '../../../models/Workout';
import ButtonUI from '../../../shared/UI/ButtonUI.vue';
import InputUI from '../../../shared/UI/InputUI.vue';
import DatePickerUI from '../../../shared/UI/DatePickerUI.vue';

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
