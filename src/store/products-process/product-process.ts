import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { ProductProcessType } from "../../types/type";

const initialState: ProductProcessType = {
  products: [],
  error: '',
};

export const productProcess = createSlice({
  initialState,
  name: NameSpace.Products,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setError: (state, action) => {
        state.error = action.payload;
    }
  },
});

export const { setProducts } = productProcess.actions;
