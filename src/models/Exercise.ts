import { BaseModel } from '../shared/types/BaseModel';
import { TimeoutUnits } from '../shared/types/enums/timeout-units';

export interface Exercise extends BaseModel {
  repeatsCount: number;
  setsCount: number;
  repeatTimeout: number;
  setTimeout: number;
  dateExercise: string;
  repeatTimeoutUnit?: TimeoutUnits;
  setTimeoutUnit?: TimeoutUnits;
}
