import { ChangeEvent } from 'react';

type AddReviewStarComponentProps = {
  id: string,
  isChecked: boolean,
  isDisabled: boolean,
  handleRatingChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

function AddReviewStar({ id, isChecked, isDisabled, handleRatingChange }: AddReviewStarComponentProps): JSX.Element {
  return (
    <>
      <input
        className="rating__input"
        id={`star-${id}`}
        type="radio"
        name="rating"
        value={id}
        disabled={isDisabled}
        checked={isChecked}
        onChange={handleRatingChange}
      />
      <label className="rating__label" htmlFor={`star-${id}`}>
        Rating {id}
      </label>
    </>
  );
}

export default AddReviewStar;
