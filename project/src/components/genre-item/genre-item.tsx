import { Link } from 'react-router-dom';

import { changeGenre } from '../../store/action';

import {getActiveGenre} from '../../store/films-process/selectors';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {APIRoute} from '../../services/const';

type GenreItemComponentProps = {
  genre: string,
  value: string,
};

function GenreItem({ genre, value }: GenreItemComponentProps): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);

  const dispatch = useAppDispatch();

  return (
    <li
      className={`catalog__genres-item ${
        activeGenre === genre ? 'catalog__genres-item--active' : ''
      }`}
    >
      <Link
        to={APIRoute.Index}
        onClick={() => dispatch(changeGenre(value))}
        className="catalog__genres-link"
      >
        {genre}
      </Link>
    </li>
  );
}

export default GenreItem;
