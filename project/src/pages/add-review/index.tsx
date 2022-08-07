import { Link } from 'react-router-dom';

import {
  MainLogo,
  FormAddReview,
  Loader,
  SignOut,
  SignIn,
} from '../../components';

import { AuthorizationStatus } from '../../components/const';

import { useCurrentFilmHook } from '../../hooks/useCurrentFilmHook';

function AddReview(): JSX.Element {
  const { activeFilm, isFilmLoading, authorizationStatus } =
    useCurrentFilmHook();
  const filmName = activeFilm ? activeFilm.filmInfo.name : '';
  const filmId = activeFilm ? activeFilm.filmInfo.id : '';

  return (
    <section className="film-card film-card--full">
      {!isFilmLoading && filmName ? (
        <>
          <div className="film-card__header">
            <div className="film-card__bg">
              <img
                src="img/bg-the-grand-budapest-hotel.jpg"
                alt="The Grand Budapest Hotel"
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <MainLogo />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${filmId}`} className="breadcrumbs__link">
                      {filmName}
                    </Link>
                  </li>
                  <li className="breadcrumbs__item">
                    <Link to="/" className="breadcrumbs__link">Add review</Link>
                  </li>
                </ul>
              </nav>

              <ul className="user-block">
                {authorizationStatus !== AuthorizationStatus.AUTH ? (
                  <SignIn />
                ) : (
                  <SignOut />
                )}
              </ul>
            </header>

            <div className="film-card__poster film-card__poster--small">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>
          </div>

          <div className="add-review">
            <FormAddReview id={+filmId} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default AddReview;
