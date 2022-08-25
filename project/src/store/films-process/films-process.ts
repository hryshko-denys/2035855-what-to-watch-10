
import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../services/const';
import {FilmsProcess} from '../../types/state';
import {INCREMENT_FILM_CARDS_NUMBER, INITIAL_FILM_CARDS_NUMBER, INITIAL_GENRE} from '../const';
import {FilmsListType} from '../../types/FilmsListType';
import {
  changeGenre,
  loadFilmsList,
  loadPromoFilm,
  resetFilmsList,
  showMoreFilms,
  toggleFilmInUserList
} from '../action';

const initialState: FilmsProcess = {
  activeGenre: INITIAL_GENRE,
  activeFilmsCardsNumber: INITIAL_FILM_CARDS_NUMBER,
  filmsList: [] as FilmsListType[],
  promoFilm: null,
};

export const filmsProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeGenre, (state, { payload }) => {
        state.activeGenre = payload;
      })
      .addCase(resetFilmsList, (state) => {
        state.activeGenre = INITIAL_GENRE;
        state.activeFilmsCardsNumber = INITIAL_FILM_CARDS_NUMBER;
      })
      .addCase(showMoreFilms, (state) => {
        state.activeFilmsCardsNumber += INCREMENT_FILM_CARDS_NUMBER;
      })
      .addCase(loadFilmsList, (state, action) => {
        state.filmsList = action.payload;
      })
      .addCase(loadPromoFilm, (state, { payload }) => {
        state.promoFilm = payload;
      })
      .addCase(toggleFilmInUserList, (state, { payload }) => {
        state.filmsList = state.filmsList.map((film) => film.id === payload.id ? payload : film);
      });
  }
});
