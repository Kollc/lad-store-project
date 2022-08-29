import CartProductItem from "../cart-product-item/cart-product-item";
import style from './cart-products-list.module.scss';

function CartProductsList(): JSX.Element {
  return (
    <ul className={style.products}>
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
    </ul>
  );
}

export default CartProductsList;
