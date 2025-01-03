import { addDecorator } from '@storybook/react';
import { Theme } from '../../src/app/providers/theme-provider';
import { RouterDecorator } from '../../src/shared/config/storybook/router-decorator/router-decorator';
import { StyleDecorator } from '../../src/shared/config/storybook/style-decorator/style-decorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/theme-decorator/theme-decorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/translation-decorator/translation-decorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
