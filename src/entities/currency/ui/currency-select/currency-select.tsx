import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from 'shared/constants/common';
import { classNames } from 'shared/lib/classNames';
import { Select } from 'shared/ui/select';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: 'RUB' },
  { value: Currency.EUR, content: 'EUR' },
  { value: Currency.USD, content: 'USD' },
];

export const CurrencySelect = memo(({ className, value, onChange, readonly }: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={classNames('', {}, [className])}
      onChange={onChangeHandler}
      label={t('Укажите валюту')}
      options={options}
      value={value}
      readonly={readonly}
    />
  );
});
