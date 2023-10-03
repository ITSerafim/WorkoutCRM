<template>
  <form>
    <InputUI v-model="exercise.name" label="Название упражнения" />
    <TextareaUI v-model="exercise.description" label="Описание упражнения" />
    <div class="form-grid">
      <InputWithoutFloatingUI
        v-model="exercise.repeatsCount"
        label="Кол-во повторений"
      />
      <InputWithoutFloatingUI
        v-model="exercise.setsCount"
        label="Кол-во подходов"
      />
      <InputWithoutFloatingUI
        v-model="exercise.repeatTimeout"
        label="Время отдыха между повторениями"
      />
      <InputWithoutFloatingUI
        v-model="exercise.setTimeout"
        label="Время отдыха между подходами"
      />
    </div>
    <div class="flex ai-center jc-space">
      <DatePickerUI v-model="date" />
      <ButtonUI type="submit" class="login"> Добавить упражнение </ButtonUI>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../shared/UI/InputUI.vue';
import TextareaUI from '../../shared/UI/TextareaUI.vue';
import { Exercise } from '../../models/Exercise';
import InputWithoutFloatingUI from '../../shared/UI/InputWithoutFloatingUI.vue';
import DatePickerUI from '../../shared/UI/DatePickerUI.vue';
import ButtonUI from '../../shared/UI/ButtonUI.vue';

const exercise = ref<Exercise>({
  name: '',
  description: '',
  repeatsCount: 0,
  setsCount: 0,
  repeatTimeout: 0,
  setTimeout: 0,
});

const date = ref<Date>(new Date());
</script>
