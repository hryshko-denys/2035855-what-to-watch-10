import { useState, ChangeEvent, FormEvent } from 'react';

export const useFormAddReviewHook = () => {
  const ratingArray = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'];

  const [formData, setFormData] = useState({
    rating: '7',
    textReview: '',
  });

  const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: event.target.value,
    });
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      textReview: event.target.value,
    });
  };

  const resetData = () => {
    setFormData({
      textReview: '',
      rating: '7',
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    //send data

    resetData();
  };

  return {
    ratingArray,
    formData,
    handleRatingChange,
    handleTextChange,
    handleSubmit,
  };
};
