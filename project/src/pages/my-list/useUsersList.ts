import { useAppSelector } from '../../hooks';

import {getFilmsList} from '../../store/films-process/selectors';

export const useUsersList = () => {
  const filmsList = useAppSelector(getFilmsList);

  const userFilms = filmsList.filter(({ isFavorite }) => isFavorite);

  return {
    userFilms,
  };
};
