import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../../consts";
import CartPage from "../pages/cart-page/cart-page";
import ErrorPage from "../pages/error-page/error-page";
import MainPage from "../pages/main-page/main-page";
import ShopPage from "../pages/shop-page/shop-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import SignUpPage from "../pages/sign-up-page/sign-up-page";
import PrivateRoute from "../private-route/private-route";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path={AppRoutes.Main} element={<MainPage />} />
      <Route
        path={AppRoutes.Cart}
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route path={AppRoutes.Shop} element={<ShopPage />} />
      <Route path={AppRoutes.SignUp} element={<SignUpPage />} />
      <Route path={AppRoutes.SignIn} element={<SignInPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
