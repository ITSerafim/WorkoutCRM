import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/workout' },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('./pages/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'auth-registration',
    component: () => import('./pages/RegisterPage.vue'),
  },
  {
    path: '/workout',
    name: 'workout',
    component: () => import('./pages/WorkoutPage.vue'),
    redirect: '/workout/all',
    children: [
      {
        path: 'all',
        component: () => import('./components/workout-page/workout/WorkoutTable.vue'),
      },
      {
        path: 'exercises',
        component: () => import('./components/workout-page/exercise/ExerciseTable.vue'),
      },
      {
        path: 'types',
        component: () =>
          import('./components/workout-page/workout-type/WorkoutTypeTable.vue'),
      },
    ],
  },
  {
    path: '/food',
    name: 'food',
    component: () => import('./pages/FoodPage.vue'),
    redirect: '/food/all',
    children: [
      {
        path: 'all',
        component: () => import('./components/food/FoodList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
