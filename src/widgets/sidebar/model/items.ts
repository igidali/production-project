import { SVGProps, VFC } from 'react';
import About from 'shared/assets/icons/about.svg';
import Main from 'shared/assets/icons/main.svg';
import Profile from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/route-config';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    Icon: Main,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    Icon: About,
    text: 'О сайте',
  },
  {
    path: RoutePath.profile,
    Icon: Profile,
    text: 'Профиль',
    authOnly: true,
  },
];
