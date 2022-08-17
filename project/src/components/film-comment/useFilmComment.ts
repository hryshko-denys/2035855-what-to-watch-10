import {getMonth} from './utils';

export const useFilmComment = (date: string) => {
  const dateJs = new Date(date);
  const day = dateJs.getUTCDate();
  const month = (dateJs.getUTCMonth() + 1).toString();
  const year = dateJs.getUTCFullYear();

  const adaptedString = `${day}/${month}/${year}`;
  const monthName = getMonth(month);

  const dateAdapted = `${monthName} ${day}, ${year}`;

  return { adaptedString, dateAdapted };
};
