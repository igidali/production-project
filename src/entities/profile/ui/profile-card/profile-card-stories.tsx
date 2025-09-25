import { ComponentStory, ComponentMeta } from '@storybook/react';
import Avatar from 'shared/assets/tests/storybook.jpg';
import { Country, Currency } from 'shared/constants/common';
import { ProfileCard } from './profile-card';

export default {
  title: 'entities/profile-card',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
    avatar: Avatar,
  },
};

export const WithError = Template.bind({});
WithError.args = {
  error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
