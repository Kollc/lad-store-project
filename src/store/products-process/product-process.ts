import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { ProductProcessType } from "../../types/type";

const initialState: ProductProcessType = {
  products: [],
  error: "",
  categories: [],
  maxProductPrice: 0,
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
    },
    setProductCategories: (state, action) => {
      state.categories = action.payload;
    },
    setMaxProductPrice: (state, action) => {
      state.maxProductPrice = action.payload;
    },
  },
});

export const {
  setProducts,
  setProductCategories,
  setError,
  setMaxProductPrice,
} = productProcess.actions;
