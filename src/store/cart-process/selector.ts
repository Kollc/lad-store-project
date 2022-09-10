import { NameSpace } from "../../consts";
import { State } from "../../types/state";
import { ProductInCart } from "../../types/type";

export const getProductsInCart = (
  state: State
): { [id: string]: ProductInCart } => {
  return state[NameSpace.Cart].productInCart;
};

export const getTotalPriceCart = (state: State): number => {
  return state[NameSpace.Cart].totalPrice;
};
