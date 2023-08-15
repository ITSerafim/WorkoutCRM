<template>
    <sidebar class="sb">
        <img src="src/assets/logo.png" alt="logo" class="sb-logo">
        <SidebarList :routes="routesRef" />
        <span class="hr"></span>
        <div class="social-icons">
            <font-awesome-icon v-for="(icon, idx) in socialIcons" :key="idx" :icon="icon" class="social-icon " />
        </div>
        <SidebarList :routes="extraRoutesRef" />
    </sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Route } from '../../shared/types/Route';
import { routes, extraRoutes } from '../../routes/sidebar-routes'
import SidebarList from './SidebarList.vue';


const socialIcons = ref<string[]>(['fa-brands fa-vk', 'fa-brands fa-instagram', 'fa-brands fa-telegram', 'fa-brands fa-whatsapp']);

const routesRef = ref<Route[]>(routes)

const extraRoutesRef = ref<Route[]>(extraRoutes)
</script>