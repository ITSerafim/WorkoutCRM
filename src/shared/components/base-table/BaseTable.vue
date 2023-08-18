<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, idx) of props.columns" :key="idx">
          {{ column.header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, idx) of props.data"
        :key="idx"
        class="body-row"
        @click="() => console.log('row click')"
      >
        <td v-for="(field, i) of props.columns" :key="i">
          <slot name="mapping" :item="item" :field="field.field"> </slot>
        </td>
      </tr>

      <tr v-if="props.data?.length === 0">
        <td>{{ emptyMessage }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts" generic="T">
interface TableProps {
  columns: any[];
  emptyMessage: string;
  data?: T[];
}

const props = defineProps<TableProps>();
</script>
