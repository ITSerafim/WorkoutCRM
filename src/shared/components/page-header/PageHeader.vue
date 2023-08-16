<!--Заголовок раздела с кнопками-->
<template>
  <section class="page-header">
    <h2>{{ header }}</h2>
    <div class="page-header-btns">
      <ButtonUI>Поделиться тренеровкой</ButtonUI>
      <ButtonUI extra-class="login">Создать тренировку</ButtonUI>
    </div>
  </section>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
import ButtonUI from '../../UI/ButtonUI.vue';

defineProps({
  header: {type: String, required: true},

})
</script>

<style scoped>

</style>