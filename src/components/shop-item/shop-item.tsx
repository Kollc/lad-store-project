import { Link } from "react-router-dom";
import { ProductType } from "../../types/type";
import { getShortText } from "../../utils/utils";
import style from "./shop-item.module.scss";

type ShopItemProps = {
  product: ProductType;
};

function ShopItem({ product }: ShopItemProps): JSX.Element {
  return (
    <li className={style.cartItem}>
      <img src={product.image} alt={product.title} />

      <div className={style.textInfo}>
        <h3>
          <Link to="/shop/1">{product.title}</Link>
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
          <button>+</button>
          <b>1</b>
          <button>-</button>
        </div>
      </div>
    </li>
  );
}

export default ShopItem;
