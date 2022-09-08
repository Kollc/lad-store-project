import { useAppSelector } from "../../../hooks/store-hooks";
import { getProductCategories } from "../../../store/products-process/selector";
import FilterCheckbox from "./filter-checkbox/filter-checkbox";
import { ChangeEvent } from "react";

type FilterCheckboxListProps = {
  setFilterCategories: (value: string[]) => void;
  filterCategories: string[];
};

function FilterCheckboxList({
  setFilterCategories,
  filterCategories,
}: FilterCheckboxListProps): JSX.Element {
  const categories = useAppSelector(getProductCategories);

  const changeCheckboxCategoriesHandle = (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    const category = evt.target.value;

    if (filterCategories.includes(category)) {
      setFilterCategories(
        filterCategories.filter(
          (filterCategories) => filterCategories !== category
        )
      );
    } else {
      setFilterCategories([...filterCategories, category]);
    }
  };

  return (
    <>
      {categories.map((category) => (
        <FilterCheckbox
          key={category}
          category={category}
          onChangeCategory={changeCheckboxCategoriesHandle}
          filterCategories={filterCategories}
        />
      ))}
    </>
  );
}

export default FilterCheckboxList;
