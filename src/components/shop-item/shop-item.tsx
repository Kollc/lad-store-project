import { Link } from "react-router-dom";
import { AppRoutes } from "../../consts";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import {
  decreaseProductCart,
  increaseProductCart,
} from "../../store/cart-process/cart-process";
import { getProductsInCart } from "../../store/cart-process/selector";
import { ProductType } from "../../types/type";
import { getShortText } from "../../utils/utils";
import style from "./shop-item.module.scss";
import { useState, useEffect } from "react";

type ShopItemProps = {
  product: ProductType;
};

function ShopItem({ product }: ShopItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const productsInCart = useAppSelector(getProductsInCart);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (productsInCart[product.id]) {
      setCount(productsInCart[product.id].count);
    } else {
      setCount(0);
    }
  }, [productsInCart]);

  return (
    <li className={style.cartItem}>
      <img src={product.image} alt={product.title} />

      <div className={style.textInfo}>
        <h3>
          <Link to={`${AppRoutes.Shop}/${product.id}`}>{product.title}</Link>
        </h3>
        <p className={style.categoryName}>
          <span>Category: </span>
          {product.category}
        </p>
        <p>{getShortText(product.description)}</p>
      </div>
      <div className={style.shopItemFooter}>
        <p className={style.shopItemPrice}>{product.price.toLocaleString()}$</p>
        <div className={style.cartCounter}>
          <button onClick={() => dispatch(increaseProductCart(product))}>+</button>
          <b>{count}</b>
          <button onClick={() => dispatch(decreaseProductCart(product))}>-</button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
