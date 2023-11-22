<template>
  <div class="nav-search">
    <InputWithoutFloatingUI
      :model-value="search"
      placeholder="Поиск..."
      icon="search"
      styles="text-start-imp bg-regular-imp"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import InputWithoutFloatingUI from '../../shared/UI/InputWithoutFloatingUI.vue';

const search = ref<string>('');;
</script>
