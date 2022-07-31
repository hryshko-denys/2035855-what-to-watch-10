import { createAction } from '@reduxjs/toolkit';

import { FilmsListType } from '../types/FilmsListType';

export const changeGenre = createAction(
  'genre/changeGenre',
  (genre: string) => ({
    payload: genre,
  })
);
export const showMoreFilms = createAction('genre/showMoreFilms');
export const resetFilmsList = createAction('genre/resetFilmsList');

export const loadFilmsList =
  createAction<FilmsListType[]>('data/loadFilmsList');
export const loadPromoFilm = createAction<FilmsListType>('data/loadPromoFilm');
export const setActiveFilmId = createAction(
  'data/setActiveFilmId',
  (id: number) => ({ payload: id })
);

export const redirectToRoute = createAction<string>('game/redirectToRoute');
