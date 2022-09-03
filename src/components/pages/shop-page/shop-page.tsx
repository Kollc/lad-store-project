import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/store-hooks";
import { getProducts } from "../../../store/products-process/selector";
import { setMaxProductPrice } from "../../../store/products-process/product-process";
import { ProductType } from "../../../types/type";
import { calcMaxProductPrice } from "../../../utils/utils";
import Filter from "../../filter/filter";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import ShopCategoryBlock from "../../shop-category-block/shop-category-block";
import style from "./shop-page.module.scss";

function ShopPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [showerProducts, setShowerProducts] = useState<ProductType[]>([]);

  const changeCheckboxCategoriesHandle = (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    const category = evt.target.value;

    if (checkedCategories.includes(category)) {
      setCheckedCategories(
        checkedCategories.filter(
          (checkedCategory) => checkedCategory !== category
        )
      );
    } else {
      setCheckedCategories((prev) => [...prev, category]);
    }
  };

  const submitFilterFormHandle = (evt: FormEvent) => {
    evt.preventDefault();
    let filterProduct = [];

    if (checkedCategories.length > 0) {
      filterProduct = products.filter((product) =>
        checkedCategories.includes(product.category)
      );
    } else {
      filterProduct = products;
    }

    if (minPrice !== '' && maxPrice !== '') {
      filterProduct = filterProduct.filter(
        (product) =>
          Number(product.price) >= minPrice && Number(product.price) <= maxPrice
      );
    }

    setShowerProducts(filterProduct);
  };

  useEffect(() => {
    if (products.length > 0) {
      setShowerProducts(products);
      dispatch(setMaxProductPrice(calcMaxProductPrice(products)));
    }
  }, [products]);

  return (
    <MainLayout>
      <div className={style.wrapper}>
        <section className={style.shop}>
          <PageTitle title="Shop" />
          <div className={style.mainContent}>
            <Filter
              changeCheckboxCategoriesHandle={changeCheckboxCategoriesHandle}
              submitFilterFormHandle={submitFilterFormHandle}
              setMinPrice={setMinPrice}
              setMaxPrice={setMaxPrice}
              maxPrice={maxPrice}
            />
            <div className={style.catalog}>
              <ShopCategoryBlock showerProducts={showerProducts} />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default ShopPage;
