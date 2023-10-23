<template>
  <DatePickerUI v-model="date" />
</template>

<script setup lang="ts">
import DatePickerUI from '../../../UI/DatePickerUI.vue';

import { ref } from 'vue';

const date = ref(new Date());
</script>
