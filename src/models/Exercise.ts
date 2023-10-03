import { BaseModel } from '../shared/types/BaseModel';

export interface Exercise extends BaseModel {
  repeatsCount: number;
  setsCount: number;
  repeatTimeout: number;
  setTimeout: number;
  repeatTimeoutUnit?: string;
  setTimeoutUnit?: string;
}
