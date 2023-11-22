<template>
  <main class="grid col-2 relative">
    <img
      :src="`src/assets/${image}`"
      alt="main picture"
      class="wi-100 he-100"
    />
    <section class="flex flex-col jc-space p-20">
      <slot></slot>
    </section>
  </main>
</template>

<script setup lang="ts">
import { AuthLayout } from '../shared/types/props/LayoutProps';

defineProps<AuthLayout>();
</script>

