import { useEffect } from 'react';

import FilmCard from '../film-card';

import { useCurrentFilmPreview } from '../../hooks/useCurrentFilmPreview';
import { useAppDispatch } from '../../hooks';

import { FilmsListType } from '../../types/FilmsListType';

type FilmsListComponentProps = {
  filmsList: FilmsListType[];
};

function FilmList({ filmsList }: FilmsListComponentProps): JSX.Element {
  const {
    setFilmId,
    resetFilmId,
    activeFilmId,
    isShowMoreBtnShown,
    resetFilmsList,
    showMoreFilms,
    listToShow,
  } = useCurrentFilmPreview(filmsList);

  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(resetFilmsList());
    },
    [dispatch, resetFilmsList]
  );

  return (
    <>
      <div className="catalog__films-list">
        {listToShow.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            isActive={activeFilmId === film.id}
            setFilmId={setFilmId}
            resetFilmId={resetFilmId}
          />
        ))}
      </div>
      <div>
        {isShowMoreBtnShown && (
          <div className="catalog__more">
            <button
              onClick={() => dispatch(showMoreFilms())}
              className="catalog__button"
              type="button"
            >
              Show more
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FilmList;
