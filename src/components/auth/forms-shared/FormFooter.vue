<template>
  <div class="text-regular txt-color-primary as-center">
    {{ message }}
    <router-link class="a-link" :to="`/${path}`">{{ linkName }} </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps({
  message: String,
  path: String,
  linkName: String,
});
</script>
