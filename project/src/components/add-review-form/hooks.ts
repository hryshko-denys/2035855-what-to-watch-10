import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { setCommentError } from '../../store/action';
import { sendComment } from '../../store/api-actions';

import { CommentFormType } from '../../types/FilmsListType';

import { getValidStatus } from './utils';

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

    const isValidForm = getValidStatus(formData.comment.length, formData.rating);
    setIsFormValid(isValidForm);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = event.target.value;

    setFormData({
      ...formData,
      comment,
    });

    const isValidForm = getValidStatus(formData.comment.length, formData.rating);
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
    formData,
    handleRatingChange,
    handleTextChange,
    handleSubmit,
    isCommentError,
  };
};
