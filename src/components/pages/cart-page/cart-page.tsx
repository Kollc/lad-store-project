import CartProductsList from "../../cart-products-list/cart-products-list";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import style from "./cart-page.module.scss";

function CartPage(): JSX.Element {
  return (
    <MainLayout>
      <div className="container">
        <section className={style.cart}>
          <PageTitle title="Cart" />
          <div className="breadcrumps">Main Shop Cart</div>
          <div>
            <CartProductsList />
            <div className={style.priceResult}>
              <p>
                <b>Всего:</b> 120 000 руб.
              </p>
              <button>Оформить заказ</button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CartPage;
