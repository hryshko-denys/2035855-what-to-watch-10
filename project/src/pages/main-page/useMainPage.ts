import { useAppSelector } from '../../hooks';

import { AuthorizationStatus } from '../../components/const';

export const useMainPage = () => {
  const { filmsList, promoFilm, authorizationStatus } = useAppSelector(
    (state) => state
  );

  const isAllDataDownloaded =
    filmsList.length > 0 &&
    promoFilm &&
    authorizationStatus !== AuthorizationStatus.UNKNOWN;

  return { isAllDataDownloaded, filmsList, promoFilm };
};
