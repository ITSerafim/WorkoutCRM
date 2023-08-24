<template>
  <BaseTable
    :columns="columns"
    :data="workouts"
    empty-message="Тренировки отсутствуют"
    @row-click="(item: any) => rowClickHandler(item)"
  >
    <template #mapping="{ item, field }">
      {{ mapper(item, field) }}
    </template>
  </BaseTable>
  <!-- <Teleport to="body">
    <ModalUI :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Редактирование тренировки</h3>
      </template>
      <template #body>
        <workout-create-form
          :name="currentItem['name']"
          :description="currentItem['description']"
          :cycles-count="currentItem['cyclesCount']"
          :cycles-count-timeout="currentItem['cyclesCountTimeout']"
          :exercise-timeout="currentItem['exerciseTimeout']"
        ></workout-create-form>
      </template>
      <template #footer>
        <DatePickerUI :model-value="date" />
        <ButtonUI class="login" @click="showModal = false">
          Создать тренировку
        </ButtonUI>
      </template>
    </ModalUI>
  </Teleport> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BaseTable from '../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../shared/types/BaseTableColumns';
import { useWorkoutStore } from '../../store/workout';

const { workouts } = useWorkoutStore();

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
    dateWorkout: value.dateWorkout,
    cyclesCount: value.cyclesCount,
    cyclesCountTimeout: value.cyclesCountTimeout,
    exerciseTimeout: value.exerciseTimeout,
  };

  return currentDict[field] || value[field] || '-';
}

function rowClickHandler(item: any) {
  showModal.value = true;
  currentItem.value = item;
}

const showModal = ref(false);

const currentItem = ref<any>(null);
</script>
