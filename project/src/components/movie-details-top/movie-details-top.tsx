import { Link } from 'react-router-dom';

import {MyListBtn} from '../index';

import { FilmsListType } from '../../types/FilmsListType';

import { useAppSelector } from '../../hooks';

import {getAuthorizationStatus} from '../../store/user-process/selectors';

type MovieDetailsTopComponentProps = {
  currentFilm: FilmsListType;
  id: number;
};

function MovieDetailsTop({
  currentFilm,
  id,
}: MovieDetailsTopComponentProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const { name, genre, released } = currentFilm;

  return (
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{genre}</span>
          <span className="film-card__year">{released}</span>
        </p>

        <div className="film-card__buttons">
          <Link
            to={`/player/${id}`}
            className="btn btn--play film-card__button"
            type="button"
          >
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </Link>
          {authorizationStatus === 'AUTH' && (
            <>
              <MyListBtn id={id} />
              <Link
                to={`/films/${id}/review`}
                className="btn film-card__button"
              >
                Add review
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsTop;
