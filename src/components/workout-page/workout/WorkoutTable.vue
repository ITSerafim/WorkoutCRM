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
  <Teleport to="body">
    <ModalUI :show="showModal" @close="showModal = false">
      <template #header>
        <h3>Редактирование тренировки</h3>
      </template>
      <template #body>
        <workout-edit-form
          :date-workout="currentItem['dateWorkout']"
          :name="currentItem['name']"
          :description="currentItem['description']"
          :cycles-count="currentItem['cyclesCount']"
          :cycles-count-timeout="currentItem['cyclesCountTimeout']"
          :exercise-timeout="currentItem['exerciseTimeout']"
          @update="(workout: Workout) => update(workout)"
        ></workout-edit-form>
      </template>
    </ModalUI>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutEditForm from './WorkoutEditForm.vue';
import BaseTable from '../../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../../shared/types/base-table/BaseTableColumns';
import ModalUI from '../../../shared/UI/ModalUI.vue';
import { Workout } from '../../../models/Workout.ts';
import { useWorkoutStore } from '../../../store/workout.ts';

const { workouts, updateWorkout } = useWorkoutStore();

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

function update(workout: Workout) {
  updateWorkout({ ...workout, id: currentItem.value.id });
  showModal.value = false;
}

const showModal = ref<boolean>(false);

const currentItem = ref<any>(null);
</script>
