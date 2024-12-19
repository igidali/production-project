import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/theme-provider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Modal } from './modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Modal',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Modal',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
