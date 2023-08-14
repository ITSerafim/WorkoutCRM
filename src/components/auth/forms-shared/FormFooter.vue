<template>
  <div class="register">
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