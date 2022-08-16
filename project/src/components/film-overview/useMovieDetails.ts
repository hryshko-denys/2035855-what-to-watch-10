import {FilmsListType} from '../../types/FilmsListType';

export const useMovieDetails = (movieInfo: FilmsListType) => {
  const score = movieInfo.rating;
  const starringAdapted = movieInfo.starring.join((', '));
  let ratingLevel: string;

  switch (true) {
    case score < 3:
      ratingLevel = 'Bad';
      break;
    case score >= 3 && score < 5:
      ratingLevel = 'Normal';
      break;
    case score >= 5 && score < 8:
      ratingLevel = 'Good';
      break;
    case score >= 8 && score < 10:
      ratingLevel = 'Very good';
      break;
    case score === 10:
      ratingLevel = 'Awesome';
      break;
    default:
      ratingLevel = 'Unknown';
  }

  return { starringAdapted, ratingLevel };
};
