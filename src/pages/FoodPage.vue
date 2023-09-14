<template>
  <MainLayout>
    <PageHeader
      header="Питание"
      share-name="планом питания"
      create-name="план питания"
    />
    <TabsUI :routes="tabs" />
    <RouterView></RouterView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import TabsUI from '../shared/UI/TabsUI.vue';
import PageHeader from '../shared/components/page-header/PageHeader.vue';
import { Route } from '../shared/types/Route';

const tabs: Route[] = [
  {
    path: '/food/all',
    name: 'Планы питания',
  },
];
</script>
