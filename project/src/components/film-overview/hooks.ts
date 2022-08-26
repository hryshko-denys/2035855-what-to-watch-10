import {FilmsListType} from '../../types/FilmsListType';

import {AWESOME_RATING, BAD_RATING, FilmRating, GOOD_RATING, NORMAL_RATING} from '../add-review-form/utils';

export const useMovieDetails = (movieInfo: FilmsListType) => {
  const score = movieInfo.rating;
  const starringAdapted = movieInfo.starring.join((', '));
  let ratingLevel: string;

  switch (true) {
    case score < BAD_RATING:
      ratingLevel = FilmRating.Bad;
      break;
    case score >= BAD_RATING && score < NORMAL_RATING:
      ratingLevel = FilmRating.Normal;
      break;
    case score >= NORMAL_RATING && score < GOOD_RATING:
      ratingLevel = FilmRating.Good;
      break;
    case score >= GOOD_RATING && score < AWESOME_RATING:
      ratingLevel = FilmRating.VeryGood;
      break;
    case score === AWESOME_RATING:
      ratingLevel = FilmRating.Awesome;
      break;
    default:
      ratingLevel = FilmRating.Unknown;
  }

  return { starringAdapted, ratingLevel };
};
