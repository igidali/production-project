import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button';
import { Input } from 'shared/ui/input';
import cls from './login-form.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" className={cls.input} placeholder={t('Введите username')} autofocus />
      <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
      <Button className={cls.LoginBtn}>{t('Войти')}</Button>
    </div>
  );
};
