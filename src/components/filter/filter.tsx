import FilterCheckbox from "./filter-checkbox/filter-checkbox";
import FilterPrice from "./filter-price/filter-price";
import style from "./filter.module.scss";

function Filter(): JSX.Element {
  return (
    <div className={style.filter}>
      <h2>Filter</h2>
      <form>
        <div className={style.block}>
          <h3>Category: </h3>
          <FilterCheckbox />
          <FilterCheckbox />
          <FilterCheckbox />
          <FilterCheckbox />
        </div>
        <div className={style.block}>
          <h3>Price: </h3>
          <FilterPrice />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Filter;
