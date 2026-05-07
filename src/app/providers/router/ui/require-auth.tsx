import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserAuthData } from 'entities/user';
import { RoutePath } from 'shared/config/route-config';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main} />;
  }

  return children;
}
