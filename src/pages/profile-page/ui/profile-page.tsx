import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { ProfileCard, fetchProfileData, profileReducer } from '../../../entities/profile';

const reducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div>{t('Профиль')}</div>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
