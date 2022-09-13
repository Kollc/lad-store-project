import { useAppDispatch } from "../../hooks/store-hooks";
import {
  decreaseProductCart,
  deleteProductCart,
  increaseProductCart,
} from "../../store/cart-process/cart-process";
import { ProductType } from "../../types/type";
import style from "./cart-product-item.module.scss";

type CartProductItemProps = {
  product: ProductType;
  count: number;
};

function CartProductItem({
  product,
  count,
}: CartProductItemProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li className={style.productItem}>
      <button
        className={style.closeButton}
        onClick={() => dispatch(deleteProductCart(product))}
      >
        <div></div>
        <div></div>
      </button>
      <img src={product.image} alt={product.title} />
      <div className={style.info}>
        <h2>{product.title}</h2>
        <span>{product.category}</span>
      </div>
      <div className={style.priceWrapper}>
        <p className={style.price}>{product.price.toLocaleString()}$</p>
        <div className={style.cartCounter}>
          <button onClick={() => dispatch(increaseProductCart(product))}>
            +
          </button>
          <b>{count}</b>
          <button onClick={() => dispatch(decreaseProductCart(product))}>
            -
          </button>
        </div>
        <p className={style.allPrice}>
          {(Number(product.price) * count).toLocaleString()}$
        </p>
      </div>
    </li>
  );
}

export default CartProductItem;
