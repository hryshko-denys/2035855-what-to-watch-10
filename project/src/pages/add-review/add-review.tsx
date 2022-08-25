import { Link } from 'react-router-dom';

import {
  MainLogo,
  AddReviewForm,
  Loader,
  SignOut,
  SignIn,
} from '../../components';

import { AuthorizationStatus } from '../../components/const';

import { useCurrentFilmHook } from '../../hooks/useCurrentFilmHook';

function AddReview(): JSX.Element {
  const { activeFilm, isFilmLoading, authorizationStatus } =
    useCurrentFilmHook();

  return (
    <section className="film-card film-card--full">
      {!isFilmLoading && activeFilm ? (
        <>
          <div className="film-card__header">
            <div className="film-card__bg">
              <img
                src={activeFilm.filmInfo.backgroundImage}
                alt={activeFilm.filmInfo.name}
              />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <MainLogo />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`/films/${activeFilm.filmInfo.id}`} className="breadcrumbs__link">
                      {activeFilm.filmInfo.name}
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
                src={activeFilm.filmInfo.posterImage}
                alt={activeFilm.filmInfo.name}
                width="218"
                height="327"
              />
            </div>
          </div>

          <div className="add-review">
            <AddReviewForm id={+activeFilm.filmInfo.id} />
          </div>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
}

export default AddReview;
