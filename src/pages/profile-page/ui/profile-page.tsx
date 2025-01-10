import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { profileReducer } from '../../../entities/profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('Профиль')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
