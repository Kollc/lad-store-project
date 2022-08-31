import { Navigate } from "react-router-dom";
import { AppRoute } from "../../consts";
import { useAppSelector } from "../../hooks/store-hooks";
import { getAuthorizationStatus } from "../../store/user-process/selector";
import { AuthorizationStatusList } from "../../types/type";

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const requireAuthorization = useAppSelector(getAuthorizationStatus);

  return requireAuthorization === AuthorizationStatusList.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}

export default PrivateRoute;
