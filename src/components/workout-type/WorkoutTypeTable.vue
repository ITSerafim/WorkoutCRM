<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Типы тренировки отсутствуют"
  />
</template>

<script setup lang="ts">
import BaseTable from '../../shared/components/base-table/BaseTable.vue';

const columns: string[] = ['Название типа', 'Описание типа'];

const data: unknown[] = [];
</script>
