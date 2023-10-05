<template>
  <template v-if="props.type === 'input-without'">
    <InputWithoutFloatingUI
      v-model="workout.cyclesCount"
      :label="props.label"
    ></InputWithoutFloatingUI>
  </template>
  <template v-else-if="props.type === 'textarea'">
    <div :class="props.style">
      <TextareaUI v-model="workout.description" label="Описание тренировки" />
    </div>
  </template>
  <template v-else-if="props.type === 'input'">
    <div :class="props.style">
      <InputUI v-model="workout.name" label="Название тренировки" />
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../../shared/UI/InputUI.vue';
import TextareaUI from '../../../shared/UI/TextareaUI.vue';
import InputWithoutFloatingUI from '../../../shared/UI/InputWithoutFloatingUI.vue';

interface ControlProps {
  type: string;
  label: string;
  style?: string;
}

const props = defineProps<ControlProps>();

const workout = ref<any>({
  name: '',
  description: '',
  dateWorkout: '',
  cyclesCount: 0,
  cyclesCountTimeout: 0,
  exerciseTimeout: 0,
});
</script>
