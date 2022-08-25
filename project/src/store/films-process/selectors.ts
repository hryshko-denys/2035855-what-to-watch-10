import {NameSpace} from '../../services/const';

import {State} from '../../types/state';
import {FilmsListType} from '../../types/FilmsListType';

export const getActiveGenre = (state: State): string => state[NameSpace.Films].activeGenre;
export const getActiveFilmsCardsNumber = (state: State): number => state[NameSpace.Films].activeFilmsCardsNumber;
export const getFilmsList = (state: State): FilmsListType[] => state[NameSpace.Films].filmsList;
export const getUserFilmList = (state: State): FilmsListType[] => state[NameSpace.Films].filmsList.filter(({ isFavorite }) => isFavorite);
export const getPromoFilm = (state: State): null | FilmsListType => state[NameSpace.Films].promoFilm;
