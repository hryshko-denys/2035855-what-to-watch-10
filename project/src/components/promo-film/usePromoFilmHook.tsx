import { useAppSelector } from '../../hooks';

export const usePromoFilmHook = () => {
  const { filmsList, promoFilm } = useAppSelector(
    (state) => state
  );

  const userFilmsNumber = filmsList.filter(
    ({ isFavorite }) => isFavorite
  ).length;

  return {
    userFilmsNumber,
    promoFilm,
  };
};
