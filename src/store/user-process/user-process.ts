import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { AuthorizationStatusList, UserProcessType } from "../../types/type";

const initialState: UserProcessType = {
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
    setUserError: (state, action) => {
      state.error = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setAuthorizationStatus: (state, action) => {
      state.AuthorizationStatus = action.payload;
    },
  },
});

export const { setAuthorizationStatus, setUserData, setUserError } =
  userProcess.actions;
