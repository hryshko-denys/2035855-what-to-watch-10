import {AuthorizationStatus} from '../const';

export const usePrivateRoute = (authorizationStatus: AuthorizationStatus, validStatus?: AuthorizationStatus, invalidStatus?: AuthorizationStatus) => {
  let isValid = false;

  if (validStatus) {
    isValid = authorizationStatus === AuthorizationStatus[validStatus];
  }

  if (invalidStatus) {
    isValid = authorizationStatus !== AuthorizationStatus[invalidStatus];
  }

  return { isValid };
};
