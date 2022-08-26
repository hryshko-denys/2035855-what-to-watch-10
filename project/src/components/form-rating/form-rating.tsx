import {ChangeEvent, memo} from 'react';

import { AddReviewStar } from '../index';

import { RATING_ARRAY } from './utils';

type FormRatingComponentType = {
  isCommentSending: boolean;
  rating: number | null;
  handleRatingChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function FormRating({ isCommentSending, rating, handleRatingChange }: FormRatingComponentType): JSX.Element {
  return (
    <div className="rating">
      <div className="rating__stars">
        {RATING_ARRAY.map((star) => (
          <AddReviewStar
            key={star}
            id={star.toString()}
            isChecked={star === rating}
            isDisabled={isCommentSending}
            handleRatingChange={handleRatingChange}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(FormRating);
