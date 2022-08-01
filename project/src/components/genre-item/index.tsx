import { Link } from 'react-router-dom';

import { changeGenre } from '../../store/action';

import { useAppDispatch, useAppSelector } from '../../hooks';

type GenreItemComponentProps = {
  genre: string,
  value: string,
};

function GenreItem({ genre, value }: GenreItemComponentProps): JSX.Element {
  const { activeGenre } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  return (
    <li
      className={`catalog__genres-item ${
        activeGenre === genre ? 'catalog__genres-item--active' : ''
      }`}
    >
      <Link
        to="/"
        onClick={() => dispatch(changeGenre(value))}
        className="catalog__genres-link"
      >
        {genre}
      </Link>
    </li>
  );
}

export default GenreItem;
