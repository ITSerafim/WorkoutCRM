import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Workout } from '../models/Workout';

export const useWorkoutStore = defineStore('workout', () => {
  const workouts = ref<Workout[]>([
    {
      name: 'Тренировка 1',
      description: 'Описание для тренировки 1',
      dateWorkout: new Date(Date.now()).toLocaleDateString('sv'),
      cyclesCount: 10,
      cyclesCountTimeout: 2,
      exerciseTimeout: 2,
    },
  ]);

  function addWorkout(workout: Workout) {
    console.log(workout);

    workouts.value.push({
      ...workout,
      dateWorkout: workout.dateWorkout
        ? new Date(workout.dateWorkout).toLocaleDateString('sv')
        : new Date(Date.now()).toLocaleDateString('sv'),
    });
  }

  return { workouts, addWorkout };
});
