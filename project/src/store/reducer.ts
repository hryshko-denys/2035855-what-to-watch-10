import { createReducer } from '@reduxjs/toolkit';

import { AuthorizationStatus } from '../components/const';

import {
  changeGenre,
  showMoreFilms,
  resetFilmsList,
  loadFilmsList,
  loadPromoFilm,
  requireAuthorization,
  setUserData,
  resetLogout,
  setFavoriteList,
  setFilmDataLoading,
  setActiveFilm,
  setCommentError,
} from './action';

import {
  INITIAL_GENRE,
  INITIAL_FILM_CARDS_NUMBER,
  INCREMENT_FILM_CARDS_NUMBER,
} from './const';

import { FilmsListType } from '../types/FilmsListType';
import { InitialStateType } from '../types/state';

const initialState: InitialStateType = {
  activeGenre: INITIAL_GENRE,
  filmsList: [] as FilmsListType[],
  activeFilmsCardsNumber: INITIAL_FILM_CARDS_NUMBER,
  promoFilm: null,
  isInitialStateLoading: true,
  favoriteList: null,
  isCommentError: false,

  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: null,

  activeFilm: null,
  isFilmDataLoading: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.activeGenre = payload;
    })
    .addCase(showMoreFilms, (state) => {
      state.activeFilmsCardsNumber += INCREMENT_FILM_CARDS_NUMBER;
    })
    .addCase(resetFilmsList, (state) => {
      state.activeGenre = INITIAL_GENRE;
      state.activeFilmsCardsNumber = INITIAL_FILM_CARDS_NUMBER;
    })
    .addCase(loadFilmsList, (state, action) => {
      state.filmsList = action.payload;
    })
    .addCase(loadPromoFilm, (state, { payload }) => {
      state.promoFilm = payload;
    })
    .addCase(setUserData, (state, { payload }) => {
      state.userData = payload;
    })
    .addCase(setFavoriteList, (state, { payload }) => {
      state.favoriteList = payload;
    })
    .addCase(resetLogout, (state) => {
      state.userData = null;
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setFilmDataLoading, (state, { payload }) => {
      state.isFilmDataLoading = payload;
    })
    .addCase(setCommentError, (state, { payload }) => {
      state.isCommentError = payload;
    })
    .addCase(setActiveFilm, (state, { payload }) => {
      state.activeFilm = payload;
    });
});

export { reducer };
