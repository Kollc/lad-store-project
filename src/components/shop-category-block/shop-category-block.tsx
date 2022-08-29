import ShopItem from "../shop-item/shop-item";
import style from "./shop-category-block.module.scss";
function ShopCategoryBlock(): JSX.Element {
  return (
    <div className={style.categoryBlock}>
      <div className={style.categoryHeader}>
        <h2>Category</h2>
        <div></div>
      </div>
      <ul>
        <ShopItem />
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </ul>
    </div>
  );
}

export default ShopCategoryBlock;
