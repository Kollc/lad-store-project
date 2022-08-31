import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { AuthorizationStatusList, UserProcessType } from "../../types/type";

const initialState: UserProcessType = {
  token: "",
  AuthorizationStatus: AuthorizationStatusList.Unknown,
  error: "",
  userData: {
    email: "",
  },
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setAuthorizationStatus: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const {
  setToken,
  setAuthorizationStatus,
  setUserData,
  setUserError,
} = userProcess.actions;
