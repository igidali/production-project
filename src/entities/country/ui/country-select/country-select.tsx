import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from 'shared/constants/common';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/select';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Russia, content: 'RUS' },
  { value: Country.Armenia, content: 'RUB' },
  { value: Country.Belarus, content: 'BEL' },
  { value: Country.Kazakhstan, content: 'KAZ' },
  { value: Country.Ukraine, content: 'UKR' },
];

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      label={t('Укажите страну')}
      options={options}
      value={value}
      readonly={readonly}
    />
  );
});
