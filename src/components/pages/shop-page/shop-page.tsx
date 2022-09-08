import Filter from "../../filter/filter";
import MainLayout from "../../main-layout/main-layout";
import PageTitle from "../../page-title/page-title";
import ShopCategoryBlock from "../../shop-category-block/shop-category-block";
import style from "./shop-page.module.scss";

function ShopPage(): JSX.Element {
  return (
    <MainLayout>
      <div className={style.wrapper}>
        <section className={style.shop}>
          <PageTitle title="Shop" />
          <div className={style.mainContent}>
            <Filter />
            <div className={style.catalog}>
              <ShopCategoryBlock />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default ShopPage;
