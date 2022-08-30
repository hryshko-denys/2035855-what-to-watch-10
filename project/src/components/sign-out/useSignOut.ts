import { useAppSelector } from '../../hooks';

import { logoutAction } from '../../store/api-actions';

import { store } from '../../store';

import {getUserData} from '../../store/user-process/selectors';

export const useSignOut = () => {
  const userData = useAppSelector(getUserData);

  const handleLogout = () => {
    store.dispatch(logoutAction());
  };

  const avatar = userData ? userData.avatarUrl : 'img/avatar.jpg';

  return {
    avatar,
    handleLogout,
  };
};
