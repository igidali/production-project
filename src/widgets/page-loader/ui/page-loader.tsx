import { FC } from "react";
import { classNames } from "shared/lib/classnames/classnames";
import { Loader } from "shared/ui/loader";
import cls from "./page-loader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
