import { Link } from "react-router-dom";
import { AppRoutes } from "../../consts";
import { useAppSelector } from "../../hooks/store-hooks";
import { getProductsInCart } from "../../store/cart-process/selector";
import CartProductItem from "../cart-product-item/cart-product-item";
import style from "./cart-products-list.module.scss";

function CartProductsList(): JSX.Element {
  const productsInCart = useAppSelector(getProductsInCart);

  return (
    <ul className={style.products}>
      {Object.values(productsInCart).length > 0 ? (
        Object.values(productsInCart).map((productDataInCart) => (
          <CartProductItem
            key={productDataInCart.product.id}
            product={productDataInCart.product}
            count={productDataInCart.count}
          />
        ))
      ) : (
        <>
          <h2 className={style.emptyCart}>Cart is empty!</h2>
          <Link className={style.emptyCartLink} to={AppRoutes.Shop}>Go to Shop</Link>
        </>
      )}
      {}
    </ul>
  );
}

export default CartProductsList;
