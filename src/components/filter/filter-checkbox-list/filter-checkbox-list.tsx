import { ChangeEvent } from "react";
import { useAppSelector } from "../../../hooks/store-hooks";
import { getProductCategories } from "../../../store/products-process/selector";
import FilterCheckbox from "./filter-checkbox/filter-checkbox";

type FilterCheckboxListProps = {
  changeCheckboxCategoriesHandle: (
    value: ChangeEvent<HTMLInputElement>
  ) => void;
};

function FilterCheckboxList({
  changeCheckboxCategoriesHandle,
}: FilterCheckboxListProps): JSX.Element {
  const categories = useAppSelector(getProductCategories);
  return (
    <>
      {categories.map((category) => (
        <FilterCheckbox
          key={category}
          category={category}
          onChangeCategory={changeCheckboxCategoriesHandle}
        />
      ))}
    </>
  );
}

export default FilterCheckboxList;
