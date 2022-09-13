import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../consts";
import { useAppSelector } from "../../hooks/store-hooks";
import { getAuthorizationStatus } from "../../store/user-process/selector";
import { AuthorizationStatusList } from "../../types/type";
import Spinner from "../spinner/spinner";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const requireAuthorization = useAppSelector(getAuthorizationStatus);

  return requireAuthorization === AuthorizationStatusList.Auth ? (
    children
  ) : requireAuthorization === AuthorizationStatusList.Unknown ? (
    <Spinner />
  ) : (
    <Navigate to={AppRoutes.SignUp} />
  );
}

export default PrivateRoute;
