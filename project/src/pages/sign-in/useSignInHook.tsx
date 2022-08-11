import { useState, ChangeEvent, FormEvent } from 'react';

import { store } from '../../store';
import { loginAction } from '../../store/api-actions';

import { EMAIL_REGEX, PASSWORD_REGEX } from './utils';

export const useSignInHook = () => {
  const INITIAL_STATE = {
    email: '',
    password: '',
  };

  const [loginData, setLoginData] = useState(INITIAL_STATE);
  const [error, setError] = useState<null | string>(null);

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
    setLoginData(INITIAL_STATE);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!EMAIL_REGEX.test(loginData.email)) {
      setError('email');
      return;
    }

    if (!PASSWORD_REGEX.test(loginData.password)) {
      setError('password');
      return;
    }

    store.dispatch(loginAction(loginData));

    resetData();
  };

  const getErrorText = () => {
    switch (error) {
      case 'email':
        return 'Please enter a valid email address';

      case 'password':
        return 'Please enter a valid password';

      case 'invalid-data':
        return 'We can’t recognize this email and password combination. Please try again.';

      default:
        return null;
    }
  };

  const errorText = getErrorText();

  return {
    loginData,
    errorText,
    handleEmailChange,
    handleSubmit,
    handlePasswordChange,
  };
};
