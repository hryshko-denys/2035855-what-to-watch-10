import FilmCard from '../film-card';

import { FilmsMock } from '../../mocks/types';

import { useFilmListHook } from './hooks';

type FilmsListComponentProps = {
  filmsMock: FilmsMock[];
};

function FilmList({ filmsMock }: FilmsListComponentProps): JSX.Element {
  const { setFilmId, resetFilmId, activeFilmId } = useFilmListHook();

  return (
    <div className="catalog__films-list">
      {filmsMock.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          isActive={activeFilmId === film.id}
          setFilmId={setFilmId}
          resetFilmId={resetFilmId}
        />
      ))}
    </div>
  );
}

export default FilmList;
