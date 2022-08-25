import {
  FilmList,
  MainLogo,
  MovieDetailsTop,
  MovieDetailsBottom,
  Loader,
  SignOut,
  SignIn,
  Footer,
} from '../../components';

import { AuthorizationStatus } from '../../components/const';

import { useMoviePageHook } from './hooks';


function MoviePage(): JSX.Element {
  const { isFilmDataLoading, activeFilm, authorizationStatus } = useMoviePageHook();

  const isUserUnAuthorized = authorizationStatus !== AuthorizationStatus.AUTH;

  return (
    <>
      {!isFilmDataLoading && activeFilm ? (
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img
                src={activeFilm.filmInfo.backgroundImage}
                alt={activeFilm.filmInfo.name}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <MainLogo />

              <ul className="user-block">
                <li className="user-block__item">
                  {isUserUnAuthorized ? (
                    <SignIn />
                  ) : (
                    <SignOut />
                  )}
                </li>
              </ul>
            </header>

            <MovieDetailsTop
              currentFilm={activeFilm.filmInfo}
              id={activeFilm.filmInfo.id}
            />
          </div>

          <MovieDetailsBottom currentFilm={activeFilm} />
        </section>
      ) : (
        <Loader />
      )}

      {!isFilmDataLoading && activeFilm && (
        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <FilmList filmsList={activeFilm.similarFilms} />
          </section>

          <Footer isLight />
        </div>
      )}
    </>
  );
}

export default MoviePage;
