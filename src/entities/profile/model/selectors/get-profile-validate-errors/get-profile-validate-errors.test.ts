import { StateSchema } from 'app/providers/store-provider';
import { ValidateProfileError } from '../../types/profile';
import { getProfileValidateErrors } from './get-profile-validate-errors';

describe('getProfileValidateErrors.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
