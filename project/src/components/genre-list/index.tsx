import GenreItem from '../genre-item';

import { GENRE_LIST } from '../const';

function GenreList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {GENRE_LIST.map(({ name, value }) => (
        <GenreItem
          genre={name}
          value={value}
          key={name}
        />
      ))}
    </ul>
  );
}

export default GenreList;
