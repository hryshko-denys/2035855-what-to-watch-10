import {store} from '../store/index.js';

import { FilmsListType } from './FilmsListType';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialStateType = {
  activeGenre: string,
  filmsList: FilmsListType[],
  activeFilmsCardsNumber: number,
  promoFilm: null | FilmsListType,
  isInitialStateLoading: boolean,
  activeFilmId: null | number,
}
