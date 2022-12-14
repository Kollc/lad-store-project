import * as productProcess from "./../products-process/product-process";
import {
  AuthorizationStatusList,
  ProductInCart,
  ProductType,
} from "./../../types/type";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "./../../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoutes, TIMEOUT_RESET_MESSAGE } from "../../consts";
import { Auth, onAuthStateChanged } from "firebase/auth";
import {
  setAuthorizationStatus,
  setUserData,
} from "../user-process/user-process";
import { errorHandler } from "../../services/error-handler";
import {
  clearCart,
  resetIsOrderSent,
  setIsOrderSent,
} from "../cart-process/cart-process";

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
    dispatch(productProcess.setError(errorHandler(error)));
    setTimeout(() => {
      dispatch(productProcess.resetError());
    }, TIMEOUT_RESET_MESSAGE);
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
      dispatch(productProcess.setError(errorHandler(error)));
      setTimeout(() => {
        dispatch(productProcess.resetError());
      }, TIMEOUT_RESET_MESSAGE);
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

export const sendOrderAction = createAsyncThunk<
  void,
  ProductInCart[],
  {
    dispatch: AppDispatch;
    state: State;
  }
>("cartData/sendOrder", async (order, { dispatch }) => {
  console.log("?????????? ??????????????????: ", order);
  //???????????????? ???????????????? ????????????, ???? fake api ???? ?????????????????????????? ?????????????????????? ?????????????????? post ???????????? ?? ??????????????

  dispatch(setIsOrderSent());
  setTimeout(() => {
    dispatch(resetIsOrderSent());
  }, TIMEOUT_RESET_MESSAGE);

  dispatch(clearCart());
});
