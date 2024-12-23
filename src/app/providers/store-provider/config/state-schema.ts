import { CounterSchema } from 'entities/counter';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  counter: CounterSchema;
}
