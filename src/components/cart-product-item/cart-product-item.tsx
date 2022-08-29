import style from "./cart-product-item.module.scss";

function CartProductItem(): JSX.Element {
  return (
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
  );
}

export default CartProductItem;
