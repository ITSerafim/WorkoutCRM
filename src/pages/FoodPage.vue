<template>
  <MainLayout>
    <PageHeader
      header="Питание"
      share-name="планом питания"
      create-name="план питания"
    />
    <RouterView></RouterView>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '../layouts/MainLayout.vue';
import PageHeader from '../shared/components/page-header/PageHeader.vue';
</script>
