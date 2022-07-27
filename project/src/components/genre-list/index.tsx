import GenreItem from '../genre-item';

import { GENRE_LIST } from '../const';

function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {GENRE_LIST.map((genre) => (
        <GenreItem
          genre={genre}
          key={genre}
        />
      ))}
    </ul>
  );
}

export default GenreList;
