import {useAppDispatch, useAppSelector} from '../../hooks';

import {useMemo} from 'react';

import {changeFilmInUserList} from '../../store/api-actions';

import {getUserFilmList} from '../../store/films-process/selectors';

export const useMyListBtn = (filmId: number) => {
  const favoriteList = useAppSelector(getUserFilmList);
  const dispatch = useAppDispatch();

  const isFavorite = useMemo(() => {
    if (favoriteList) {
      return favoriteList.some(({id}) => id === filmId);
    }
  }, [favoriteList, filmId]);

  const handleToggleMyList = () => {
    const status = isFavorite ? 0 : 1;

    dispatch(changeFilmInUserList({filmId, status}));
  };

  return {
    favoriteList,
    isFavorite,
    handleToggleMyList,
  };
};
