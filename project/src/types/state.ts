import { store } from '../store/index.js';

import { AuthorizationStatus } from '../components/const';

import { FilmsListType } from './FilmsListType';
import { UserData } from './auth-data.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  activeGenre: string,
  filmsList: FilmsListType[],
  activeFilmsCardsNumber: number,
  promoFilm: null | FilmsListType,
  isInitialStateLoading: boolean,
  activeFilmId: null | number,
  authorizationStatus: AuthorizationStatus,
  userData: null | UserData,
}
