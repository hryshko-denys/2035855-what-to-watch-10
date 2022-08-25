
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../services/const';
import {FilmProcess} from '../../types/state';
import {
  setActiveFilm,
  setCommentError,
  setFilmDataLoading,
} from '../action';

const initialState: FilmProcess = {
  isCommentError: false,
  activeFilm: null,
  isFilmDataLoading: true,
};

export const filmProcess = createSlice({
  name: NameSpace.Film,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setFilmDataLoading, (state, { payload }) => {
        state.isFilmDataLoading = payload;
      })
      .addCase(setCommentError, (state, { payload }) => {
        state.isCommentError = payload;
      })
      .addCase(setActiveFilm, (state, { payload }) => {
        state.activeFilm = payload;
      });
  }
});
