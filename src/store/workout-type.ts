import { ref } from 'vue';
import { defineStore } from 'pinia';
import { WorkoutType } from '../models/WorkoutType';
import { generateId } from '../shared/utils/generateId';

export const useWorkoutTypeStore = defineStore('workoutType', () => {
  const workoutTypes = ref<WorkoutType[]>([
    {
      id: generateId(),
      name: 'Тип тренировки 1',
      description: 'Описание типа тренировки 1',
    },
  ]);

  function addWorkoutType(workoutType: WorkoutType) {
    workoutTypes.value.push({
      ...workoutType,
      id: generateId(),
    });
  }

  return { workoutTypes, addWorkoutType };
});
