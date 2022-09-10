export const TIMEOUT_SERVER = 5000;
export const BASE_URL = "https://fakestoreapi.com";

export enum NameSpace {
  Products = "PRODUCTS",
  User = "USER",
  Cart = "CART",
}

export enum APIRoutes {
  Products = "/products",
  Categories = "/categories",
}

export enum AppRoutes {
  Main = "/",
  Shop = "/shop",
  Cart = "/cart",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
}

export const MIN_TEXT_LENGTH = 0;
export const MAX_TEXT_LENGTH = 100;

export enum TypeSort {
  ByPrice = "byPrice",
  Default = "default",
}

export enum VectorSort {
  Asc = "ASC",
  Desc = "DESC",
}

export const ErrorMessagesFirebase = new Map([
  ["auth/user-not-found", "This user is not registered!"],
  ["passwordNotConfim", "Passwords do not match!"],
  ["auth/invalid-email", "Please enter a valid email!"],
  ["auth/weak-password", "Please enter a better password!"],
]);

export const MAX_PRODUCT_COUNT_IN_CART = 99;
export const LOCAL_STORAGE_NAME = "productInCart";
