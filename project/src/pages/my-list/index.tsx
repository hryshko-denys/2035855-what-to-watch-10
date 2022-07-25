import { Link } from 'react-router-dom';

import { FilmCard, MainLogo } from '../../components';

import { FilmsMock } from '../../mocks/types';

import { useCurrentFilmPreview } from '../../hooks/useCurrentFilmPreview';


type MyListComponentProps = {
  usersList: FilmsMock[];
};

function MyList({ usersList }: MyListComponentProps): JSX.Element {
  const { setFilmId, resetFilmId, activeFilmId } = useCurrentFilmPreview();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <MainLogo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{usersList.length}</span>
        </h1>
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

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {usersList.map((film) => (
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

      <footer className="page-footer">
        <MainLogo isLight />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
