import { useParams } from 'react-router-dom';

import { useAppSelector } from '../../hooks';


export const useMoviePageHook = () => {
  const { filmsList } = useAppSelector((state) => state);
  const { id } = useParams();

  const currentFilm = id ? filmsList.find((film) => film.id === +id) : null;

  const myList = filmsList.filter(({ isFavorite }) => isFavorite);

  const moreLikeThisList = id
    ? filmsList.filter((film) => film.id !== +id).slice(0, 4)
    : [];

  return { currentFilm, myList, moreLikeThisList, id };
};
