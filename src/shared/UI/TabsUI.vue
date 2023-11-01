<template>
  <section class="tabs">
    <router-link
      v-for="(tab, idx) in tabs"
      :key="idx"
      :to="tab.path as string"
      active-class="active"
      class="tabs-el"
      @click="$emit('tabInfo', tab)"
    >
      {{ tab.name }}
    </router-link>
  </section>
</template>

<script setup lang="ts">
import { TabProps } from '../types/props/TabProps';

defineProps<TabProps>();
</script>
