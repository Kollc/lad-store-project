import { ProductType } from "../../types/type";
import ShopItem from "../shop-item/shop-item";
import style from "./shop-product-list.module.scss";

type ShopProductListProps = {
  products: ProductType[];
};

function ShopProductList({ products }: ShopProductListProps): JSX.Element {
  return (
    <ul className={style.shopProdctList}>
      {products.map((product) => (
        <ShopItem key={product.id} product={product} />
      ))}
    </ul>
  );
}

export default ShopProductList;
