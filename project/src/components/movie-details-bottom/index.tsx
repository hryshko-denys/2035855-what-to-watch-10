import { Link } from 'react-router-dom';

import { FilmsMock } from '../../mocks/types';

type MovieDetailsBottomComponentProps = {
  currentFilm: FilmsMock;
}

function MovieDetailsBottom({ currentFilm }: MovieDetailsBottomComponentProps): JSX.Element {
  const { rating, descriptionText, director, starring } = currentFilm;

  return (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item film-nav__item--active">
                <Link to="/" className="film-nav__link">
                  Overview
                </Link>
              </li>
              <li className="film-nav__item">
                <Link to="/" className="film-nav__link">
                  Details
                </Link>
              </li>
              <li className="film-nav__item">
                <Link to="/" className="film-nav__link">
                  Reviews
                </Link>
              </li>
            </ul>
          </nav>

          <div className="film-rating">
            <div className="film-rating__score">
              {rating.score}
            </div>
            <p className="film-rating__meta">
              <span className="film-rating__level">Very good</span>
              <span className="film-rating__count">
                {rating.numberAmount}
              </span>
            </p>
          </div>

          <div className="film-card__text">
            <p>{descriptionText.firstPart}</p>

            <p>{descriptionText.secondPart}</p>

            <p className="film-card__director">
              <strong>Director: {director}</strong>
            </p>

            <p className="film-card__starring">
              <strong>Starring: {starring}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsBottom;
