import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import ProfilePage from './profile-page';

export default {
  title: 'pages/profile-page',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...(args as {})} />;
export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
