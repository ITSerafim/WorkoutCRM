<template>
  <form class="flex flex-col gap-25">
    <div class="form-grid gap-20">
      <FormControl
        v-for="(control, idx) of controls"
        :key="idx"
        :type="control.type"
        :label="control.label"
        :style="control.style"
      />
    </div>
    <div class="flex ai-center jc-space">
      <DatePickerUI v-model="date" />
      <ButtonUI btn-class="btn-primary">{{
        dynamicFormProps.buttonTitle
      }}</ButtonUI>
    </div>
  </form>
</template>

<script setup lang="ts">
import ButtonUI from '../../../shared/UI/ButtonUI.vue';
import DatePickerUI from '../../../shared/UI/DatePickerUI.vue';
import FormControl from './FormControl.vue';

const controls = [
  {
    type: 'input',
    label: 'Название тренировки',
    style: 'grid-cell-1',
    model: '',
  },
  {
    type: 'textarea',
    label: 'Описание тренировки',
    style: 'grid-cell-2',
    model: '',
  },
  {
    type: 'input-without',
    label: 'Кол-во кругов',
    model: '',
  },

  {
    type: 'input-without',
    label: 'Время отдыха между кругами',
    model: '',
  },
  {
    type: 'input-without',
    label: 'Время отдыха между упражнениями',
    model: '',
  },
];

interface DynamicFormProps {
  buttonTitle: string;
}

const dynamicFormProps = defineProps<DynamicFormProps>();

const date = new Date(new Date());
</script>
