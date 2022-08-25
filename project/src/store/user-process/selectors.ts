import {State} from '../../types/state';

import {NameSpace} from '../../services/const';
import { AuthorizationStatus } from '../../components/const';

import {UserData} from '../../types/auth-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getUserData = (state: State): null | UserData => state[NameSpace.User].userData;
