<!--Заголовок раздела с кнопками-->
<template>
  <section class="page-header">
    <h2>{{ header }}</h2>
    <div class="page-header-btns">
      <ButtonUI>Поделиться тренеровкой</ButtonUI>
      <ButtonUI extra-class="login" @click="$emit('open')"
        >Создать тренировку</ButtonUI
      >
    </div>
  </section>
  
</template>

<script setup lang="ts">
import ButtonUI from '../../UI/ButtonUI.vue';

defineProps({
  header: { type: String, required: true },
});
</script>
