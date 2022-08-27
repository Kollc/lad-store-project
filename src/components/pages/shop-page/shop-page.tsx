import MainLayout from "../../main-layout/main-layout";
import style from "./shop-page.module.scss";

function ShopPage(): JSX.Element {
  return (
    <MainLayout>
      <div className={style.wrapper}>
        <section className={style.shop}>
          <h1>Shop</h1>
          <div className={style.mainContent}>
            <div className={style.catalog}>
              <div className={style.categoryBlock}>
                <div className={style.categoryHeader}>
                  <h2>Category</h2>
                  <div></div>
                </div>
                <ul>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={style.categoryBlock}>
                <div className={style.categoryHeader}>
                  <h2>Category</h2>
                  <div></div>
                </div>
                <ul>
                  <li>
                    <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
                    <div>
                      <h3>Margherita</h3>
                      <p>Classic delight with 100% real mozzarella cheese</p>
                    </div>
                    <div className={style.shopItemFooter}>
                      <p className={style.shopItemPrice}>1579 руб.</p>
                      <div className={style.cartCounter}>
                        <button>+</button>
                        <b>1</b>
                        <button>-</button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default ShopPage;
