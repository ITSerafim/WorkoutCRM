<template>
  <BaseTable
    :columns="columns"
    :data="data"
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
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import WorkoutCreateForm from './WorkoutCreateForm.vue';
import BaseTable from '../../shared/components/base-table/BaseTable.vue';
import { BaseTableColumns } from '../../shared/types/BaseTableColumns';
import ModalUI from '../../shared/UI/ModalUI.vue';
import ButtonUI from '../../shared/UI/ButtonUI.vue';
import DatePickerUI from '../../shared/UI/DatePickerUI.vue';

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

const data: unknown[] = [
  {
    name: 'Тренировка 1',
    description: 'Описание для тренировки 1',
    dateWorkout: new Date(Date.now()).toISOString(),
    cyclesCount: 10,
    cyclesCountTimeout: 2,
    exerciseTimeout: 2,
  },
];

const date = ref(new Date());

const showModal = ref(false);

const currentItem = ref<any>(null);
</script>
