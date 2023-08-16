<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Упражнения отсутствуют"
  />
</template>

<script setup lang="ts">
import BaseTable from '../../shared/components/base-table/BaseTable.vue';

const columns: string[] = [
  'Название упражнения',
  'Описание упражнения',
  'Кол-во повторений',
  'Время отдыха между повторениями',
];

const data: unknown[] = [];
</script>
