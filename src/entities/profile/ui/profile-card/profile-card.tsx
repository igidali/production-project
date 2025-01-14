import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import { Text } from 'shared/ui/text';
import { getProfileData } from '../../model/selectors/get-profile-data/get-profile-data';
import cls from './profile-card.module.scss';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('Ваше имя')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('Ваша фамилия')} className={cls.input} />
      </div>
    </div>
  );
};
