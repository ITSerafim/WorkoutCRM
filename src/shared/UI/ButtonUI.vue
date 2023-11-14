<template>
  <button :class="`btn ${extraClass}`" :type="validator">
    <span v-if="withIcon" class="flex jc-center ai-center gap-10">
      <img :src="`src/assets/${iconName}`" alt="icon" />
      <slot></slot>
    </span>
    <slot v-else></slot>
  </button>
</template>

<script setup lang="ts">
import { ButtonProps } from '../types/props/ButtonProps';

withDefaults(defineProps<ButtonProps>(), {
  default: 'button',
  validator: 'button' || 'submit' || 'reset',
});
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8px;
  border: 2px solid #2b2b2e;
  background: #212123;
  padding: 18px 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: #fff;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 8px 10px;
  }
}
</style>
