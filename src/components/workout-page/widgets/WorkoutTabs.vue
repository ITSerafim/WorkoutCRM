<template>
  <PageHeader
    :header="tab.name"
    :share-name="tab.shareName"
    :create-name="tab.createName"
    @open="$emit('openModal', tab.formName)"
  />
  <TabsUI :tabs="tabs" @tabInfo="(tab) => setTabInfo(tab)" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Tab } from '../../../shared/types/Tab';
import { tabs } from '../../../routes/workout-tabs';
import TabsUI from '../../../shared/UI/TabsUI.vue';
import PageHeader from '../../../shared/components/page-header/PageHeader.vue';

const tab = ref<Tab>({
  name: 'Тренировки',
  shareName: 'тренировкой',
  createName: 'тренировку',
  formName: 'createWorkoutForm',
});

function setTabInfo(info: Tab) {
  tab.value = {
    name: info.name,
    shareName: info.shareName,
    createName: info.createName,
    formName: info.formName,
  };
}
</script>
