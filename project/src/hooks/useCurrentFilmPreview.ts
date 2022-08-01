import { useState } from 'react';

import { useAppSelector } from '../hooks';

import { showMoreFilms, resetFilmsList } from '../store/action';

import { FilmsListType } from '../types/FilmsListType';

import { INITIAL_GENRE } from '../store/const';

type ActiveFilmType = number | null;

export const useCurrentFilmPreview = (filmsList: FilmsListType[]) => {
  const { activeGenre, activeFilmsCardsNumber } = useAppSelector(
    (state) => state
  );
  const [activeFilmId, setActiveFilmId] = useState<ActiveFilmType>(null);

  const filteredListByGenre =
    activeGenre === INITIAL_GENRE
      ? filmsList
      : filmsList.filter(({ genre }) => activeGenre === genre);

  const listToShow = filteredListByGenre.slice(0, activeFilmsCardsNumber);

  const isShowMoreBtnShown = activeFilmsCardsNumber < filteredListByGenre.length;

  let timeoutId: ReturnType<typeof setTimeout>;

  const setFilmId = (id: number) => {
    timeoutId = setTimeout(() => setActiveFilmId(id), 2000);
  };

  const resetFilmId = () => {
    clearTimeout(timeoutId);
    setActiveFilmId(null);
  };

  return {
    setFilmId,
    resetFilmId,
    activeFilmId,
    isShowMoreBtnShown,
    resetFilmsList,
    showMoreFilms,
    listToShow,
  };
};
