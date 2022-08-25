import {combineReducers} from '@reduxjs/toolkit';

import {filmProcess} from './film-process/film-process';
import {filmsProcess} from './films-process/films-process';
import {userProcess} from './user-process/user-process';

import {NameSpace} from '../services/const';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
