import { Navigate } from 'react-router-dom';

import { usePrivateRoute } from './usePrivateRoute';

import {AuthorizationStatus} from '../../components/const';

type PrivateRoutesProps = {
  authorizationStatus: AuthorizationStatus;
  navigatePath: string;
  validStatus?: AuthorizationStatus;
  invalidStatus?: AuthorizationStatus;
  children: JSX.Element;
};

function PrivateRoute({
  authorizationStatus,
  navigatePath,
  validStatus,
  invalidStatus,
  children,
}: PrivateRoutesProps): JSX.Element {
  const { isValid } = usePrivateRoute(
    authorizationStatus,
    validStatus,
    invalidStatus
  );
  return isValid ? children : <Navigate to={navigatePath} />;
}

export default PrivateRoute;
