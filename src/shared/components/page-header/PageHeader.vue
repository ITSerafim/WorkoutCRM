<!--Заголовок раздела с кнопками-->
<template>
  <section class="page-header">
    <h2>{{ header }}</h2>
    <div class="page-header-btns">
      <ButtonUI btn-class="btn-secondary">Поделиться {{ shareName }}</ButtonUI>
      <ButtonUI btn-class="btn-primary" @click="$emit('open')"
        >Добавить {{ createName }}</ButtonUI
      >
    </div>
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
import ButtonUI from '../../UI/ButtonUI.vue';

interface PageHeaderProps {
  header: string;
  shareName: string;
  createName: string;
}

defineProps<PageHeaderProps>();
</script>
