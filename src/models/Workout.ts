import { TimeoutUnits } from '../shared/types/enums/TimeoutUnits';

export interface Workout {
  id?: number;
  name: string;
  description: string;
  dateWorkout: string;
  cyclesCount: number;
  cyclesCountTimeout: number;
  exerciseTimeout: number;
  cyclesTimeoutUnit?: TimeoutUnits;
  setTimeoutUnit?: TimeoutUnits;
}
