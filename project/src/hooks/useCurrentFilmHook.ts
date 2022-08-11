import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../hooks';

import { loadFilmData } from '../store/api-actions';

export const useCurrentFilmHook = () => {
  const { activeFilm, authorizationStatus } = useAppSelector((state) => state);
  const [isFilmLoading, setIsFilmLoading] = useState(true);

  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    !activeFilm && dispatch(loadFilmData({ id }));

    setIsFilmLoading(false);
  }, [activeFilm]);

  return { activeFilm, isFilmLoading, authorizationStatus };
};
