import FilterCheckboxList from "./filter-checkbox-list/filter-checkbox-list";
import FilterPrice from "./filter-price/filter-price";
import style from "./filter.module.scss";
import { FormEvent, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import { getProducts } from "../../store/products-process/selector";
import {
  setMaxProductPrice,
  setShowProducts,
} from "../../store/products-process/product-process";
import { calcMaxProductPrice } from "../../utils/utils";

function Filter(): JSX.Element {
  const dispatch = useAppDispatch();
  const originProducts = useAppSelector(getProducts);

  const [filterCategories, setFilterCategories] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth <= 700) {
      setIsMobile(true);
    }
  }, [screenWidth]);

  const clickFilterButtonHandle = () => {
    setFilterOpen((prevState) => !prevState);
  };

  const submitFilterFormHandle = (evt: FormEvent) => {
    evt.preventDefault();
    let filterProduct = [];

    if (filterCategories.length > 0) {
      filterProduct = originProducts.filter((product) =>
        filterCategories.includes(product.category)
      );
    } else {
      filterProduct = originProducts;
    }

    if (minPrice !== "" && maxPrice !== "") {
      filterProduct = filterProduct.filter(
        (product) =>
          Number(product.price) >= minPrice && Number(product.price) <= maxPrice
      );
    }

    dispatch(setShowProducts(filterProduct));
    setFilterOpen(false);
  };

  const clickResetButtonHandle = () => {
    setMaxPrice("");
    setMinPrice("");
    setFilterCategories([]);
    dispatch(setShowProducts(originProducts));
    setFilterOpen(false);
  };

  useEffect(() => {
    if (originProducts.length > 0) {
      dispatch(setMaxProductPrice(calcMaxProductPrice(originProducts)));
    }
  }, [originProducts]);

  return (
    <div
      className={style.filter}
      style={{
        height: isMobile ? (filterOpen ? "500px" : "50px") : "500px",
      }}
    >
      <div className={style.heaaderFilter}>
        <h2>Filter</h2>
        <button
          className={`${style.mobileOpenIcon} ${
            filterOpen ? style.mobileOpenIconActive : ""
          }`}
          onClick={clickFilterButtonHandle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <form
        onSubmit={submitFilterFormHandle}
        style={{
          display: isMobile ? (filterOpen ? "block" : "none") : "block",
        }}
      >
        <div className={style.block}>
          <h3>Category: </h3>
          <FilterCheckboxList
            setFilterCategories={setFilterCategories}
            filterCategories={filterCategories}
          />
        </div>
        <div className={style.block}>
          <h3>Price: </h3>
          <FilterPrice
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            maxPrice={maxPrice}
            minPrice={minPrice}
          />
        </div>
        <div className={style.buttons}>
          <button type="submit">Submit</button>
          <button type="submit" onClick={clickResetButtonHandle}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
export default Filter;
