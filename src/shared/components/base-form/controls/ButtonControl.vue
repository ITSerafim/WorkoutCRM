<template>
  <ButtonUI
    type="submit"
    :icon-name="iconName"
    :with-icon="withIcon"
    :extra-class="controlStyles"
    @click.prevent="$emit('callback')"
  >
    {{ label }}
  </ButtonUI>
</template>

<script setup lang="ts">
import ButtonUI from '../../../UI/ButtonUI.vue';

interface ButtonControlProps {
  label: string;
  withIcon?: boolean;
  iconName?: string;
  controlStyles?: string;
}

defineProps<ButtonControlProps>();

defineEmits(['callback']);
</script>
