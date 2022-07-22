import { AddReviewStar } from '../index';

import { useFormAddReviewHook } from './hooks';

function AddReviewForm(): JSX.Element {
  const {
    ratingArray,
    formData,
    handleRatingChange,
    handleTextChange,
    handleSubmit,
  } = useFormAddReviewHook();

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratingArray.map((star) => (
            <AddReviewStar
              key={star}
              id={star}
              isChecked={star === formData.rating}
              handleRatingChange={handleRatingChange}
            />
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={formData.textReview}
          onChange={handleTextChange}
        />
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
