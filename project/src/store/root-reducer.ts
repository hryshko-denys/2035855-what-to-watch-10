import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../services/const';
import {filmProcess} from './film-process/film-process';
import {filmsProcess} from './films-process/films-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
