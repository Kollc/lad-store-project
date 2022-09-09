import { NameSpace } from "./../../consts";
import { createSlice } from "@reduxjs/toolkit";
import { CartProcessType } from "../../types/type";

const initialState: CartProcessType = {
  totalPrice: 0,
  productInCart: {},
};

export const cartProcess = createSlice({
  name: NameSpace.Cart,
  initialState,
  reducers: {},
});
