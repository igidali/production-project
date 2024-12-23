import { StateSchema } from 'app/providers/store-provider';
import { CounterSchema } from '../types/counter-schema';
import { counterActions, counterReducer } from './counter-slice';

describe('getCounter', () => {
  test('decrement', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 });
  });
  test('increment', () => {
    const state: CounterSchema = {
      value: 10,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 });
  });
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 });
  });
});
