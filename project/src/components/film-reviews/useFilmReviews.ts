import {CommentType} from '../../types/FilmsListType';

export const useFilmReviews = (filmComments: CommentType[]) => {
  const middleOfComments = Math.ceil(filmComments.length / 2);

  const leftComments = filmComments.slice(0, middleOfComments);
  const rightComments = filmComments.slice(middleOfComments);


  return { leftComments, rightComments };
};
