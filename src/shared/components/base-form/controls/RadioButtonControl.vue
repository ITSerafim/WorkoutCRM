<template>
  <section class="grid col-2 gap-25">
    <tamplate v-for="radio of radioGroup" :key="radio.label">
      <RadioButtonUI
        v-model="value"
        :name="radio.name"
        :label="radio.label"
        :value="radio.value"
      />
    </tamplate>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import RadioButtonUI from '../../../UI/RadioButtonUI.vue';

interface RadioButton {
  name: string;
  label: string;
  value?: string;
}

interface RadioButtonControlProps {
  radioGroup: RadioButton[];
}

defineProps<RadioButtonControlProps>();

const value = ref<string>('');
</script>
