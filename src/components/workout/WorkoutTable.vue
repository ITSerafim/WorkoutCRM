<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Тренировки отсутствуют"
  >
    <template #mapping="{ item, field }">
      {{ mapper(item, field) }}
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../shared/types/BaseTableColumns';

const columns: BaseTableColumns[] = [
  { header: 'Название тренировки', field: 'name' },
  { header: 'Описание тренировки', field: 'description' },
  { header: 'Дата тренировки', field: 'dateWorkout' },
  { header: 'Кол-во кругов', field: 'cyclesCount' },
  { header: 'Время отдыха между кругами', field: 'cyclesCountTimeout' },
  { header: 'Время отдыха между упражнениями', field: 'exerciseTimeout' },
];

function mapper(value: any, field: string): string {
  const currentDict: any = {
    name: value.name,
    description: value.value,
    dateWorkout: value.test,
    cyclesCount: value.cyclesCount,
    cyclesCountTimeout: value.cyclesCountTimeout,
    exerciseTimeout: value.exerciseTimeout,
  };

  return currentDict[field] || value[field] || '-';
}

const data: unknown[] = [];
</script>
