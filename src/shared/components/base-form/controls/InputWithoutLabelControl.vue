<template>
  <InputWithoutFloatingUI
    v-model="value"
    :label="label"
  ></InputWithoutFloatingUI>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InputWithoutFloatingUI from '../../../UI/InputWithoutFloatingUI.vue';

interface InputFormControlProps {
  label: string;
}

defineProps<InputFormControlProps>();

const value = ref<string>('');
</script>
