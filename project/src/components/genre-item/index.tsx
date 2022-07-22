import { Link } from 'react-router-dom';

type GenreItemComponentProps = {
  genre: string;
  isActive: boolean;
  seActiveGenre: (genre: string) => void;
};

function GenreItem({
  genre,
  isActive,
  seActiveGenre,
}: GenreItemComponentProps): JSX.Element {
  return (
    <li className={`catalog__genres-item ${isActive ? 'catalog__genres-item--active' : ''}`}>
      <Link to="/" onClick={() => seActiveGenre(genre)} className="catalog__genres-link">
        {genre}
      </Link>
    </li>
  );
}

export default GenreItem;
