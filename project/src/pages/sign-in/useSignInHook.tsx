import { useState, ChangeEvent, FormEvent } from 'react';

import { store } from '../../store';
import { loginAction } from '../../store/api-actions';

export const useSignInHook = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      email: event.target.value,
    });
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      password: event.target.value,
    });
  };

  const resetData = () => {
    setLoginData({
      email: '',
      password: '',
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    store.dispatch(loginAction(loginData));

    resetData();
  };

  return { loginData, handleEmailChange, handleSubmit, handlePasswordChange };
};
