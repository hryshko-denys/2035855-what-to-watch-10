import { useParams } from 'react-router-dom';

import { FilmsMock } from '../../mocks/types';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const usePlayerHook = ({ filmsMock }: MoviePageProps) => {
  const { id } = useParams();

  const currentFilm = id ? filmsMock.find((film) => film.id === id) : null;

  return { currentFilm, id };
};
