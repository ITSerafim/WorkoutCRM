<template>
  <MainLayout>
    <PageHeader header="Тренировки" />
    <TabsUI :routes="tabs" />
    <DatePickerUI/>
    <router-view />
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import PageHeader from '../shared/components/page-header/PageHeader.vue';
import { Route } from '../shared/types/Route';
import DatePickerUI from '../shared/UI/DatePickerUI.vue';
import TabsUI from '../shared/UI/TabsUI.vue';

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
</script>
