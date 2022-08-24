import {FilmCard, Footer, MainLogo, SignOut} from '../../components';

import { useCurrentFilmPreview } from '../../hooks/useCurrentFilmPreview';

import { useUsersList } from './useUsersList';

function MyList(): JSX.Element {
  const { userFilms } = useUsersList();
  const { setFilmId, resetFilmId, activeFilmId } = useCurrentFilmPreview(userFilms);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <MainLogo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{userFilms.length}</span>
        </h1>
        <SignOut />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {userFilms.map((film) => (
            <FilmCard
              key={film.id}
              film={film}
              isActive={activeFilmId === film.id}
              setFilmId={setFilmId}
              resetFilmId={resetFilmId}
            />
          ))}
        </div>
      </section>

      <Footer isLight />
    </div>
  );
}

export default MyList;
