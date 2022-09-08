import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../hooks/store-hooks";
import { getMaxProductPrice } from "../../../store/products-process/selector";
import style from "./filter-price.module.scss";

type FilterPriceProps = {
  setMinPrice: (value: number | "") => void;
  setMaxPrice: (value: number | "") => void;
  maxPrice: number | "";
  minPrice: number | "";
};

function FilterPrice({
  setMinPrice,
  setMaxPrice,
  maxPrice,
  minPrice,
}: FilterPriceProps): JSX.Element {
  const maxProductPrice = useAppSelector(getMaxProductPrice);

  const changeMinPriceInputHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if (minPriceValue >= 0 && minPriceValue < maxProductPrice) {
      setMinPrice(minPriceValue);
    }
  };

  const changeMaxPriceInputHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if (maxPriceValue < maxProductPrice && maxPriceValue >= 0) {
      setMaxPrice(maxPriceValue);
    }
  };

  const blurMinPriceInputHandle = () => {
    if (minPrice > maxPrice && maxPrice !== "") {
      setMinPrice(0);
    } else if (maxPrice) {
      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
    } else {
      setMinPrice(minPrice);
      setMaxPrice(maxProductPrice);
    }
  };

  const blurMaxPriceInputHandle = () => {
    if (maxPrice < minPrice && minPrice !== "") {
      setMaxPrice(maxProductPrice);
    } else if (minPrice) {
      setMinPrice(minPrice);
      setMaxPrice(maxPrice);
    } else {
      setMaxPrice(maxPrice);
      setMinPrice(0);
    }
  };

  return (
    <>
      <div className={style.priceBlock}>
        <input
          type="string"
          name="minPrice"
          placeholder="0"
          value={minPrice}
          onChange={changeMinPriceInputHandle}
          onBlur={blurMinPriceInputHandle}
        />
        <input
          type="string"
          name="maxPrice"
          placeholder={String(maxProductPrice)}
          value={maxPrice}
          onChange={changeMaxPriceInputHandle}
          onBlur={blurMaxPriceInputHandle}
        />
      </div>
    </>
  );
}

export default FilterPrice;
