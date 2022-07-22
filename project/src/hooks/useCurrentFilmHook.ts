import { useParams } from 'react-router-dom';

import { FilmsMock } from '../mocks/types';

type AddReviewProps = {
  filmsMock: FilmsMock[];
};

export const useCurrentFilmHook = ({ filmsMock }: AddReviewProps) => {
  const { id } = useParams();

  const currentFilm = id ? filmsMock.find((film) => film.id === id) : null;

  return { currentFilm, id };
};
