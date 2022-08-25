import {NameSpace} from '../../services/const';

import {State} from '../../types/state';
import {ActiveFilmType} from '../../types/FilmsListType';

export const getIsCommentError = (state: State): boolean => state[NameSpace.Film].isCommentError;
export const getActiveFilm = (state: State): null | ActiveFilmType => state[NameSpace.Film].activeFilm;
export const getIsFilmDataLoading = (state: State): boolean => state[NameSpace.Film].isFilmDataLoading;
