import GenreItem from '../genre-item';

type GenreListComponentProps = {
  genreList: string[];
  activeGenre: string;
  seActiveGenre: (genre: string) => void;
};

function GenreList({
  genreList,
  activeGenre,
  seActiveGenre,
}: GenreListComponentProps): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <GenreItem
          genre={genre}
          key={genre}
          isActive={activeGenre === genre}
          seActiveGenre={seActiveGenre}
        />
      ))}
    </ul>
  );
}

export default GenreList;
