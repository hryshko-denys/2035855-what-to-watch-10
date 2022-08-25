import {createSlice} from '@reduxjs/toolkit';

import {checkAuthAction, loginAction, logoutAction} from '../api-actions';
import {setUserData} from '../action';

import { AuthorizationStatus } from '../../components/const';
import {NameSpace} from '../../services/const';

import {UserProcess} from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userData: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      })
      .addCase(logoutAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.NO_AUTH;
      })
      .addCase(setUserData, (state, { payload }) => {
        state.userData = payload;
      });
  }
});
