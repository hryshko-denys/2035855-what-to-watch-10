import { Link } from 'react-router-dom';

import { FilmsListType } from '../../types/FilmsListType';

type MovieDetailsTopComponentProps = {
  currentFilm: FilmsListType;
  id: string;
  myListLength: number;
};

function MovieDetailsTop({ currentFilm, id, myListLength }: MovieDetailsTopComponentProps): JSX.Element {
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
          <Link
            to="/mylist"
            className="btn btn--list film-card__button"
            type="button"
          >
            <svg viewBox="0 0 19 20" width="19" height="20">
              <use xlinkHref="#add"></use>
            </svg>
            <span>My list</span>
            <span className="film-card__count">{myListLength}</span>
          </Link>
          <Link to={`/films/${id}/review`} className="btn film-card__button">
            Add review
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsTop;
