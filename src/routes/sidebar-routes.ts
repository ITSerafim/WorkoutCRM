import { Route } from '../shared/types/Route';

export const routes: Route[] = [
  { name: 'Профиль', path: '/profile', icon: 'user' },
  { name: 'Поиск', path: '/search', icon: 'magnifying-glass' }, // <font-awesome-icon icon="fa-regular fa-magnifying-glass" />
  { name: 'Избранное', path: '/favorite', icon: 'heart' },
  { name: 'Тренировки', path: '/workout', icon: 'dumbbell' },
  { name: 'Питание', path: '/food', icon: 'utensils' },
  { name: 'Календарь', path: '/calendar', icon: 'calendar-days' },
  { name: 'Комьюнити', path: '/community', icon: 'users' },
  { name: 'Статистика', path: '/statistic', icon: 'square-poll-vertical' }, // only for admin
]

export const extraRoutes: Route[] = [
  { name: 'Поддержка', path: '/support', icon: 'headset' },
  { name: 'Условия & Положение', path: '/docs', icon: 'circle-info' },
  { name: 'Политика конфиденциальности', path: '/conf', icon: 'file-circle-exclamation' }
]

