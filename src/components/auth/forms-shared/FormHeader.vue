<template>
  <h2 class="text-center main-heading txt-color-primary mb-80">{{ title }}</h2>
</template>

<script setup lang="ts">
import { SharedFormHeaderProps } from '../../../shared/types/props/AuthProps';

defineProps<SharedFormHeaderProps>();
</script>
