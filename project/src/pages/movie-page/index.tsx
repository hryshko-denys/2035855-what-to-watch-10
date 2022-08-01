import { Link } from 'react-router-dom';

import {
  FilmList,
  MainLogo,
  MovieDetailsTop,
  MovieDetailsBottom,
} from '../../components';

import { useMoviePageHook } from './hooks';

function MoviePage(): JSX.Element {
  const { currentFilm, myList, moreLikeThisList, id } = useMoviePageHook();

  return (
    <>
      {currentFilm && id ? (
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img
                src={currentFilm.backgroundImage}
                alt={currentFilm.name}
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
                  <Link to="/" className="user-block__link">
                    Sign out
                  </Link>
                </li>
              </ul>
            </header>

            <MovieDetailsTop
              currentFilm={currentFilm}
              id={id}
              myListLength={myList.length}
            />
          </div>

          <MovieDetailsBottom currentFilm={currentFilm} />
        </section>
      ) : null}

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmList filmsList={moreLikeThisList} />
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
