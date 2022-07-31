import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { loadFilmsList, loadPromoFilm } from './action';

import { APIRoute } from '../services/const';

import { AppDispatch, State } from '../types/state';
import { FilmsListType } from '../types/FilmsListType';

export const fetchFilmsListAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadFilmsList', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<FilmsListType[]>(APIRoute.Films);

  dispatch(loadFilmsList(data));
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/loadFilmsList', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<FilmsListType>(APIRoute.Promo);

  dispatch(loadPromoFilm(data));
});
