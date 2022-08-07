import { useAppSelector } from '../../hooks';

export const usePromoFilmHook = () => {
  const { authorizationStatus, favoriteList } = useAppSelector(
    (state) => state
  );

  const userFilmsNumber = favoriteList ? favoriteList.length : 0;

  return {
    userFilmsNumber,
    authorizationStatus,
  };
};
