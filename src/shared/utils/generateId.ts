/**
 * Функция генерации рандомного id
 * для mock-ирования данных
 */

import { range } from './range';

export function generateId(size = 1000, rangeSize = [0, 1000]): number {
  return range(rangeSize[0], rangeSize[1])[Math.round(Math.random() * size)];
}
