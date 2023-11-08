<template>
  <BaseTable
    :columns="columns"
    :data="exercises"
    empty-message="Упражнения отсутствуют"
  >
    <template #mapping="{ item, field }">
      {{ mapper(item, field) }}
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
import BaseTable from '../../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../../shared/types/base-table/BaseTableColumns';
import { useExerciseStore } from '../../../store/exercise.ts';

const { exercises } = useExerciseStore();

const columns: BaseTableColumns[] = [
  { header: 'Название упражнения', field: 'name' },
  { header: 'Описание упражнения', field: 'description' },
  { header: 'Кол-во повторений', field: 'repeatsCount' },
  { header: 'Кол-во подходов', field: 'setsCounte' },
  { header: 'Время отдыха между повторениями', field: 'repeatTimeout' },
  { header: 'Время отдыха между подходами', field: 'setTimeout' },
];

function mapper(value: any, field: string): string {
  const currentDict: any = {
    name: value.name,
    description: value.description,
    dateExercise: value.dateExercise,
    repeatsCount: value.repeatsCount,
    setsCount: value.setsCount,
    repeatTimeout: value.repeatTimeout,
    setTimeout: value.setTimeout,
  };

  return currentDict[field] || value[field] || '-';
}
</script>
../../../shared/types/base-table/BaseTableColumns
