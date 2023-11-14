<template>
  <CheckboxUI v-model="value" :label="label"></CheckboxUI>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CheckboxUI from '../../../UI/CheckboxUI.vue';

interface CheckboxControlProps {
  label: string;
}

defineProps<CheckboxControlProps>();

const value = ref<boolean>(false);
</script>
