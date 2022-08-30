import {useMyListBtn} from './hooks';

type MyListBtnProps = {
  id: number;
}

function MyListBtn({ id }: MyListBtnProps): JSX.Element {
  const { favoriteList, handleToggleMyList, isFavorite } = useMyListBtn(id);

  return (
    <button
      onClick={handleToggleMyList}
      className="btn btn--list film-card__button"
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">
        {favoriteList?.length || 0}
      </span>
    </button>
  );
}

export default MyListBtn;
