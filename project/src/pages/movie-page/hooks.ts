import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';

import { setFilmDataLoading } from '../../store/action';
import { loadFilmData } from '../../store/api-actions';

import {getActiveFilm, getIsFilmDataLoading} from '../../store/film-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

export const useMoviePageHook = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilmDataLoading(true));
    dispatch(loadFilmData({ id }));

    return () => {
      dispatch(setFilmDataLoading(true));
    };
  }, [dispatch, id]);

  const activeFilm = useAppSelector(getActiveFilm);
  const isFilmDataLoading = useAppSelector(getIsFilmDataLoading);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return { isFilmDataLoading, activeFilm, authorizationStatus };
};
