import { AxiosInstance } from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loadFilmsList,
  loadPromoFilm,
  requireAuthorization,
  redirectToRoute,
  setUserData,
  resetLogout,
  setFavoriteList,
  setFilmDataLoading,
  setActiveFilm,
  setCommentError,
  toggleFilmInUserList,
} from './action';

import { APIRoute } from '../services/const';

import { AppDispatch, State } from '../types/state';

import { saveToken } from '../services/token';

import { FilmsListType, FilmId, CommentFormRequest, FilmData } from '../types/FilmsListType';

import { AuthorizationStatus } from '../components/const';

import { UserData, AuthData } from '../types/auth-data';


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
>('data/loadPromoFilm', async (_arg, { dispatch, extra: api }) => {
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
  const { data: userData } = await api.post<UserData>(APIRoute.Login, {
    email,
    password,
  });
  saveToken(userData.token);

  dispatch(setUserData(userData));
  dispatch(requireAuthorization(AuthorizationStatus.AUTH));
  dispatch(redirectToRoute(APIRoute.Index));

  const { data } = await api.get<FilmsListType[]>(APIRoute.Favorite);
  dispatch(setFavoriteList(data));
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
  dispatch(redirectToRoute(APIRoute.Login));
});

export const sendComment = createAsyncThunk<
  void,
  CommentFormRequest,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/send-comment', async ({ data , id }, { dispatch, extra: api }) => {
  try {
    await api.post(`/comments/${id}`, { ...data });
    dispatch(redirectToRoute(`films/${id}`));
  } catch {
    dispatch(setCommentError(true));
  }
});

export const loadFilmData = createAsyncThunk<
  void,
  FilmId,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/setActiveFilm', async ({ id }, { dispatch, extra: api }) => {
  try {
    const [filmInfo, comments, similarFilms] = await Promise.all([api.get(`/films/${id}`), api.get(`/comments/${id}`), api.get(`/films/${id}/similar`)]);

    dispatch(
      setActiveFilm({
        filmInfo: filmInfo.data,
        comments: comments.data,
        similarFilms: similarFilms.data,
      })
    );
    dispatch(setFilmDataLoading(false));
  } catch {
    dispatch(redirectToRoute(APIRoute.NotFoundPage));
  }
});

export const changeFilmInUserList = createAsyncThunk<
  void,
  FilmData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/toggleFilmInUserList', async ({ filmId, status }, { dispatch, extra: api }) => {
  const { data: film } = await api.post<FilmsListType>(`/favorite/${filmId}/${status}`);

  dispatch(
    toggleFilmInUserList(film)
  );
});
