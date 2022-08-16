import { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';

import { setFilmDataLoading } from '../../store/action';
import { loadFilmData } from '../../store/api-actions';

export const useMoviePageHook = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setFilmDataLoading(true));
    dispatch(loadFilmData({ id }));

    return () => {
      dispatch(setFilmDataLoading(true));
    };
  }, [id]);

  const { isFilmDataLoading, activeFilm, authorizationStatus } = useAppSelector(
    (state) => state
  );

  return { isFilmDataLoading, activeFilm, authorizationStatus };
};
