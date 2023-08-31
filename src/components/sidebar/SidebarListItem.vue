<template>
  <li class="sb-list-item">
    <font-awesome-icon :icon="icon" class="sb-icon" />
    <router-link :to="path as string" class="sb-link">{{ name }}</router-link>
  </li>
</template>

<script setup lang="ts">
defineProps({
  path: String,
  name: String,
  icon: String,
});
</script>
