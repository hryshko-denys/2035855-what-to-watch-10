import {FormRating} from '../index';

import { useFormAddReviewHook } from './hooks';

type AddReviewFormType = {
  id: number;
}

function AddReviewForm({ id }: AddReviewFormType): JSX.Element {
  const {
    isCommentSending,
    isFormValid,
    formData,
    handleRatingChange,
    handleTextChange,
    handleSubmit,
    isCommentError,
  } = useFormAddReviewHook(id);

  return (
    <form onSubmit={handleSubmit} className="add-review__form">
      <FormRating handleRatingChange={handleRatingChange} rating={formData.rating} isCommentSending={isCommentSending} />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          disabled={isCommentSending}
          value={formData.comment}
          onChange={handleTextChange}
        />
        <div className="add-review__submit">
          <button disabled={!isFormValid || isCommentSending} className="add-review__btn" type="submit">
    Post
          </button>
        </div>
      </div>
      {isCommentError && (
        <div className="sign-in__message">
          <p>Can&apos;t send your comment. Please try again later.</p>
        </div>
      )}
    </form>
  );
}

export default AddReviewForm;
