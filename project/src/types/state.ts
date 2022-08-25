import { store } from '../store/index.js';

import { AuthorizationStatus } from '../components/const';

import { FilmsListType, ActiveFilmType } from './FilmsListType';
import { UserData } from './auth-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmProcess = {
  isCommentError: boolean,
  isFilmDataLoading: boolean,
  activeFilm: null | ActiveFilmType,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  userData: null | UserData,
}
export type FilmsProcess = {
  activeGenre: string,
  activeFilmsCardsNumber: number,
  filmsList: FilmsListType[],
  promoFilm: null | FilmsListType,
}
