export const RATING_ARRAY = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export enum TextLength {
  MinTextLength = 50,
  MaxTextLength = 400
}

export const getValidStatus = (commentLength: number, rating: null | number) => commentLength >= TextLength.MinTextLength && commentLength < TextLength.MaxTextLength && !!rating;
