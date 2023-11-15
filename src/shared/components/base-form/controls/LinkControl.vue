<template>
  <a :class="controlStyles" :href="path">{{ label }}</a>
</template>

<script setup lang="ts">
interface LinkControlProps {
  label: string;
  path: string;
  controlStyles?: string;
}

defineProps<LinkControlProps>();
</script>
