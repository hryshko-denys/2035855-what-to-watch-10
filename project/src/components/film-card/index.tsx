import { Link } from 'react-router-dom';

import { FilmsMock } from '../../mocks/types';

type FilmCardComponentProps = {
  film: FilmsMock;
};

function FilmCard({ film }: FilmCardComponentProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <Link to={`/films/${film.id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          <img src={film.img} alt={film.name} width="280" height="175" />
        </div>
        <h3 className="small-film-card__title">
          <a className="small-film-card__link" href="film-page.html">
            {film.name}
          </a>
        </h3>
      </Link>
    </article>
  );
}

export default FilmCard;
