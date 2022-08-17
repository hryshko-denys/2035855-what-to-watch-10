import {
  FilmList,
  GenreList,
  PromoFilm,
  Loader,
  Footer,
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

          <Footer isLight />
        </div>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default MainPage;
