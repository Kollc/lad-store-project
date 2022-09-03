import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../hooks/store-hooks";
import { getMaxProductPrice } from "../../../store/products-process/selector";
import style from "./filter-price.module.scss";

type FilterPriceProps = {
  setMinPrice: (value: number | "") => void;
  setMaxPrice: (value: number | "") => void;
  maxPrice: number | "";
};

function FilterPrice({
  setMinPrice,
  setMaxPrice,
  maxPrice,
}: FilterPriceProps): JSX.Element {
  const maxProductPrice = useAppSelector(getMaxProductPrice);
  const [currentMinPrice, setCurrentMinPrice] = useState<number | "">("");
  const [currentMaxPrice, setCurrentMaxPrice] = useState<number | "">(maxPrice);

  const changeMinPriceInputHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const minPriceValue = Number(evt.target.value);

    if (minPriceValue >= 0 && minPriceValue < maxProductPrice) {
      setCurrentMinPrice(minPriceValue);
    }
  };

  const changeMaxPriceInputHandle = (evt: ChangeEvent<HTMLInputElement>) => {
    const maxPriceValue = Number(evt.target.value);

    if (maxPriceValue < maxProductPrice && maxPriceValue >= 0) {
      setCurrentMaxPrice(maxPriceValue);
    }
  };

  const blurMinPriceInputHandle = () => {
    if (currentMinPrice > currentMaxPrice && currentMaxPrice !== "") {
      setCurrentMinPrice(0);
    } else if (currentMaxPrice) {
      setMinPrice(currentMinPrice);
      setMaxPrice(currentMaxPrice);
    } else {
      setMinPrice(currentMinPrice);
      setMaxPrice(maxProductPrice);
    }
  };

  const blurMaxPriceInputHandle = () => {
    if (currentMaxPrice < currentMinPrice && currentMinPrice !== "") {
      setCurrentMaxPrice(maxProductPrice);
    } else if (currentMinPrice) {
      setMinPrice(currentMinPrice);
      setMaxPrice(currentMaxPrice);
    } else {
      setMaxPrice(currentMaxPrice);
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
          value={currentMinPrice}
          onChange={changeMinPriceInputHandle}
          onBlur={blurMinPriceInputHandle}
        />
        <input
          type="string"
          name="maxPrice"
          placeholder={String(maxProductPrice)}
          value={currentMaxPrice}
          onChange={changeMaxPriceInputHandle}
          onBlur={blurMaxPriceInputHandle}
        />
      </div>
    </>
  );
}

export default FilterPrice;
