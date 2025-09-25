import { Country, Currency } from 'shared/constants/common';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validate-profile-data';

const data = {
  first: 'first',
  lastname: 'lastname',
  age: 22,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
};

jest.mock('axios');

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = await validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = await validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = await validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = await validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', async () => {
    const result = await validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
