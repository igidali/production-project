import { classNames } from 'shared/lib/classnames/classnames';
import cls from './navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(cls.Navbar, {}, [className])}>
    <div className={cls.links}>/</div>
  </div>
);
