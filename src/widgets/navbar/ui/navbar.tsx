import { classNames } from "shared/lib/classnames/classnames";
import cls from "./navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/app-link/app-link";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
