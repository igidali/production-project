import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      {t('Главная страница')}
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Input onChange={onChange} value={value} placeholder="Введите текст" />
    </div>
  );
};

export default MainPage;
