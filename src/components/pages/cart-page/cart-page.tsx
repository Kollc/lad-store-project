import { useAppSelector } from "../../../hooks/store-hooks";
import { getTotalPriceCart } from "../../../store/cart-process/selector";
import CartProductsList from "../../cart-products-list/cart-products-list";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./cart-page.module.scss";

function CartPage(): JSX.Element {
  const totalPrice = useAppSelector(getTotalPriceCart);

  const clickOrderHandle = () => {
    console.log("Заказ сделан!");
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
              <button className={style.orderSend} onClick={clickOrderHandle}>Оформить заказ</button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CartPage;
