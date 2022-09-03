import { NameSpace } from "../../consts";
import { State } from "../../types/state";
import { ProductType } from "./../../types/type";

export const getProducts = (state: State): ProductType[] =>
  state[NameSpace.Products].products;

export const getProductCategories = (state: State): string[] =>
  state[NameSpace.Products].categories;

export const getProductError = (state: State): string =>
  state[NameSpace.Products].error;

export const getMaxProductPrice = (state: State): number =>
  state[NameSpace.Products].maxProductPrice;
