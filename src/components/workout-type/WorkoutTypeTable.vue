<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Типы тренировки отсутствуют"
  ></BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../shared/types/BaseTableColumns';

const columns: BaseTableColumns[] = [
  {
    header: 'Название типа',
    field: 'name',
  },
  {
    header: 'Описание типа',
    field: 'description',
  },
];

interface WorkoutType {
  id?: number;
}

const data: WorkoutType[] = [];
</script>
