import { ProductType } from "../../types/type";
import ShopProductList from "../shop-products-list/shop-product-list";
import Sort from "../sort/sort";
import style from "./shop-category-block.module.scss";

type ShopCategoryBlockProps = {
  showerProducts: ProductType[];
};

function ShopCategoryBlock({
  showerProducts,
}: ShopCategoryBlockProps): JSX.Element {
  return (
    <div className={style.categoryBlock}>
      <Sort />
      {showerProducts.length > 0 ? (
        <ShopProductList products={showerProducts} />
      ) : (
        <h3 className={style.emptyProduct}>Nothing was found!</h3>
      )}
    </div>
  );
}

export default ShopCategoryBlock;
