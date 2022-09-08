import style from "./sort.module.scss";
import { TypeSort, VectorSort } from "../../consts";
import { useAppDispatch, useAppSelector } from "../../hooks/store-hooks";
import {
  setTypeSort,
  setVectorSort,
} from "../../store/products-process/product-process";
import {
  getTypeSort,
  getVectorSort,
} from "../../store/products-process/selector";

function Sort(): JSX.Element {
  const dispatch = useAppDispatch();
  const typeSort = useAppSelector(getTypeSort);
  const vectorSort = useAppSelector(getVectorSort);

  return (
    <div className={style.sort}>
      <div className={style.typeSort}>
        Sorting:
        <button
          className={typeSort === TypeSort.Default ? style.activeSort : ""}
          onClick={() => dispatch(setTypeSort(TypeSort.Default))}
        >
          A-Z
        </button>
        <button
          className={typeSort === TypeSort.ByPrice ? style.activeSort : ""}
          onClick={() => dispatch(setTypeSort(TypeSort.ByPrice))}
        >
          By price
        </button>
      </div>
      <div className={style.vectorSort}>
        <button
          className={`${style.asc} ${
            vectorSort === VectorSort.Asc ? style.acitve : ""
          }`}
          onClick={() => dispatch(setVectorSort(VectorSort.Asc))}
        ></button>

        <button
          className={`${style.desc} ${
            vectorSort === VectorSort.Desc ? style.acitve : ""
          }`}
          onClick={() => dispatch(setVectorSort(VectorSort.Desc))}
        ></button>
      </div>
    </div>
  );
}

export default Sort;
