import { useAppSelector } from '../../hooks';

export const usePromoFilmHook = () => {
  const { filmsList, authorizationStatus } = useAppSelector(
    (state) => state
  );

  const userFilmsNumber = filmsList.filter(
    ({ isFavorite }) => isFavorite
  ).length;

  return {
    userFilmsNumber,
    authorizationStatus,
  };
};
