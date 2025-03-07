import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/button';
import { LangSwitcher } from 'shared/ui/lang-switcher';
import { ThemeSwitcher } from 'shared/ui/theme-switcher';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemsList = useMemo(
    () => SidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />),
    [collapsed],
  );

  return (
    <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>{itemsList}</div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
