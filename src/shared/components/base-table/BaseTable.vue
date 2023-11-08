<template>
  <table class="table-head">
    <thead>
      <tr>
        <th v-for="(column, idx) of props.columns" :key="idx">
          {{ column.header }}
        </th>
      </tr>
    </thead>
  </table>
  <div class="table-scroll">
    <table class="table">
      <tbody>
        <tr
          v-for="(item, idx) of props.data"
          :key="idx"
          class="body-row"
          @click="$emit('rowClick', { ...item, id: item.id })"
        >
          <td
            v-for="(field, i) of props.columns"
            :key="i"
            :data-label="field.field"
          >
            <slot name="mapping" :item="item" :field="field.field"> </slot>
          </td>
        </tr>

        <tr v-if="props.data?.length === 0">
          <td>{{ emptyMessage }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts" generic="T extends { id?: number }">
import { TableProps } from '../../types/base-table/BaseTableProps';

const props = defineProps<TableProps<T>>();
</script>
