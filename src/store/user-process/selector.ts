import { UserType } from "./../../types/type";
import { NameSpace } from "../../consts";
import { AuthorizationStatusList } from "../../types/type";
import { State } from "./../../types/state";

export const getAuthorizationStatus = (state: State): AuthorizationStatusList =>
  state[NameSpace.User].AuthorizationStatus;

export const getUserData = (state: State): UserType =>
  state[NameSpace.User].userData;
