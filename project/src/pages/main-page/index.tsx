import {
  FilmList,
  MainLogo,
  GenreList,
  PromoFilm,
  Loader,
} from '../../components';

import { useAppSelector } from '../../hooks';


function MainPage(): JSX.Element {
  const { filmsList, promoFilm } = useAppSelector((state) => state);

  return (
    <main>
      {filmsList.length > 0 && promoFilm ? (
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
              <p>© 2019 What to watch Ltd.</p>
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
