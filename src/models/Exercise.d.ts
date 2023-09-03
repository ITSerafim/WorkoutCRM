import { ID } from '../shared/types/Id';

export interface Exercise extends ID {
  name: string;
  description: string;
  repeatsCount: number;
  setsCount: number;
  repeatsCountTime: string;
  setsCountTime: string;
}
