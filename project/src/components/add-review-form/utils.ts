export const RATING_ARRAY = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const MIN_TEXT_LENGTH = 50;
const MAX_TEXT_LENGTH = 400;

export const getValidStatus = (commentLength: number, rating: null | number) => commentLength >= MIN_TEXT_LENGTH && commentLength < MAX_TEXT_LENGTH && !!rating;
