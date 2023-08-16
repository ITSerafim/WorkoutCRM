<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="(column, idx) of props.columns" :key="idx">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="data?.length === 0">
        <td>{{ emptyMessage }}</td>
      </tr>
      <tr v-else>
        <td v-for="(item, idx) of props.data" :key="idx">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
interface TableProps {
  columns: string[];
  emptyMessage: string;
  data?: unknown[];
}

const props = defineProps<TableProps>();
</script>
