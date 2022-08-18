import {FilmsListType} from '../../types/FilmsListType';

export const useFilmDetails = (movieInfo: FilmsListType) => {
  const time = movieInfo.runTime;
  const hours = Math.trunc(movieInfo.runTime / 60);
  const minutes = time - hours * 60;

  const timeAdapted = hours ? `${hours}hr ${minutes}min` : `${minutes}min`;

  return { timeAdapted };
};
