import { FC } from "react";
import { classNames } from "shared/lib/classnames/classnames";
import cls from "./page-error.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/button";

interface PageErrorProps {
  className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t("Произошла непредвиденная ошибка")}</p>
      <Button onClick={reloadPage}>{t("Обновить страницу")}</Button>
    </div>
  );
};
