import { useState } from 'react';

import { FilmsMock } from '../../mocks/types';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const useMoviePageHook = ({ filmsMock }: MoviePageProps) => {
  const defaultValue = 'All genres';

  const [activeGenre, seActiveGenre] = useState(defaultValue);

  const userFilmsNumber = filmsMock.filter(
    ({ isInUsersList }) => isInUsersList
  ).length;

  const activeGenreList =
    activeGenre === defaultValue
      ? filmsMock
      : filmsMock.filter(({ genre }) => genre === activeGenre);

  return { userFilmsNumber, activeGenre, activeGenreList, seActiveGenre };
};
