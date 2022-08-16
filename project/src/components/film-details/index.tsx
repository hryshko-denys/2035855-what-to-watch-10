import {useOutletContext} from 'react-router-dom';

import {useFilmDetails} from './useFilmDetails';

import {ActiveFilmType} from '../../types/FilmsListType';

function FilmDetails(): JSX.Element {
  const activeFilm: ActiveFilmType = useOutletContext();
  const { timeAdapted } = useFilmDetails(activeFilm.filmInfo);
  const { director, genre, released, starring } = activeFilm.filmInfo;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
            Director
          </strong>
          <span className="film-card__details-value">
            {director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
            Starring
          </strong>
          {starring.map((starringItem, index) => (
            <span key={starringItem} className="film-card__details-value">
              {starringItem}
            </span>
          ))}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
            Run Time
          </strong>
          <span className="film-card__details-value">{timeAdapted}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">
            Released
          </strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

export default FilmDetails;
