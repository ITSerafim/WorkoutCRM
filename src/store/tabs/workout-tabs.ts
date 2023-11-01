import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Tab } from '../../shared/types/Tab';
import { get, set } from '../../shared/utils/localstorage';

export const useWorkoutTabs = defineStore('workout-tabs', () => {
  const tabs = ref<Tab[]>([
    {
      path: '/workout/all',
      name: 'Тренировки',
      shareName: 'тренировкой',
      createName: 'тренеровку',
      formName: 'createWorkoutForm',
    },
    {
      path: '/workout/exercises',
      name: 'Упражнения',
      shareName: 'упражнением',
      createName: 'упражнение',
      formName: 'createExerciseForm',
    },
    {
      path: '/workout/types',
      name: 'Тип тренировки',
      shareName: 'типом тренировки',
      createName: 'тип тренировки',
    },
  ]);

  const currentTab = ref<Tab>({
    ...get('currentTab'),
  });

  function setCurrentTab(newTab: Tab) {
    set('currentTab', newTab);
    currentTab.value = newTab;
  }

  return { tabs, currentTab, setCurrentTab };
});
