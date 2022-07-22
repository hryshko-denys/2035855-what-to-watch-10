import { Navigate } from 'react-router-dom';

import { AuthorizationStatus } from '../const';

type PrivateRoutesProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRoutesProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? children
      : <Navigate to='/login' />

  );
}

export default PrivateRoute;
