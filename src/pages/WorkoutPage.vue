<template>
  <MainLayout>
    <WorkoutTabs @open-modal="callback" />
    <router-view />
    <Teleport to="body">
      <ModalUI :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Создание тренировки</h3>
        </template>
        <template #body>
          <component
            :is="forms[formName]"
            @create="(value: any) => createMethod(value, formsMethods)"
          ></component>
        </template>
      </ModalUI>
    </Teleport>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import ModalUI from '../shared/UI/ModalUI.vue';
import WorkoutTabs from '../components/workout-page/widgets/WorkoutTabs.vue';
import WorkoutCreateForm from '../components/workout-page/workout/WorkoutCreateForm.vue';
import ExerciseCreateForm from '../components/workout-page/exercise/ExerciseCreateForm.vue';
import CreateWorkoutType from '../components/workout-page/workout-type/CreateWorkoutType.vue';
import { Workout } from '../models/Workout';
import { useWorkoutStore } from '../store/workout';
import { createMethod } from '../shared/components/base-form/methods/create.ts';
import { useExerciseStore } from '../store/exercise';
import { useWorkoutTypeStore } from '../store/workout-type';
import { WorkoutType } from '../models/WorkoutType';
import { Exercise } from '../models/Exercise';

const { addWorkout } = useWorkoutStore();
const { addExercise } = useExerciseStore();
const { addWorkoutType } = useWorkoutTypeStore();

const forms: any = {
  createWorkoutForm: WorkoutCreateForm,
  createExerciseForm: ExerciseCreateForm,
  createWorkoutType: CreateWorkoutType,
};

const formsMethods: any = {
  workoutCreate: createWorkout,
  exerciseCreate: createExercise,
  workoutTypeCreate: workoutTypeCreate,
};

function createWorkout(workout: Workout) {
  addWorkout(workout);
  showModal.value = false;
}

function createExercise(exercise: Exercise) {
  addExercise(exercise);
  showModal.value = false;
}

function workoutTypeCreate(workoutType: WorkoutType) {
  addWorkoutType(workoutType);
  showModal.value = false;
}

function callback(name: string) {
  formName.value = name;
  showModal.value = true;
}

const showModal = ref(false);
const formName = ref('');
</script>
