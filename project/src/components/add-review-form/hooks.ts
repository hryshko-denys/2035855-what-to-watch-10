import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { setCommentError } from '../../store/action';
import { sendComment } from '../../store/api-actions';

import { CommentFormType } from '../../types/FilmsListType';

const ratingArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

export const useFormAddReviewHook = (id: number) => {
  const { isCommentError } = useAppSelector((state) => state);
  const [formData, setFormData] = useState<CommentFormType>({
    rating: null,
    comment: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [isCommentSending, setIsCommentSending] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(setCommentError(false));
  }, []);

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +event.target.value,
    });

    const isValidForm =
      formData.comment.length >= 50 && formData.comment.length < 400;
    setIsFormValid(isValidForm);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    setFormData({
      ...formData,
      comment: text,
    });

    const isValidForm =
      text.length >= 50 && text.length < 400 && !!formData.rating;
    setIsFormValid(isValidForm);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsCommentSending(true);

    dispatch(sendComment({ data: formData, id }));
  };

  return {
    isCommentSending,
    isFormValid,
    ratingArray,
    formData,
    handleRatingChange,
    handleTextChange,
    handleSubmit,
    isCommentError,
  };
};
