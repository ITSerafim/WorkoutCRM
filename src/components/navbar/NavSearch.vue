<template>
  <div class="nav-search">
    <InputUI :model-value="search" label="Поиск..." />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../shared/UI/InputUI.vue';

const search = ref<string>('');
</script>
