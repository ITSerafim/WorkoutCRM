<template>
  <section class="tabs">
    <router-link
      v-for="(route, idx) in props.routes"
      :key="idx"
      active-class="active"
      :to="route.path"
      class="tabs-el"
    >
      {{ route.name }}
    </router-link>
  </section>
</template>

<script setup lang="ts">
import { Route } from '../types/Route';

interface TabsProps {
  routes: Route[];
}

const props = defineProps<TabsProps>();
</script>
