import {useOutletContext} from 'react-router-dom';

import {useMovieDetails} from './hooks';

import { ActiveFilmType} from '../../types/FilmsListType';

function FilmOverview(): JSX.Element {
  const { filmInfo }: ActiveFilmType = useOutletContext();
  const { starringAdapted, ratingLevel } = useMovieDetails(filmInfo);
  const { scoresCount, rating, description, director } = filmInfo;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{scoresCount}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingLevel}</span>
          <span className="film-rating__count">{rating}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starringAdapted}</strong>
        </p>
      </div>
    </>
  );
}

export default FilmOverview;

