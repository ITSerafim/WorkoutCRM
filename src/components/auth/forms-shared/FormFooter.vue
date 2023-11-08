<template>
  <div class="text-regular txt-color-primary as-center">
    {{ message }}
    <router-link class="a-link" :to="`/${path}`">{{ linkName }} </router-link>
  </div>
</template>

<script setup lang="ts">
import { SharedFormFooterProps } from '../../../shared/types/props/AuthProps';

defineProps<SharedFormFooterProps>();
</script>

