<template>
  <MainLayout>
    <PageHeader
      header="Питание"
      share-name="планом питания"
      create-name="план питания"
    />
    <!-- <TabsUI :routes="tabs" @tabInfo="() => console.log('')"/> -->
    <RouterView></RouterView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
// import TabsUI from '../shared/UI/TabsUI.vue';
import PageHeader from '../shared/components/page-header/PageHeader.vue';
// import { Tab } from '../shared/types/Tab';

// const tabs: Tab[] = [
//   {
//     path: '/food/all',
//     name: 'Планы питания',
//     shareName: 'планом питания',
//     createName: 'план питания',
//   },
// ];
</script>
