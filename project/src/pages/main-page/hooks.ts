import { FilmsMock } from '../../mocks/types';

import { useAppSelector } from '../../hooks';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const useMoviePageHook = ({ filmsMock }: MoviePageProps) => {
  const userFilmsNumber = filmsMock.filter(
    ({ isInUsersList }) => isInUsersList
  ).length;

  const filmsList = useAppSelector((state) => state.filmsList);


  return { userFilmsNumber, filmsList };
};
