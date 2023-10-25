<template>
  <InputUI v-model="name" :label="label"></InputUI>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputUI from '../../../UI/InputUI.vue';

interface InputFormControlProps {
  label: string;
}

defineProps<InputFormControlProps>();

const name = ref<string>('');
</script>
