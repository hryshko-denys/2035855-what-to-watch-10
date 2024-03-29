import { Link } from 'react-router-dom';

import { FilmsListType } from '../../types/FilmsListType';

import { VideoPlayer } from '../index';

type FilmCardComponentProps = {
  film: FilmsListType;
  isActive: boolean;
  handleSetFilmId: (filmId: number) => void;
  handleResetFilmId: () => void;
};

function FilmCard({
  film,
  isActive,
  handleSetFilmId,
  handleResetFilmId,
}: FilmCardComponentProps): JSX.Element {
  const { id, previewImage, name, previewVideoLink, posterImage } = film;

  return (
    <article
      onMouseEnter={() => handleSetFilmId(id)}
      onMouseLeave={handleResetFilmId}
      className="small-film-card catalog__films-card"
    >
      {isActive ? (
        <VideoPlayer id={id} videoSrc={previewVideoLink} posterImage={posterImage} />
      ) : (
        <div className="small-film-card__link">
          <div className="small-film-card__image">
            <img src={previewImage} alt={name} width="280" height="175" />
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
