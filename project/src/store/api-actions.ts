import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loadFilmsList,
  loadPromoFilm,
  requireAuthorization,
  redirectToRoute,
  setUserData,
  resetLogout,
} from './action';

import { APIRoute } from '../services/const';

import { AppDispatch, State } from '../types/state';

import { saveToken } from '../services/token';

import { FilmsListType } from '../types/FilmsListType';
import { AuthorizationStatus } from '../components/const';
import { UserData, AuthData } from '../types/auth-data';

import { AppRoute } from '../types/routePath';

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

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(APIRoute.Login);

    dispatch(setUserData(data));
    dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async ({ email, password }, { dispatch, extra: api }) => {
  const {
    data: userData,
  } = await api.post<UserData>(APIRoute.Login, { email, password });
  saveToken(userData.token);

  dispatch(setUserData(userData));
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(redirectToRoute(AppRoute.Root));
});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);

  dispatch(resetLogout());
  dispatch(redirectToRoute(AppRoute.Login));
});
