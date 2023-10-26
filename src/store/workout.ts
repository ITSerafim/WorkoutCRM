import { ref } from 'vue';
import { defineStore } from 'pinia';
import { Workout } from '../models/Workout';

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref<Workout[]>([
    {
      id: 1,
      name: 'Тренировка 1',
      description: 'Описание для тренировки 1',
      dateWorkout: new Date(Date.now()).toLocaleDateString('sv'),
      cyclesCount: 10,
      cyclesCountTimeout: 2,
      exerciseTimeout: 2,
    },
  ]);

  function addWorkout(workout: Workout) {
    workouts.value.push({
      ...workout,
      id: new Date().getDate() + 1,
      dateWorkout: workout.dateWorkout
        ? new Date(workout.dateWorkout).toLocaleDateString('sv')
        : new Date(Date.now()).toLocaleDateString('sv'),
    });
  }

  function updateWorkout(updatedWorkout: Workout) {
    const index = workouts.value.findIndex(
      (workout) => workout.id === updatedWorkout.id,
    );

    workouts.value[index] = updatedWorkout;
  }

  return { workouts, addWorkout, updateWorkout };
});
