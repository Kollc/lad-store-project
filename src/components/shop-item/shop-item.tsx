import style from './shop-item.module.scss'

function ShopItem(): JSX.Element {
  return (
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
  );
}

export default ShopItem;
