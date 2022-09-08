import { useAppSelector } from "../../hooks/store-hooks";
import {
  getShowProducts,
  getTypeSort,
  getVectorSort,
} from "../../store/products-process/selector";
import ShopProductList from "../shop-products-list/shop-product-list";
import Sort from "../sort/sort";
import style from "./shop-category-block.module.scss";
import { useState, useEffect } from "react";
import { ProductType } from "../../types/type";
import { sortProducts } from "../../utils/utils";

function ShopCategoryBlock(): JSX.Element {
  const showProducts = useAppSelector(getShowProducts);
  const typeSort = useAppSelector(getTypeSort);
  const vectorSort = useAppSelector(getVectorSort);
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    setProducts(sortProducts(showProducts, typeSort, vectorSort));
  }, [showProducts, typeSort, vectorSort]);

  return (
    <div className={style.categoryBlock}>
      {showProducts.length > 0 ? (
        <>
          <Sort />
          <ShopProductList products={products} />
        </>
      ) : (
        <h3 className={style.emptyProduct}>Nothing was found!</h3>
      )}
    </div>
  );
}

export default ShopCategoryBlock;
