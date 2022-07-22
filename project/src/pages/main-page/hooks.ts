import { useState } from 'react';

import { FilmsMock } from '../../mocks/types';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const useMoviePageHook = ({ filmsMock }: MoviePageProps) => {
  const [activeGenre, seActiveGenre] = useState('All genres');

  const userFilmsNumber = filmsMock.filter((film) => film.isInUsersList).length;

  const activeGenreList = filmsMock.filter((film) =>
    activeGenre === 'All genres' ? true : film.genre === activeGenre
  );

  return { userFilmsNumber, activeGenre, activeGenreList, seActiveGenre };
};
