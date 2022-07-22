import { Link } from 'react-router-dom';

import { FilmList, MainLogo } from '../../components';

import { FilmsMock } from '../../mocks/types';

import { useMoviePageHook } from './hooks';

type MoviePageComponentProps = {
  filmsMock: FilmsMock[];
};

function MoviePage({ filmsMock }: MoviePageComponentProps): JSX.Element {
  const { currentFilm, myList, moreLikeThisList, id } = useMoviePageHook({ filmsMock });

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <MainLogo />

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <Link to="/" className="user-block__link">Sign out</Link>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">{currentFilm?.year}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${currentFilm?.id}`}
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
                  <span className="film-card__count">{myList.length}</span>
                </Link>
                <Link
                  to={`/films/${id}/review`}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

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
                  {currentFilm?.rating.score}
                </div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">
                    {currentFilm?.rating.numberAmount}
                  </span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm?.descriptionText.firstPart}</p>

                <p>{currentFilm?.descriptionText.secondPart}</p>

                <p className="film-card__director">
                  <strong>Director: {currentFilm?.director}</strong>
                </p>

                <p className="film-card__starring">
                  <strong>Starring: {currentFilm?.starring}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList filmsMock={moreLikeThisList} />
        </section>

        <footer className="page-footer">
          <MainLogo isLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
