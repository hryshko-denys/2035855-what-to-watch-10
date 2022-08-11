import {
  FilmList,
  MainLogo,
  GenreList,
  PromoFilm,
  Loader,
} from '../../components';

import { useMainPage } from './useMainPage';

function MainPage(): JSX.Element {
  const { isAllDataDownloaded, filmsList, promoFilm } = useMainPage();

  return (
    <main>
      {isAllDataDownloaded && promoFilm ? (
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <PromoFilm promoFilm={promoFilm} />

            <GenreList />

            <FilmList filmsList={filmsList} />
          </section>

          <footer className="page-footer">
            <MainLogo isLight />

            <div className="copyright">
              <p>© 2022 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default MainPage;
