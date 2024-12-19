import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/route-config';
import { PageLoader } from 'widgets/page-loader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
      ))}
      <Route />
    </Routes>
  </Suspense>
);
