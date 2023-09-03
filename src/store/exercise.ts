import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Exercise } from '../models/Exercise';

export const useExerciseStore = defineStore('exercise', () => {
  const exercises = ref<Exercise[]>([]);

  function addExercise(exercise: Exercise): void {
    exercises.value.push({ ...exercise, id: new Date().getDate() + 1 });
  }

  function updateExercise(updatedExercise: Exercise) {
    const index = exercises.value.findIndex(
      (exercise) => exercise.id === updatedExercise.id,
    );

    exercises.value[index] = updatedExercise;
  }

  return { exercises, addExercise, updateExercise };
});
