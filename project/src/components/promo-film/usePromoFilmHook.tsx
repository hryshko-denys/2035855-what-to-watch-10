import { useAppSelector } from '../../hooks';

import {getAuthorizationStatus} from '../../store/user-process/selectors';

export const usePromoFilmHook = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return {
    authorizationStatus,
  };
};
