import {useOutletContext} from 'react-router-dom';

import {ActiveFilmType} from '../../types/FilmsListType';

import FilmComment from '../film-comment';
import {useFilmReviews} from './useFilmReviews';

function FilmReviews(): JSX.Element {
  const activeFilm: ActiveFilmType = useOutletContext();
  const { leftComments, rightComments } = useFilmReviews(activeFilm.comments);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {leftComments.map((comment) => <FilmComment key={comment.id} review={comment} />)}
      </div>
      <div className="film-card__reviews-col">
        {rightComments.map((comment) => <FilmComment key={comment.id} review={comment} />)}
      </div>
    </div>
  );
}

export default FilmReviews;
