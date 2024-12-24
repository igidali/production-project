import { CounterSchema } from 'entities/counter';
import { UserSchema } from 'entities/user';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}
