import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18n-for-test';

interface ComponentRenderOptions {
  route?: string;
}

export function ComponentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>,
  );
}
