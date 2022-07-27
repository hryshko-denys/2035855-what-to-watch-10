import { createReducer } from '@reduxjs/toolkit';

import { changeGenre } from './action';

import { INITIAL_GENRE } from './const';

import filmsMock from '../mocks/films';

const initialState = {
  activeGenre: INITIAL_GENRE,
  filmsList: filmsMock,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.activeGenre = action.payload;
    state.filmsList =
      action.payload === INITIAL_GENRE
        ? filmsMock
        : filmsMock.filter((film) => film.genre === action.payload);
  });
});

export { reducer };
