import { Tabs } from '../index';

import {ActiveFilmType} from '../../types/FilmsListType';
import {Outlet} from 'react-router-dom';

type MovieDetailsBottomComponentProps = {
  currentFilm: ActiveFilmType;
};

function MovieDetailsBottom({
  currentFilm,
}: MovieDetailsBottomComponentProps): JSX.Element {
  const {
    id,
    posterImage,
    name,
  } = currentFilm.filmInfo;

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <Tabs filmId={id} />

          <Outlet context={currentFilm} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsBottom;
