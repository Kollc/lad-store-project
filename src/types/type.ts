import { VectorSort } from "./../consts";
import { TypeSort } from "../consts";

export type ProductProcessType = {
  products: ProductType[];
  error: string;
  categories: string[];
  maxProductPrice: number;
  showProducts: ProductType[];
  vectorSort: VectorSort;
  typeSort: TypeSort;
};

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export type UserProcessType = {
  AuthorizationStatus: AuthorizationStatusList;
  error: string;
  userData: UserType;
};

export type UserType = {
  email: string;
};

export enum AuthorizationStatusList {
  Auth = "AUTH",
  NoAuth = "NO_AUTH",
  Unknown = "UNKNOWN",
}
