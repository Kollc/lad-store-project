import style from "./filter-price.module.scss";

function FilterPrice(): JSX.Element {
  return (
    <>
      <div className={style.priceBlock}>
        <input type="number" name="minPrice" placeholder="0" />
        <input type="number" name="maxPrice" placeholder="10 000" />
      </div>
    </>
  );
}

export default FilterPrice;
