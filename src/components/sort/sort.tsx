import style from "./sort.module.scss";

function Sort(): JSX.Element {
  return (
    <div className={style.sort}>
      <div className={style.typeSort}>
        Sorting: <button>By price</button>
      </div>
      <div className={style.vectorSort}>
        <button className={style.asc}></button>
        <button className={`${style.desc} ${style.acitve}`}></button>
      </div>
    </div>
  );
}

export default Sort;
