<template>
    <li class="sb-list-item">
        <img :src="`src/assets/icons/${icon}.svg`" alt="icon" class="sb-icon">
        <router-link :to="path" class="sb-link">{{ name }}</router-link>
    </li>
</template>


<script setup lang="ts">
defineProps({
  path: String,
  name: String,
  icon: String
})
</script>