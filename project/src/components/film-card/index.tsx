import { Link } from 'react-router-dom';

import { VideoPlayer } from '../index';

import { FilmsMock } from '../../mocks/types';

type FilmCardComponentProps = {
  film: FilmsMock;
  isActive: boolean;
  setFilmId: (filmId: string) => void;
  resetFilmId: () => void;
};

function FilmCard({
  film,
  isActive,
  setFilmId,
  resetFilmId,
}: FilmCardComponentProps): JSX.Element {
  const { id, img, name, video } = film;

  return (
    <article
      onMouseEnter={() => setFilmId(id)}
      onMouseLeave={() => resetFilmId()}
      className="small-film-card catalog__films-card"
    >
      {isActive ? (
        <VideoPlayer videoSrc={video} posterImage={img} />
      ) : (
        <div className="small-film-card__link">
          <div className="small-film-card__image">
            <img src={img} alt={name} width="280" height="175" />
          </div>
          <h3 className="small-film-card__title">
            <Link to={`/films/${id}`} className="small-film-card__link">
              {name}
            </Link>
          </h3>
        </div>
      )}
    </article>
  );
}

export default FilmCard;
