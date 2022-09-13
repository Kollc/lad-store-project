import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../consts";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { sendOrderAction } from "../../../store/actions/api-actions";
import {
  getProductsInCart,
  getTotalPriceCart,
} from "../../../store/cart-process/selector";
import CartProductsList from "../../cart-products-list/cart-products-list";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./cart-page.module.scss";

function CartPage(): JSX.Element {
  const totalPrice = useAppSelector(getTotalPriceCart);
  const products = useAppSelector(getProductsInCart);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const clickOrderHandle = () => {
    if (totalPrice > 0) {
      dispatch(sendOrderAction(Object.values(products)));
      navigate(AppRoutes.Shop);
    }
  };

  return (
    <MainLayout>
      <div className="container">
        <section className={style.cart}>
          <PageTitle title="Cart" />
          <div>
            <CartProductsList />
            <div className={style.priceResult}>
              <p>
                <b>Всего:</b> {totalPrice.toLocaleString()}$
              </p>
              <button
                className={style.orderSend}
                onClick={clickOrderHandle}
                disabled={Boolean(totalPrice === 0)}
              >
                Оформить заказ
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CartPage;
