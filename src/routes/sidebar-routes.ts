import { Route } from '../shared/types/Route';

export const routes: Route[] = [
  { name: 'Профиль', path: '/profile' },
  { name: 'Поиск', path: '/search' },
  { name: 'Избранное', path: '/favorite' },
  { name: 'Тренировки', path: '/workout' },
  { name: 'Питание', path: '/food' },
  { name: 'Календарь', path: '/calendar' },
  { name: 'Комьюнити', path: '/community' },
  { name: 'Статистика', path: '/statistic' }, // only for admin
]

export const extraRoutes: Route[] = [
  { name: 'Поддержка', path: '/support', },
  { name: 'Условия & Положение', path: '/docs', },
  { name: 'Политика конфиденциальности', path: '/conf', }
]