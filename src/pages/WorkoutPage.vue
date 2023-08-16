<template>
  <MainLayout>
    <PageHeader header="Тренировки" />
    <WorkoutTable :columns="columns" :data="data" empty-message="Тренировки отсутствуют" />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import PageHeader from '../shared/components/page-header/PageHeader.vue';
import WorkoutTable from '../components/workout/WorkoutTable.vue';

const columns: string[] = [
  'Название тренировок',
  'Описание тренировок',
  'Дата тренировок',
  'Кол-во подходов',
  'Кол-во кругов',
  'Кол-во упражнений',
  'Время отдыха между кругами',
  'Время отдыха между подходами',
  'Время отдыха между упражнениями'
];


const data: unknown[] = [
];
</script>