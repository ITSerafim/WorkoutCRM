<template>
  <BaseTable
    :columns="columns"
    :data="workoutTypes"
    empty-message="Типы тренировки отсутствуют"
  >
    <template #mapping="{ item, field }">
      {{ mapper(item, field) }}
    </template></BaseTable
  >
</template>

<script setup lang="ts">
import BaseTable from '../../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../../shared/types/BaseTableColumns';
import { useWorkoutTypeStore } from '../../../store/workout-type';

const { workoutTypes } = useWorkoutTypeStore();

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

function mapper(value: any, field: string): string {
  const currentDict: any = {
    name: value.name,
    description: value.description,
  };

  return currentDict[field] || value[field] || '-';
}
</script>
