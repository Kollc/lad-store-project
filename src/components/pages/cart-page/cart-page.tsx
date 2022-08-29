import MainLayout from "../../main-layout/main-layout";
import style from "./cart-page.module.scss";

function CartPage(): JSX.Element {
  return (
    <MainLayout>
      <div className="container">
        <section className={style.cart}>
          <h1>Cart</h1>
          <div className="breadcrumps">
            Main Shop Cart
          </div>
          <div>
            <ul className={style.products}>
              <li className={style.productItem}>
                <button className={style.closeButton}>
                  <div></div>
                  <div></div>
                </button>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                <div className={style.info}>
                  <h2>MARGHERITA</h2>
                  <span>Bugs</span>
                </div>
                <p className={style.price}>10 000 руб.</p>
                <div className={style.cartCounter}>
                  <button>+</button>
                  <b>1</b>
                  <button>-</button>
                </div>
                <p className={style.allPrice}>40 000 руб.</p>
              </li>
              <li className={style.productItem}>
                <button className={style.closeButton}>
                  <div></div>
                  <div></div>
                </button>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                <div className={style.info}>
                  <h2>MARGHERITA</h2>
                  <span>Bugs</span>
                </div>
                <p className={style.price}>10 000 руб.</p>
                <div className={style.cartCounter}>
                  <button>+</button>
                  <b>1</b>
                  <button>-</button>
                </div>
                <p className={style.allPrice}>40 000 руб.</p>
              </li>
              <li className={style.productItem}>
                <button className={style.closeButton}>
                  <div></div>
                  <div></div>
                </button>
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                <div className={style.info}>
                  <h2>MARGHERITA</h2>
                  <span>Bugs</span>
                </div>
                <p className={style.price}>10 000 руб.</p>
                <div className={style.cartCounter}>
                  <button>+</button>
                  <b>1</b>
                  <button>-</button>
                </div>
                <p className={style.allPrice}>40 000 руб.</p>
              </li>
            </ul>
            <div className={style.priceResult}>
              <p><b>Всего:</b> 120 000 руб.</p>
              <button>Оформить заказ</button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default CartPage;
