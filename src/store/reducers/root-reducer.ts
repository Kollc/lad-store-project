import { cartProcess } from "./../cart-process/cart-process";
import { userProcess } from "./../user-process/user-process";
import { NameSpace } from "./../../consts";
import { combineReducers } from "redux";
import { productProcess } from "../products-process/product-process";

export const rootReducer = combineReducers({
  [NameSpace.Products]: productProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Cart]: cartProcess.reducer,
});
