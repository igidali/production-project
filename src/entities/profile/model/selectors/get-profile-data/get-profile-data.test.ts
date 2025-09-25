import { StateSchema } from 'app/providers/store-provider';
import { Country, Currency } from 'shared/constants/common';
import { getProfileData } from './get-profile-data';

describe('getProfileData.test', () => {
  test('should return error', () => {
    const data = {
      first: 'first',
      lastname: 'lastname',
      age: 22,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin',
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
