<template>
  <ButtonUI type="submit" class="login" @click.prevent="$emit('callback')">{{
    label
  }}</ButtonUI>
</template>

<script setup lang="ts">
import ButtonUI from '../../../UI/ButtonUI.vue';

interface ButtonControlProps {
  label: string;
}

defineProps<ButtonControlProps>();

defineEmits(['callback']);
</script>
