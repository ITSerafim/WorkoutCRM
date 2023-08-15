<template>
    <main class="main-layout">
        <SideBar/>
        <section class="content">
            <slot></slot>
        </section>
    </main>
</template>


<script setup lang="ts">
import SideBar from '../components/sidebar/SideBar.vue';
</script>