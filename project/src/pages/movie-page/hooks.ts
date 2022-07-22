import { useParams } from 'react-router-dom';

import { FilmsMock } from '../../mocks/types';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const useMoviePageHook = ({ filmsMock }: MoviePageProps) => {
  const { id } = useParams();

  const currentFilm = id ? filmsMock.find((film) => film.id === id) : null;

  const myList = filmsMock.filter(({ isInUsersList }) => isInUsersList);

  const moreLikeThisList = id
    ? filmsMock.filter((film) => film.id !== id).slice(0, 4)
    : [];

  return { currentFilm, myList, moreLikeThisList, id };
};
