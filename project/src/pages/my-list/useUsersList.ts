import { useAppSelector } from '../../hooks';

export const useUsersList = () => {
  const { filmsList } = useAppSelector((state) => state);

  const userFilms = filmsList.filter(({ isFavorite }) => isFavorite);

  return {
    userFilms,
  };
};
