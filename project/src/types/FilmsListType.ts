export type FilmsListType = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: [string];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type ActiveFilmType = {
  filmInfo: FilmsListType;
  similarFilms: FilmsListType[];
  comments: CommentType[];
};

export type FilmStatus = 0 | 1;

export type FilmId = { id: string | undefined };
export type FilmData = { status: FilmStatus, filmId: number };

export type CommentFormType = {
  rating: null | number;
  comment: string;
};

export type CommentFormRequest = { data: CommentFormType; id: number };
