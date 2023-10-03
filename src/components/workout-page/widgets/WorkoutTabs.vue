<template>
  <PageHeader
    :header="tab.name"
    :shareName="tab.shareName"
    :createName="tab.createName"
    @open="$emit('openModal')"
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
});

function setTabInfo(info: Tab) {
  tab.value = {
    name: info.name,
    shareName: info.shareName,
    createName: info.createName,
  };
}
</script>
