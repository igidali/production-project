import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/counter';

const MainPage = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <div>{t('Главная страница')}</div>
    </>
  );
};

export default MainPage;
