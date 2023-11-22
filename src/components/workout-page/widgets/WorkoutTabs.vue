<template>
  <PageHeader
    :header="currentTab?.name"
    :share-name="currentTab?.shareName"
    :create-name="currentTab?.createName"
    @open="$emit('openModal', currentTab?.formName)"
  />
  <TabsUI :tabs="store.tabs" @tabInfo="(tab) => store.setCurrentTab(tab)" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TabsUI from '../../../shared/UI/TabsUI.vue';
import PageHeader from '../../../shared/components/page-header/PageHeader.vue';
import { useWorkoutTabs } from '../../../store/tabs/workout-tabs';

const store = useWorkoutTabs();

const currentTab = computed(() => store.currentTab);
</script>
