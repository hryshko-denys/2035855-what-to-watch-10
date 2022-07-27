import { createAction } from '@reduxjs/toolkit';

export const changeGenre = createAction('genre/changeGenre', (genre: string) => ({
  payload: genre,
}));
