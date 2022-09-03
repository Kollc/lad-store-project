import { ChangeEvent } from "react";
import { getUpperCaseFirst } from "../../../../utils/utils";
import style from "./filter-checkbox.module.scss";

type FilterCheckboxProps = {
  category: string;
  onChangeCategory: (value: ChangeEvent<HTMLInputElement>) => void;
};

function FilterCheckbox({
  category,
  onChangeCategory,
}: FilterCheckboxProps): JSX.Element {
  return (
    <div className={style.container}>
      <input
        className={`${style.checkbox} visually-hidden`}
        type="checkbox"
        id={category}
        value={category}
        onChange={onChangeCategory}
      />
      <label htmlFor={category}>{getUpperCaseFirst(category)}</label>
      <div className={style.customChecked}>
        <svg
          fill="#724cf9"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z" />
        </svg>
      </div>
    </div>
  );
}

export default FilterCheckbox;
