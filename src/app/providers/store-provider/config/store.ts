import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-user-name';
import { userReducer } from '../../../../entities/user';
import { StateSchema } from './state-schema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
