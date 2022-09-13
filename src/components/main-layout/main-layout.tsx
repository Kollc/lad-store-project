import { useAppSelector } from "../../hooks/store-hooks";
import { getIsOrderSent } from "../../store/cart-process/selector";
import {
  getErrorProducts,
  getProducts,
} from "../../store/products-process/selector";
import { getAuthorizationStatus } from "../../store/user-process/selector";
import { AuthorizationStatusList, ProductType } from "../../types/type";
import ErrorMessage from "../error-message/error-message";
import Footer from "../footer/footer";
import Header from "../header/header";
import Spinner from "../spinner/spinner";
import SuccessMessage from "../success-message/success-message";

type MainLayoutProps = {
  children: JSX.Element;
};

function MainLayout({ children }: MainLayoutProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const products: ProductType[] = useAppSelector(getProducts);
  const error = useAppSelector(getErrorProducts);
  const isOrderSent = useAppSelector(getIsOrderSent);

  return products.length > 0 &&
    authorizationStatus !== AuthorizationStatusList.Unknown ? (
    <>
      <Header />
      {children}
      {isOrderSent && <SuccessMessage />}
      <Footer />
    </>
  ) : (
    <>
      <Header />
      <Spinner />
      {error && <ErrorMessage error={error} />}
      <Footer />
    </>
  );
}

export default MainLayout;
