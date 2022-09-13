import { TypeSort, VectorSort } from "./../../consts";
import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../consts";
import { ProductProcessType } from "../../types/type";

const initialState: ProductProcessType = {
  products: [],
  error: "",
  categories: [],
  maxProductPrice: 0,
  showProducts: [],
  vectorSort: VectorSort.Asc,
  typeSort: TypeSort.Default,
};

export const productProcess = createSlice({
  initialState,
  name: NameSpace.Products,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.showProducts = action.payload;
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
    setShowProducts: (state, action) => {
      state.showProducts = action.payload;
    },
    setTypeSort: (state, action) => {
      state.typeSort = action.payload;
    },
    setVectorSort: (state, action) => {
      state.vectorSort = action.payload;
    },
    resetError: (state) => {
      state.error = "";
    },
  },
});

export const {
  setProducts,
  setProductCategories,
  setError,
  setMaxProductPrice,
  setShowProducts,
  setVectorSort,
  setTypeSort,
  resetError,
} = productProcess.actions;
