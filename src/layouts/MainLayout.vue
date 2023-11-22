<template>
  <main class="main-layout">
    <SideBar />
    <section class="content">
      <NavBar />
      <slot></slot>
    </section>
  </main>
</template>

<script setup lang="ts">
import SideBar from '../components/sidebar/SideBar.vue';
import NavBar from '../components/navbar/NavBar.vue';
</script>
