<template>
  <sidebar :class="'sb ' + menuToggleClass" @click="menuToggleClass = ''">
    <img src="../../assets/logo.png" alt="logo" class="sb-logo" />
    <SidebarList :routes="routesRef" />
  </sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Route } from '../../shared/types/Route';
import { routes } from '../../routes/sidebar-routes';
import SidebarList from './SidebarList.vue';

const routesRef = ref<Route[]>(routes);

const menuToggleClass = ref<string>('');
</script>
