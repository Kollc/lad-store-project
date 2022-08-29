import * as productProcess from "./../products-process/product-process";
import { ProductType } from "./../../types/type";
import { AxiosInstance } from "axios";
import { AppDispatch, State } from "./../../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIRoutes } from "../../consts";

export const fetchProductsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  "dataProducts/fetchProducts",
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<ProductType[]>(APIRoutes.Products);
      dispatch(productProcess.setProducts(data));
    } catch (error) {
      console.log('error: ', error);
      //   dispatch(productProcess.setErrorMessage());
    }
  }
);
