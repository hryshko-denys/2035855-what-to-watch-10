import { FilmsMock } from '../../mocks/types';

import { useAppSelector } from '../../hooks';

import { showMoreFilms, resetFilmsList } from '../../store/action';

import { INITIAL_GENRE } from '../../store/const';

type MoviePageProps = {
  filmsMock: FilmsMock[];
};

export const useMoviePageHook = ({ filmsMock }: MoviePageProps) => {
  const { filmsList, activeFilmsCardsNumber, activeGenre } = useAppSelector(
    (state) => state
  );

  const userFilmsNumber = filmsMock.filter(
    ({ isInUsersList }) => isInUsersList
  ).length;

  const filteredListToShow =
    activeGenre === INITIAL_GENRE
      ? filmsMock
      : filmsMock.filter(({ genre }) => activeGenre === genre);

  const isShowMoreBtnShown = activeFilmsCardsNumber < filteredListToShow.length;

  return {
    userFilmsNumber,
    filmsList,
    isShowMoreBtnShown,
    showMoreFilms,
    resetFilmsList,
  };
};
