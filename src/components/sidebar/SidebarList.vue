<template>
  <ul class="sb-list">
    <SidebarListItem
      v-for="(route, idx) in props.routes"
      :key="idx"
      :name="route.name"
      :path="route.path"
      :icon="route.icon"
    />
  </ul>
</template>

<script setup lang="ts">
import SidebarListItem from './SidebarListItem.vue';
import { SidebarListProps } from '../../shared/types/props/SidebarProps';

const props = defineProps<SidebarListProps>();
</script>
