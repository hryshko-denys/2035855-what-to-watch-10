import { useState } from 'react';

import FilmCard from '../film-card';

import { FilmsMock } from '../../mocks/types';

type FilmsListComponentProps = {
  filmsMock: FilmsMock[];
}

function FilmList({ filmsMock }: FilmsListComponentProps): JSX.Element {
  // task #5
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeFilmId, setActiveFilmId] = useState();

  return (
    <div className="catalog__films-list">
      {filmsMock.map((film) => <FilmCard key={film.id} film={film} />)}
    </div>
  );
}

export default FilmList;
