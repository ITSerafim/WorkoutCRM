import { Tab } from '../shared/types/Tab';

export const tabs: Tab[] = [
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
];
