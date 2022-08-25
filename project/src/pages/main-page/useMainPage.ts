import { useAppSelector } from '../../hooks';

import { AuthorizationStatus } from '../../components/const';

import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getFilmsList, getPromoFilm} from '../../store/films-process/selectors';

export const useMainPage = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filmsList = useAppSelector(getFilmsList);
  const promoFilm = useAppSelector(getPromoFilm);

  const isAllDataDownloaded =
    filmsList.length &&
    promoFilm &&
    authorizationStatus !== AuthorizationStatus.UNKNOWN;

  return { isAllDataDownloaded, filmsList, promoFilm };
};
