<template>
  <button :class="btnClass" :type="type as BtnType">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
type BtnType = 'button' | 'submit' | 'reset';

defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  btnClass: String,
});
</script>
