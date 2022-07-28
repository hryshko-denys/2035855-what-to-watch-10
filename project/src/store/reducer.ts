import { createReducer } from '@reduxjs/toolkit';

import { changeGenre, showMoreFilms, resetFilmsList } from './action';

import {
  INITIAL_GENRE,
  INITIAL_FILM_CARDS_NUMBER,
  INCREMENT_FILM_CARDS_NUMBER,
} from './const';

import filmsMock from '../mocks/films';

const initialFilmsList = filmsMock.slice(0, INITIAL_FILM_CARDS_NUMBER); // where I should define it?

const initialState = {
  activeGenre: INITIAL_GENRE,
  filmsList: initialFilmsList,
  activeFilmsCardsNumber: INITIAL_FILM_CARDS_NUMBER,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, { payload }) => {
      state.activeGenre = payload;

      const filteredList =
        payload === INITIAL_GENRE
          ? filmsMock
          : filmsMock.filter(({ genre }) => genre === payload);

      state.filmsList = filteredList.slice(0, state.activeFilmsCardsNumber);
    })
    .addCase(showMoreFilms, (state) => {
      state.activeFilmsCardsNumber += INCREMENT_FILM_CARDS_NUMBER;

      const filteredList =
      state.activeGenre === INITIAL_GENRE
        ? filmsMock
        : filmsMock.filter(({ genre }) => genre === state.activeGenre);

      state.filmsList = filteredList.slice(0, state.activeFilmsCardsNumber);
    })
    .addCase(resetFilmsList, (state) => {
      state.activeGenre = INITIAL_GENRE;
      state.filmsList = initialFilmsList;
      state.activeFilmsCardsNumber = INITIAL_FILM_CARDS_NUMBER;
    });
});

export { reducer };
