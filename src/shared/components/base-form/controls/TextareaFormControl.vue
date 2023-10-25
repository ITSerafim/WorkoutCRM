<template>
  <TextareaUI v-model="value" :label="label"></TextareaUI>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TextareaUI from '../../../UI/TextareaUI.vue';

interface InputFormControlProps {
  label: string;
}

defineProps<InputFormControlProps>();

const value = ref<string>('');
</script>
