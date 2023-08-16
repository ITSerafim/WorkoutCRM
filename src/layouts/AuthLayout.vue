<template>
  <main class="auth-layout">
    <img :src="`src/assets/${image}`" alt="main picture" class="image" />
    <section class="auth-section">
      <slot></slot>
    </section>
  </main>
</template>

<script setup lang="ts">
defineProps({
  image: String,
});
</script>