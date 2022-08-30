import { useState } from 'react';

import { useAppSelector } from './index';

import { showMoreFilms, resetFilmsList } from '../store/action';

import { FilmsListType } from '../types/FilmsListType';

import { INITIAL_GENRE } from '../store/const';

import {getActiveFilmsCardsNumber, getActiveGenre} from '../store/films-process/selectors';

type ActiveFilmType = number | null;

export const useCurrentFilmPreview = (filmsList: FilmsListType[]) => {
  const activeGenre = useAppSelector(getActiveGenre);
  const activeFilmsCardsNumber = useAppSelector(getActiveFilmsCardsNumber);

  const [activeFilmId, setActiveFilmId] = useState<ActiveFilmType>(null);

  const filteredListByGenre =
    activeGenre === INITIAL_GENRE
      ? filmsList
      : filmsList.filter(({ genre }) => activeGenre === genre);

  const listToShow = filteredListByGenre.slice(0, activeFilmsCardsNumber);

  const isShowMoreBtnShown = activeFilmsCardsNumber < filteredListByGenre.length;

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleSetFilmId = (id: number) => {
    timeoutId = setTimeout(() => setActiveFilmId(id), 2000);
  };

  const handleResetFilmId = () => {
    clearTimeout(timeoutId);
    setActiveFilmId(null);
  };

  return {
    handleSetFilmId,
    handleResetFilmId,
    activeFilmId,
    isShowMoreBtnShown,
    resetFilmsList,
    showMoreFilms,
    listToShow,
  };
};
