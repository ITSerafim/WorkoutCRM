<template>
  <BaseTable
    :columns="columns"
    :data="data"
    empty-message="Упражнения отсутствуют"
  />
</template>

<script setup lang="ts">
import BaseTable from '../../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../../shared/types/BaseTableColumns';

const columns: BaseTableColumns[] = [
  { header: 'Название упражнения', field: 'name' },
  { header: 'Описание упражнения', field: 'description' },
  { header: 'Кол-во повторений', field: 'repeatsCount' },
  { header: 'Кол-во подходов', field: 'setsCounte' },
  { header: 'Время отдыха между повторениями', field: 'repeatsCountTime' },
  { header: 'Время отдыха между подходами', field: 'setsCountTime' },
];

interface Exc {
  id: number;
}

const data: Exc[] = [];
</script>
