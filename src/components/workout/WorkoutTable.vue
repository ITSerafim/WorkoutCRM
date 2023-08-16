<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Тренировки отсутствуют"
  />
</template>

<script setup lang="ts">
import BaseTable from '../../shared/components/base-table/BaseTable.vue';

const columns: string[] = [
  'Название тренировок',
  'Описание тренировок',
  'Дата тренировок',
  'Кол-во подходов',
  'Кол-во кругов',
  'Кол-во упражнений',
  'Время отдыха между кругами',
  'Время отдыха между подходами',
  'Время отдыха между упражнениями',
];

const data: unknown[] = [];
</script>
