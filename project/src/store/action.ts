import { createAction } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../components/const';
import { UserData } from '../types/auth-data';
import { FilmsListType, ActiveFilmType } from '../types/FilmsListType';

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
export const setUserData = createAction<UserData>('data/setUserData');
export const setFavoriteList = createAction<FilmsListType[]>(
  'data/setFavoriteList'
);
export const setActiveFilm = createAction<ActiveFilmType>('data/setActiveFilm');
export const setCommentError = createAction<boolean>('data/setCommentError');
export const setFilmDataLoading = createAction<boolean>(
  'data/setFilmDataLoading'
);

export const redirectToRoute = createAction<string>('game/redirectToRoute');
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const resetLogout = createAction('user/resetLogout');
