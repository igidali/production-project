import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/store-provider';
import { loginReducer } from 'features/auth-by-user-name';
import { ReducersList } from 'shared/lib/components';
import { profileReducer } from '../../../../entities/profile';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
