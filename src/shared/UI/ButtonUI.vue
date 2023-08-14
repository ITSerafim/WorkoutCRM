<template>
  <button :class="`btn ${extraClass}`" :type="type"><slot></slot></button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value: string) => ['button', 'submit', 'reset'].includes(value),
  },
  extraClass: String,
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
}
</style>