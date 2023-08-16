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
import { Route } from '../../shared/types/Route';

interface SidebarListProps {
    routes: Route[];
}

const props = defineProps<SidebarListProps>()
</script>