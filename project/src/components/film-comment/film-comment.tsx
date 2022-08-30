import {useFilmComment} from './hooks';

import {CommentType} from '../../types/FilmsListType';

type CommentTypeProps = {
  review: CommentType;
}

function FilmComment({ review }: CommentTypeProps): JSX.Element {
  const { comment, user, date, rating } = review;
  const { adaptedString, dateAdapted } = useFilmComment(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={adaptedString}>
            {dateAdapted}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default FilmComment;
