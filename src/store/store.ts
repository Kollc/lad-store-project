import { auth } from "./../services/firebase/firebase-user-auth";
import { createApi } from "../services/api-data";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/root-reducer";

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api, auth },
      },
    }),
});
