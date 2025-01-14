import { NavigateOptions, To } from 'react-router-dom';
import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { loginReducer } from 'features/auth-by-user-name';
import { $api } from 'shared/api';
import { userReducer } from '../../../../entities/user';
import { createReducerManager } from './reducer-manager';
import { StateSchema } from './state-schema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    loginForm: loginReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
