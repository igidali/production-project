import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-user-name';
import { userReducer } from '../../../../entities/user';
import { createReducerManager } from './reducer-manager';
import { StateSchema } from './state-schema';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
