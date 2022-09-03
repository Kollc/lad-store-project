import { ChangeEvent, FormEvent, useState } from "react";
import FilterCheckboxList from "./filter-checkbox-list/filter-checkbox-list";
import FilterPrice from "./filter-price/filter-price";
import style from "./filter.module.scss";

type FilterProps = {
  changeCheckboxCategoriesHandle: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
  submitFilterFormHandle: (value: FormEvent) => void;
  setMinPrice: (value: number | "") => void;
  setMaxPrice: (value: number | "") => void;
  maxPrice: number | "";
};

function Filter({
  changeCheckboxCategoriesHandle,
  submitFilterFormHandle,
  setMinPrice,
  setMaxPrice,
  maxPrice,
}: FilterProps): JSX.Element {
  return (
    <div className={style.filter}>
      <h2>Filter</h2>
      <form onSubmit={submitFilterFormHandle}>
        <div className={style.block}>
          <h3>Category: </h3>
          <FilterCheckboxList
            changeCheckboxCategoriesHandle={changeCheckboxCategoriesHandle}
          />
        </div>
        <div className={style.block}>
          <h3>Price: </h3>
          <FilterPrice
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            maxPrice={maxPrice}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Filter;
