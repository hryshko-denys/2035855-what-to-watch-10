import { useAppSelector } from '../../hooks';

import { logoutAction } from '../../store/api-actions';

import { store } from '../../store';

export const useSignOut = () => {
  const { userData } = useAppSelector(
    (state) => state
  );

  const logout = () => {
    store.dispatch(logoutAction());
  };

  const avatar = userData ? userData.avatarUrl : 'img/avatar.jpg';

  return {
    avatar,
    logout,
  };
};
