import {
  LOCAL_STORAGE_NAME,
  MAX_PRODUCT_COUNT_IN_CART,
  NameSpace,
} from "./../../consts";
import { createSlice } from "@reduxjs/toolkit";
import { CartProcessType } from "../../types/type";

const initialState: CartProcessType = {
  totalPrice: 0,
  productInCart: {},
};

export const cartProcess = createSlice({
  name: NameSpace.Cart,
  initialState,
  reducers: {
    increaseProductCart: (state, action) => {
      if (state.productInCart[action.payload.id]) {
        if (
          state.productInCart[action.payload.id].count <=
          MAX_PRODUCT_COUNT_IN_CART
        ) {
          state.productInCart[action.payload.id].count += 1;
        }
      } else {
        state.productInCart[action.payload.id] = {
          product: action.payload,
          count: 1,
        };
      }

      state.totalPrice += action.payload.price;
      localStorage.setItem(
        LOCAL_STORAGE_NAME,
        JSON.stringify(state.productInCart)
      );
    },

    decreaseProductCart: (state, action) => {
      if (
        state.productInCart[action.payload.id] &&
        state.productInCart[action.payload.id].count > 1
      ) {
        state.productInCart[action.payload.id].count -= 1;
      } else {
        delete state.productInCart[action.payload.id];
      }

      state.totalPrice -= action.payload.price;
      localStorage.setItem(
        LOCAL_STORAGE_NAME,
        JSON.stringify(state.productInCart)
      );
    },

    deleteProductCart: (state, action) => {
      state.totalPrice =
        state.totalPrice -
        Number(state.productInCart[action.payload.id].product.price) *
          state.productInCart[action.payload.id].count;

      delete state.productInCart[action.payload.id];

      localStorage.setItem(
        LOCAL_STORAGE_NAME,
        JSON.stringify(state.productInCart)
      );
    },

    checkSaveCart: (state) => {
      if (localStorage.getItem(LOCAL_STORAGE_NAME)) {
        state.productInCart = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_NAME) || ""
        );

        let sum = 0;
        Object.values(state.productInCart).forEach((productData) => {
          sum += productData.count * Number(productData.product.price);
        });

        state.totalPrice = sum;
      }
    },
  },
});

export const {
  increaseProductCart,
  decreaseProductCart,
  deleteProductCart,
  checkSaveCart,
} = cartProcess.actions;
