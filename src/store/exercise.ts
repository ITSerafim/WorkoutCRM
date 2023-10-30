import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Exercise } from '../models/Exercise';
import { getLocaleDate } from '../shared/utils/date';

export const useExerciseStore = defineStore('exercise', () => {
  const exercises = ref<Exercise[]>([
    {
      id: 1,
      name: 'Упражнение',
      description: 'Описание для упражнения',
      dateExercise: getLocaleDate(),
      setsCount: 10,
      repeatsCount: 20,
      setTimeout: 2,
      repeatTimeout: 2,
    },
  ]);

  function addExercise(exercise: Exercise) {
    exercises.value.push({
      ...exercise,
      id: new Date().getDate() + 1,
      dateExercise: exercise.dateExercise
        ? getLocaleDate(exercise.dateExercise as unknown as number)
        : getLocaleDate(),
    });
  }

  return { exercises, addExercise };
});
