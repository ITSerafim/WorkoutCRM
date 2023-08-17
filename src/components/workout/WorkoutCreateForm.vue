<template>
  <form class="workout-form">
    <InputUI :model-value="workout.name" label="Название тренировки" />
    <TextareaUI
      :model-value="workout.description"
      label="Описание тренировки"
    />
    <div class="workout-form__grid">
      <InputWithoutFloatingUI
        :model-value="workout.name"
        label="Кол-во подходов"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        :model-value="workout.name"
        label="Кол-во кругов"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        :model-value="workout.name"
        label="Время отдыха между кругами"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        :model-value="workout.name"
        label="Время отдыха между подходами"
      ></InputWithoutFloatingUI>
      <InputWithoutFloatingUI
        :model-value="workout.name"
        label="Время отдыха между упражнениями"
      ></InputWithoutFloatingUI>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../shared/UI/InputUI.vue';
import TextareaUI from '../../shared/UI/TextareaUI.vue';
import InputWithoutFloatingUI from '../../shared/UI/InputWithoutFloatingUI.vue';

const workout = ref({
  name: '',
  description: '',
});
</script>
