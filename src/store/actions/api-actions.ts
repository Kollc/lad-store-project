import { auth } from "./../../services/firebase/firebase-user-auth";
import * as productProcess from "./../products-process/product-process";
import { AuthorizationStatusList, ProductType } from "./../../types/type";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "./../../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoutes } from "../../consts";
import { Auth, onAuthStateChanged } from "firebase/auth";
import {
  setAuthorizationStatus,
  setUserData,
} from "../user-process/user-process";

export const fetchProductsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance; auth: Auth };
  }
>("dataProducts/fetchProducts", async (_arg, { dispatch, extra: { api } }) => {
  try {
    const { data } = await api.get<ProductType[]>(APIRoutes.Products);
    dispatch(productProcess.setProducts(data));
  } catch (error) {
    console.log("error: ", error);
    //   dispatch(productProcess.setErrorMessage());
  }
});

export const fetchProductCategoriesAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance; auth: Auth };
  }
>(
  "dataProducts/fetchProductCategories",
  async (_arg, { dispatch, extra: { api } }) => {
    try {
      const { data } = await api.get<string[]>(
        APIRoutes.Products + APIRoutes.Categories
      );
      dispatch(productProcess.setProductCategories(data));
    } catch (error) {
      console.log("error: ", error);
      //   dispatch(productProcess.setErrorMessage());
    }
  }
);

export const checkAuthUserAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: { api: AxiosInstance; auth: Auth };
  }
>("userData/checkAuthUser", async (_arg, { dispatch, extra: { auth } }) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const email = user.email;
      dispatch(setUserData({ email }));
      dispatch(setAuthorizationStatus(AuthorizationStatusList.Auth));
    } else {
      dispatch(setUserData({ email: "" }));
      dispatch(setAuthorizationStatus(AuthorizationStatusList.NoAuth));
    }
  });
});
