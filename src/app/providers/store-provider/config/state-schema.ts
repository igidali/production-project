import { UserSchema } from 'entities/user';
import { LoginSchema } from 'features/auth-by-user-name';

export interface CounterState {
  value: number;
}

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}
