import { Id } from './Id';

export interface BaseModel extends Id {
  name: string;
  description: string;
}
