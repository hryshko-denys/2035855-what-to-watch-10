import {FilmsListType} from '../../types/FilmsListType';

import {FilmRatingNumber, FilmRating} from '../add-review-form/utils';

export const useMovieDetails = (movieInfo: FilmsListType) => {
  const score = movieInfo.rating;
  const starringAdapted = movieInfo.starring.join((', '));
  let ratingLevel: string;

  switch (true) {
    case score < FilmRatingNumber.BadRating:
      ratingLevel = FilmRating.Bad;
      break;
    case score >= FilmRatingNumber.BadRating && score < FilmRatingNumber.NormalRating:
      ratingLevel = FilmRating.Normal;
      break;
    case score >= FilmRatingNumber.NormalRating && score < FilmRatingNumber.GoodRating:
      ratingLevel = FilmRating.Good;
      break;
    case score >= FilmRatingNumber.GoodRating && score < FilmRatingNumber.AwesomeRating:
      ratingLevel = FilmRating.VeryGood;
      break;
    case score === FilmRatingNumber.AwesomeRating:
      ratingLevel = FilmRating.Awesome;
      break;
    default:
      ratingLevel = FilmRating.Unknown;
  }

  return { starringAdapted, ratingLevel };
};
