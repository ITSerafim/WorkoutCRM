<template>
  <MainLayout>
    <PageHeader header="Тренировки" @open="showModal = true" />
    <TabsUI :routes="tabs" />
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
import PageHeader from '../shared/components/page-header/PageHeader.vue';
import ModalUI from '../shared/UI/ModalUI.vue';
import TabsUI from '../shared/UI/TabsUI.vue';
import WorkoutCreateForm from '../components/workout/WorkoutCreateForm.vue';
import { Route } from '../shared/types/Route';
import { Workout } from '../models/Workout';
import { useWorkoutStore } from '../store/workout';

const { addWorkout } = useWorkoutStore();

function createWorkout(workout: Workout) {
  addWorkout(workout);
  showModal.value = false;
}

const tabs: Route[] = [
  {
    path: '/workout/all',
    name: 'Тренировки',
  },
  {
    path: '/workout/exercises',
    name: 'Упражнения',
  },
  {
    path: '/workout/types',
    name: 'Тип тренировки',
  },
];

const showModal = ref(false);
</script>
