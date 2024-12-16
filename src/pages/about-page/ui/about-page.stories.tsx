import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/theme-decorator/theme-decorator";
import { Theme } from "app/providers/theme-provider";
import AboutPage from "./about-page";

export default {
  title: "pages/about-page",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
  <AboutPage {...(args as {})} />
);
export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
