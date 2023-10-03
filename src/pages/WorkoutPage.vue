<template>
  <MainLayout>
    <WorkoutTabs @openModal="showModal = true" />
    <router-view />
    <Teleport to="body">
      <ModalUI :show="showModal" @close="showModal = false">
        <template #header>
          <h3>Создание тренировки</h3>
        </template>
        <template #body>
          <workout-create-form
            @create="(workout: Workout) => createWorkout(workout)"
          ></workout-create-form>
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
import { Workout } from '../models/Workout';
import { useWorkoutStore } from '../store/workout';

const { addWorkout } = useWorkoutStore();

function createWorkout(workout: Workout) {
  addWorkout(workout);
  showModal.value = false;
}

const showModal = ref(false);
</script>
